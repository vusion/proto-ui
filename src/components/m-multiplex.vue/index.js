import MEmitter from '../m-emitter.vue';
import { MParent } from '../m-parent.vue';

export const MMultiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MEmitter, MParent],
    model: {
        prop: 'values',
        event: 'input',
    },
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
            selectedValues: this.values,
        };
    },
    watch: {
        values(values, oldValues) {
            if (!Array.isArray(values))
                throw new Error('`values` should be an Array!');

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (values !== oldValues && values.length === oldValues.length
            //     && values.every((val, index) => val === oldValues[index]))
            //     return;

            this.selectedValues = values;
            this.watchValues(values);
        },
        selectedVMs(selectedVMs, oldVMs) {
            // const oldValues = oldVMs.map((itemVM) => itemVM.value);
            const values = selectedVMs.map((itemVM) => itemVM.value);

            // @TODO: 因为是同一个数组。。没有好的剪枝方法
            // if (values.length === oldValues.length && values.every((val, index) => val === oldValues[index]))
            //     return;

            const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('change', {
                values,
                // @TODO: oldValues,
                selectedVMs,
                selectedItems,
            });
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里需要重新查找一遍
            this.watchValues(this.selectedValues);
        },
    },
    mounted() {
        // Don't need trigger `values` watcher at mounted hook.
        // Because there's a watcher for itemVMs.
        // this.watchValues(this.values);
        this.$nextTick(() => this.selectedValues = this.selectedVMs.map((itemVM) => itemVM.value));
    },
    methods: {
        watchValues(values) {
            const selectedVMs = [];
            if (values) {
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
                // 必须单独指定一遍，因为有取消掉的
                this.itemVMs.forEach((itemVM) => itemVM.currentSelected = values.includes(itemVM.value));
            } else {
                this.itemVMs.forEach((itemVM) => itemVM.currentSelected && selectedVMs.push(itemVM));
            }
            this.selectedVMs = selectedVMs;
        },
        watchSelectedChange(selectedVM) {
            if (!this.keepOrder) {
                const index = this.selectedVMs.indexOf(selectedVM);
                if (selectedVM.currentSelected && !~index) {
                    this.selectedVMs.push(selectedVM);
                    this.selectedValues.push(selectedVM.value);
                } else if (!selectedVM.currentSelected && ~index) {
                    this.selectedVMs.splice(index, 1);
                    this.selectedValues.splice(index, 1);
                }
            } else
                this.selectedVMs = this.itemVMs.filter((itemVM) => itemVM.currentSelected);
        },
        select(itemVM, selected) {
            // Check if enabled
            if (this.readonly || this.disabled || !itemVM || itemVM.disabled)
                return;

            // Method overloading
            if (selected === undefined)
                selected = !itemVM.currentSelected;

            // Prevent replication
            if (itemVM.currentSelected === selected)
                return;

            const oldValues = this.selectedValues;
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
            this.selectedValues = values;
            const selectedItems = selectedVMs.map((itemVM) => itemVM.item);
            this.$emit('input', values, this);
            this.$emit('update:values', values, this);

            this.$emit('select', {
                values,
                // oldValues,
                selected: itemVM.currentSelected,
                itemVM,
                item: itemVM.item,
                selectedVMs,
                selectedItems,
                itemVMs: selectedVMs, // @deprecated
                items: selectedItems, // @deprecated
            }, this);
        },
    },
};

export * from './item.vue';

export default MMultiplex;
