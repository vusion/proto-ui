import ListViewItem from 'u-list-view-item.vue';

const ListView = {
    name: 'u-list-view',
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: ListViewItem, // easy for SubComponent to extend
            items: [],
            selectedItem: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            if (this.selectedItem && this.selectedItem.value === value)
                return;
            if (value === undefined)
                this.selectedItem = undefined;
            else
                this.selectedItem = this.items.find((item) => item.value === value);
        },
    },
    created() {
        this.$on('addItem', (item) => {
            item.listView = this;
            this.items.push(item);
        });
        this.$on('removeItem', (item) => {
            item.listView = undefined;
            this.items.splice(this.items.indexOf(item), 1);
        });
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, items have not been pushed.
        this.$nextTick(() => ListView.watch.value.call(this, this.value));
    },
    methods: {
        select($item) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedItem === $item)
                this.selectedItem = undefined;
            else
                this.selectedItem = $item;

            const value = this.selectedItem && this.selectedItem.value;
            const item = this.selectedItem && this.selectedItem.item;
            this.$emit('select', {
                value,
                item,
                $item: this.selectedItem,
            });
            this.$emit('input', value);
        },
    },
};

export default ListView;
