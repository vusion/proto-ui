import { MParent } from '../m-parent.vue';

const Multiplex = {
    name: 'm-multiplex',
    groupName: 'm-multiplex-group',
    childName: 'm-multiplex-item',
    mixins: [MParent],
    props: {
        value: null,
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
        // This method just run once after pushing many itemVMs
        itemVMs() {
            // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
            // this.watchValue(value);
        },
    },
    mounted() {
        // Must trigger `value` watcher at mounted hook.
        // Because itemVMs haven't been pushed before it.
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            this.itemVMs.forEach((itemVM) => itemVM.currentSelected = !!(value && Array.isArray(value) && value.includes(itemVM.value)));
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
