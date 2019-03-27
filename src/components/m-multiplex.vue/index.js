import MEmitter from '../m-emitter.vue';
import { MParent } from '../m-parent.vue';

export const MMultiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MEmitter, MParent],
    model: 'values',
    props: {
        values: Array,
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
        // It is dynamic to find selected item by values
        // so using watcher is better than computed property.
        values(values, oldValues) {
            if (!Array.isArray(values))
                throw new Error('`values` should be an Array!');

            // 剪枝
            if (values !== oldValues && values.length === oldValues.length
                && values.every((val, index) => val === oldValues[index]))
                return;

            this.watchValues(values);
        },
        selectedVMs(selectedVMs, oldVMs) {
            const oldValues = oldVMs.map((itemVM) => itemVM.value);
            const values = selectedVMs.map((itemVM) => itemVM.value);

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (values.length === oldValues.length && values.every((val, index) => val === oldValues[index]))
            //     return;

            // const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('change', {
                values,
                oldValues,
                selectedVMs,
                // selectedItems,
            });
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.values && this.watchValues(this.values);
        },
    },
    // mounted() {
    // Don't need trigger `values` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValues(this.values);
    // },
    methods: {
        watchValues(values) {
            const selectedVMs = [];
            if (!this.keepOrder) {
                values.forEach((val) => {
                    const itemVM = this.itemVMs.find((itemVM) => itemVM.value === val);
                    itemVM && selectedVMs.push(itemVM);
                });
            } else {
                this.itemVMs.forEach((itemVM) => {
                    if (values.includes(itemVM.value))
                        selectedVMs.push(itemVM);
                });
            }
            // 必须单独指定
            this.itemVMs.forEach((itemVM) => itemVM.currentSelected = values.includes(itemVM.value));
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

            const oldValues = this.values;
            const oldVMs = this.selectedVMs;
            // const oldItems = oldVMs.map((itemVM) => itemVM.item);

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                oldValues,
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

            // Assign and sync `values`
            const selectedVMs = this.selectedVMs;
            const values = selectedVMs.map((itemVM) => itemVM.value);
            // const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('input', values, this);
            this.$emit('update:values', values, this);

            // Emit `after-` events
            if (itemVM.currentSelected) {
                this.$emit('add', {
                    itemVM,
                    item: itemVM.item,
                    values,
                    oldValues,
                    selectedVMs,
                    // selectedItems,
                }, this);
            } else {
                this.$emit('remove', {
                    itemVM,
                    item: itemVM.item,
                    values,
                    oldValues,
                    selectedVMs,
                    // selectedItems,
                }, this);
            }

            this.$emit('select', {
                values,
                oldValues,
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

export default MMultiplex;
