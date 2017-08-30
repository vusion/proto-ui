import Emitter from 'u-emitter.vue';

export default {
    name: 'u-list-view-item',
    mixins: [Emitter],
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
    },
    data() {
        return {
            currentSelected: false,
            listView: undefined,
        };
    },
    computed: {
        selected() {
            return this.listView.selectedItem === this;
        },
    },
    created() {
        this.dispatch('u-list-view', 'addItem', this);
    },
    destroyed() {
        this.dispatch('u-list-view', 'removeItem', this);
    },
    methods: {
        select() {
            if (this.disabled || this.listView.readonly || this.listView.disabled)
                return;

            let cancel = false;
            this.$emit('select', {
                value: this.value,
                item: this.item,
                $item: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.listView.select(this);
        },
    },
};
