import Field from 'u-field.vue';

export default {
    name: 'u-list-view',
    childName: 'u-list-view-item',
    mixins: [Field],
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: this.$options.childName,
            items: [],
            selectedItem: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            if (this.multiple)
                this.items.forEach((item) => item.currentSelected = value && value.includes(item.value));
            else {
                if (this.selectedItem && this.selectedItem.value === value)
                    return;
                if (value === undefined)
                    this.selectedItem = undefined;
                else
                    this.selectedItem = this.items.find((item) => item.value === value);
            }
        },
    },
    created() {
        this.$on('addItem', (item) => {
            item.parent = this;
            this.items.push(item);
        });
        this.$on('removeItem', (item) => {
            item.parent = undefined;
            this.items.splice(this.items.indexOf(item), 1);
        });
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, items have not been pushed.
        this.$nextTick(() => this.$options.watch.value.call(this, this.value));
    },
    methods: {
        select($item) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('select', {
                value: $item && $item.value,
                oldValue,
                item: $item && $item.item,
                $item,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            if (this.multiple) {
                $item.currentSelected = !$item.currentSelected;
                const $items = this.items.filter(($item) => $item.currentSelected);
                const value = $items.map(($item) => $item.value);
                const items = $items.map(($item) => $item.item);

                this.$emit('input', value);
                this.$emit('change', {
                    value,
                    oldValue,
                    items,
                    $items,
                });
            } else {
                if (this.cancelable && this.selectedItem === $item)
                    this.selectedItem = undefined;
                else
                    this.selectedItem = $item;

                const value = this.selectedItem && this.selectedItem.value;
                const item = this.selectedItem && this.selectedItem.item;

                this.$emit('input', value);
                this.$emit('change', {
                    value,
                    oldValue,
                    item,
                    $item: this.selectedItem,
                });
            }
        },
    },
};
