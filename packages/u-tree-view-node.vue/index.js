import Emitter from 'u-emitter.vue';

export default {
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
    mixins: [Emitter],
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object,
    },
    data() {
        return {
            nodes: [],
            currentExpanded: this.expanded,
            currentChecked: this.checked,
            parent: undefined,
            root: undefined,
        };
    },
    computed: {
        selected() {
            return this.root.selectedNode === this;
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
        checked(checked) {
            this.currentChecked = checked;
        },
    },
    created() {
        this.dispatch(this.$options.name, 'add-node', this);
        !this.parent && this.dispatch(this.$options.rootName, 'add-node', this);

        this.$on('add-node', (node) => {
            node.root = this.root;
            node.parent = this;
            this.nodes.push(node);
        });
        this.$on('remove-node', (node) => {
            node.root = undefined;
            node.parent = undefined;
            this.nodes.splice(this.nodes.indexOf(node), 1);
        });
    },
    destroyed() {
        this.dispatch(this.$options.rootName, 'remove-node', this);
        this.dispatch(this.$options.name, 'remove-node', this);
    },
    methods: {
        select() {
            if (this.disabled || this.root.readonly || this.root.disabled)
                return;

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                node: this.node,
                $node: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.root.select(this);
        },
        enterItem(e) {
            this.root.$emit('enter-item', this.node, e);
        },
        leaveItem(e) {
            this.root.$emit('leave-item', this.node, e);
        },
        toggle(expanded) {
            if (this.disabled || this.root.readonly || this.root.disabled)
                return;

            const oldExpanded = this.currentExpanded;
            if (expanded === undefined)
                expanded = !this.currentExpanded;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                oldExpanded,
                node: this.node,
                $node: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentExpanded = expanded;

            this.$emit('update:expanded', expanded);
            this.$emit('toggle', {
                expanded,
                oldExpanded,
                node: this.node,
                $node: this,
            });

            this.root.toggle(this, expanded, oldExpanded);
        },
        check(checked, direction = 'up+down') {
            const oldChecked = this.currentChecked;
            this.currentChecked = checked;
            this.$emit('update:checked', checked);

            // down
            if (direction.includes('down')) {
                this.nodes.forEach((node) => {
                    node.check(checked, 'down');
                });
            }

            // up
            const $parent = this.parent;
            if (direction.includes('up') && $parent) {
                let count = 0;
                $parent.nodes.forEach((node) => {
                    if (node.currentChecked)
                        count++;
                    else if (node.currentChecked === null)
                        count += 0.5;
                });

                if (count === 0)
                    $parent.check(false, 'up');
                else if (count === $parent.nodes.length)
                    $parent.check(true, 'up');
                else
                    $parent.check(null, 'up');
            }

            if (direction === 'up+down') {
                this.$emit('check', {
                    checked,
                    oldChecked,
                    node: this.node,
                    $node: this,
                });

                this.root.check(this, checked, oldChecked);
            }
        },
    },
};
