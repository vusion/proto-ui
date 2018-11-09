import { MParent } from '../m-parent.vue';

const MMultiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MParent],
    props: {
        value: Array,
        keepOrder: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVMs: [],
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value, oldValue) {
            if (!Array.isArray(value))
                throw new Error('`value` should be an Array!');

            // 剪枝
            if (value.length === oldValue.length && value.every((val, index) => val === oldValue[index]))
                return;

            this.watchValue(value);
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.value && this.watchValue(this.value);
        },
        selectedVMs(itemVMs, oldVMs) {
            const oldValue = oldVMs.map((itemVM) => itemVM.value);
            const value = itemVMs.map((itemVM) => itemVM.value);

            if (value.length === oldValue.length && value.every((val, index) => val === oldValue[index]))
                return;

            const items = itemVMs.map((itemVM) => itemVM.item);
            this.$emit('change', {
                value,
                oldValue,
                items,
                itemVMs,
            });
        },
    },
    // mounted() {
    // Don't need trigger `value` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValue(this.value);
    // },
    methods: {
        watchValue(value) {
            const selectedVMs = [];
            if (!this.keepOrder) {
                value.forEach((val) => {
                    const itemVM = this.itemVMs.find((itemVM) => itemVM.value === val);
                    if (itemVM) {
                        itemVM.currentSelected = true;
                        selectedVMs.push(itemVM);
                    }
                });
            } else {
                this.itemVMs.forEach((itemVM) => {
                    if ((itemVM.currentSelected = value.includes(itemVM.value)))
                        selectedVMs.push(itemVM);
                });
            }
            this.selectedVMs = selectedVMs;
            // @TODO 单纯使用 selected 模式
        },
        watchSelectedChange(selectedVM) {
            if (!this.keepOrder) {
                const index = this.selectedVMs.indexOf(selectedVM);
                if (selectedVM.currentSelected && !~index)
                    this.selectedVMs.push(selectedVM);
                else if (~index)
                    this.selectedVMs.splice(index, 1);
            } else
                this.selectedVMs = this.itemVMs.filter((itemVM) => itemVM.currentSelected);
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
            itemVM.currentSelected = !itemVM.currentSelected;
            itemVM.$emit('update:selected', itemVM.currentSelected);
            this.watchSelectedChange(itemVM);

            const itemVMs = this.selectedVMs;
            const value = itemVMs.map((itemVM) => itemVM.value);
            const items = itemVMs.map((itemVM) => itemVM.item);

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('select', {
                value,
                oldValue,
                items,
                itemVMs,
            }, this);
        },
    },
};

export * from './item.vue';
export { MMultiplex };
export default MMultiplex;
