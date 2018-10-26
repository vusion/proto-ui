import { MParent } from '../m-parent.vue';

const Multiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MParent],
    props: {
        value: null,
        autoSelect: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            // @TODO: Vue 中 相同复杂类型也会认为是改变？
            if (selectedVM === oldVM)
                return;
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            }, this);
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可以已不存在，这里暂存然后重新查找一遍
            const value = this.selectedVM ? this.selectedVM.value : this.value;
            this.selectedVM = undefined;
            this.watchValue(value);
        },
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // If not, itemVMs have not been pushed.
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            this.itemVMs.forEach((itemVM) => itemVM.currentSelected = !!(value && value.includes(itemVM.value)));
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

            itemVM.currentSelected = !itemVM.currentSelected;
            const itemVMs = this.itemVMs.filter((itemVM) => itemVM.currentSelected);
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
export { Multiplex };
export default Multiplex;
