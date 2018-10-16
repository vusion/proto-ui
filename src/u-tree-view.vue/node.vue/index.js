import { MNode } from '../../m-root.vue';

const UTreeViewNode = {
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
    mixins: [MNode],
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
            // @inherit: nodeVMs: [],
            // @inherit: rootVM: undefined,
            // @inherit: parentVM: undefined,
            currentExpanded: this.expanded,
            currentChecked: this.checked,
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

export { UTreeViewNode };
export default UTreeViewNode;
