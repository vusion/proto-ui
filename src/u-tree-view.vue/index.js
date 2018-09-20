import Field from '../u-field.vue';

const walk = (rootVM, func) => {
    let queue = [];
    queue = queue.concat(rootVM.nodeVMs);
    let nodeVM;
    while ((nodeVM = queue.shift())) {
        queue = queue.concat(nodeVM.nodeVMs);
        const result = func(nodeVM);
        if (result !== undefined)
            return result;
    }
};

const find = (rootVM, func) => walk(rootVM, (nodeVM) => {
    if (func(nodeVM))
        return nodeVM;
});

export default {
    name: 'u-tree-view',
    childName: 'u-tree-view-node',
    mixins: [Field],
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        checkable: { type: Boolean, default: false },
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: this.$options.childName, // easy for SubComponent inheriting
            nodeVMs: [],
            selectedVM: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            });
        },
        // This method just run once after pushing many nodeVMs
        nodeVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        },
    },
    created() {
        this.$on('add-node-vm', (nodeVM) => {
            nodeVM.rootVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', (nodeVM) => {
            nodeVM.rootVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, itemVMs have not been pushed.
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = undefined;
            else {
                this.selectedVM = find(this, (nodeVM) => nodeVM.value === value);
                if (this.selectedVM) {
                    let nodeVM = this.selectedVM.parentVM;
                    while (nodeVM !== this.rootVM) {
                        nodeVM.currentExpanded = true;
                        nodeVM = nodeVM.parentVM;
                    }
                }
            }
        },
        select(nodeVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: nodeVM && nodeVM.value,
                oldValue,
                node: nodeVM && nodeVM.node,
                nodeVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            if (this.cancelable && this.selectedVM === nodeVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = nodeVM;

            const value = this.selectedVM && this.selectedVM.value;
            const node = this.selectedVM && this.selectedVM.node;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value,
                oldValue,
                node,
                nodeVM: this.selectedVM,
            });
        },
        onToggle(nodeVM, expanded) {
            this.$emit('toggle', {
                expanded,
                node: nodeVM.node,
                nodeVM,
            });
        },
        toggleAll(expanded) {
            walk(this, (nodeVM) => nodeVM.toggle(expanded));
        },
        onCheck(nodeVM, checked, oldChecked) {
            this.$emit('check', {
                checked,
                oldChecked,
                node: nodeVM.node,
                nodeVM,
            });
        },
        checkAll(checked) {
            this.nodeVMs.forEach((nodeVM) => !nodeVM.currentDisabled && nodeVM.check(checked));
        },
    },
};
