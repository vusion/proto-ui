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

            this.$emit('select', {
                value: this.value,
                item: this.item,
                $item: this,
            });

            this.listView.select(this);
        },
    },
};
