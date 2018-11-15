import MEmitter from '../m-emitter.vue';
import { MParent } from '../m-parent.vue';

const MMultiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MEmitter, MParent],
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
            if (value !== oldValue && value.length === oldValue.length
                && value.every((val, index) => val === oldValue[index]))
                return;

            this.watchValue(value);
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.value && this.watchValue(this.value);
        },
        selectedVMs(selectedVMs, oldVMs) {
            const oldValue = oldVMs.map((itemVM) => itemVM.value);
            const value = selectedVMs.map((itemVM) => itemVM.value);

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (value.length === oldValue.length && value.every((val, index) => val === oldValue[index]))
            //     return;

            // const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('change', {
                value,
                oldValue,
                selectedVMs,
                // selectedItems,
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
        select(itemVM, selected) {
            // Check if enabled
            if (this.readonly || this.disabled)
                return;

            // Method overloading
            if (selected === undefined)
                selected = !itemVM.currentSelected;

            // Prevent replication
            if (itemVM.currentSelected === selected)
                return;

            const oldValue = this.value;
            const oldVMs = this.selectedVMs;
            // const oldItems = oldVMs.map((itemVM) => itemVM.item);

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                oldValue,
                selected,
                itemVM,
                item: itemVM && itemVM.item,
                oldVMs,
                // oldItems,
            }, this))
                return;

            // Assign and sync `selected`
            itemVM.currentSelected = selected;
            itemVM.$emit('update:selected', selected);
            this.watchSelectedChange(itemVM);

            // Assign and sync `value`
            const selectedVMs = this.selectedVMs;
            const value = selectedVMs.map((itemVM) => itemVM.value);
            // const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            if (itemVM.currentSelected) {
                this.$emit('add', {
                    itemVM,
                    item: itemVM.item,
                    value,
                    oldValue,
                    selectedVMs,
                    // selectedItems,
                }, this);
            } else {
                this.$emit('remove', {
                    itemVM,
                    item: itemVM.item,
                    value,
                    oldValue,
                    selectedVMs,
                    // selectedItems,
                }, this);
            }

            this.$emit('select', {
                value,
                oldValue,
                selected: itemVM.currentSelected,
                itemVM,
                item: itemVM.item,
                selectedVMs,
                // selectedItems,
                itemVMs: selectedVMs, // @deprecated
                // items: selectedItems, // @deprecated
            }, this);
        },
    },
};

export * from './item.vue';
export { MMultiplex };
export default MMultiplex;
