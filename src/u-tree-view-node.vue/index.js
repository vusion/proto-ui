import Emitter from '../u-emitter.vue';

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
            nodeVMs: [],
            currentExpanded: this.expanded,
            currentChecked: this.checked,
            parentVM: undefined,
            rootVM: undefined,
        };
    },
    computed: {
        selected() {
            return this.rootVM.selectedVM === this;
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
        this.dispatch(this.$options.name, 'add-node-vm', this);
        !this.parentVM && this.dispatch(this.$options.rootName, 'add-node-vm', this);

        this.$on('add-node-vm', (nodeVM) => {
            nodeVM.rootVM = this.rootVM;
            nodeVM.parentVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', (nodeVM) => {
            nodeVM.rootVM = undefined;
            nodeVM.parentVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    destroyed() {
        this.dispatch(this.$options.rootName, 'remove-node-vm', this);
        this.dispatch(this.$options.name, 'remove-node-vm', this);
    },
    methods: {
        select() {
            if (this.disabled || this.rootVM.readonly || this.rootVM.disabled)
                return;

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                node: this.node,
                nodeVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.rootVM.select(this);
        },
        toggle(expanded) {
            if (this.disabled || this.rootVM.readonly || this.rootVM.disabled)
                return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            if (expanded === oldExpanded)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                node: this.node,
                nodeVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);

            if (this.rootVM.accordion) {
                (this.parentVM || this.rootVM).nodeVMs.forEach((nodeVM) => {
                    if (nodeVM !== this) {
                        nodeVM.currentExpanded = false;
                        nodeVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded,
                node: this.node,
                nodeVM: this,
            }, this);

            this.rootVM.onToggle(this, expanded);
        },
        check(checked, direction = 'up+down') {
            const oldChecked = this.currentChecked;
            this.currentChecked = checked;
            this.$emit('update:checked', checked, this);

            // down
            if (direction.includes('down')) {
                this.nodeVMs.forEach((nodeVM) => {
                    nodeVM.check(checked, 'down');
                });
            }

            // up
            const parentVM = this.parentVM;
            if (direction.includes('up') && parentVM) {
                let count = 0;
                parentVM.nodeVMs.forEach((nodeVM) => {
                    if (nodeVM.currentChecked)
                        count++;
                    else if (nodeVM.currentChecked === null)
                        count += 0.5;
                });

                if (count === 0)
                    parentVM.check(false, 'up');
                else if (count === parentVM.nodeVMs.length)
                    parentVM.check(true, 'up');
                else
                    parentVM.check(null, 'up');
            }

            if (direction === 'up+down') {
                this.$emit('check', {
                    checked,
                    oldChecked,
                    node: this.node,
                    nodeVM: this,
                }, this);

                this.rootVM.onCheck(this, checked, oldChecked);
            }
        },
    },
};
