import { MParent } from '../m-parent.vue';

const MSinglex = {
    name: 'm-singlex',
    groupName: 'm-singlex-group',
    childName: 'm-singlex-item',
    mixins: [MParent],
    props: {
        value: null,
        autoSelect: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVM: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            // 无需剪枝
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            const value = selectedVM ? selectedVM.value : undefined;
            const oldValue = oldVM ? oldVM.value : undefined;
            if (value === oldValue)
                return;

            this.$emit('change', {
                value,
                oldValue,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            }, this);
        },
        // This method just run once after pushing many itemVMs
        itemVMs(itemVMs) {
            if (!itemVMs.includes(this.selectedVM)) {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                const value = this.selectedVM ? this.selectedVM.value : this.value;
                this.selectedVM = undefined;
                this.watchValue(value);
            }
        },
    },
    // mounted() {
    // Don't need trigger `value` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValue(this.value);
    // },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) // 下面需要走 value === undefined
                return;
            if (value === undefined) {
                if (this.autoSelect && !this.placeholder) // this.placeholder for select...
                    this.selectedVM = this.itemVMs.find((itemVM) => !itemVM.disabled) || undefined;
                else
                    this.selectedVM = undefined;
            } else {
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
                this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
            }
        },
        select(itemVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.value,
                oldValue,
                item: itemVM && itemVM.item,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.handleSelect(itemVM, oldValue);
        },
        handleSelect(itemVM, oldValue) {
            if (this.cancelable && this.selectedVM === itemVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = itemVM;

            const value = this.selectedVM && this.selectedVM.value;
            const item = this.selectedVM && this.selectedVM.item;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value,
                oldValue,
                item,
                itemVM: this.selectedVM,
            }, this);
        },
    },
};

export * from './item.vue';
export { MSinglex };
export default MSinglex;
