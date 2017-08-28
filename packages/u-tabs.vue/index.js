export default {
    name: 'u-tabs',
    props: {
        index: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            items: [],
            currentIndex: this.index,
        };
    },
    computed: {
        selectedItem() {
            return this.items[this.currentIndex];
        },
    },
    created() {
        this.$on('addItem', (item) => {
            item.tabs = this;
            this.items.push(item);
        });
        this.$on('removeItem', (item) => {
            item.tabs = undefined;
            this.items.splice(this.items.indexOf(item), 1);
        });
    },
    methods: {
        select(index) {
            if (this.readonly || this.disabled || this.items[index].disabled)
                return;

            const $tab = this.items[index];
            this.currentIndex = index;

            this.$emit('select', {
                index,
                $tab,
            });
            this.$emit('update:index', index);

            this.router && $tab.navigate();
        },
    },
};
