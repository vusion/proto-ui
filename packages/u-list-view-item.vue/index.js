import Emitter from 'u-emitter.vue';

export default {
    name: 'u-list-view-item',
    parentName: 'u-list-view',
    mixins: [Emitter],
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
    },
    data() {
        return {
            currentSelected: false,
            parent: undefined,
        };
    },
    computed: {
        selected() {
            return this.parent.selectedItem === this;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'addItem', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'removeItem', this);
    },
    methods: {
        select() {
            if (this.disabled || this.parent.readonly || this.parent.disabled)
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

            this.parent.select(this);
        },
    },
};
