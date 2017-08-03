export default {
    name: 'u-list-view-item',
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            return this.$parent.selectedItem === this;
        },
    },
    beforeCreate() {
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
    methods: {
        select() {
            if (this.disabled || this.$parent.readonly || this.$parent.disabled)
                return;

            this.$emit('select', {
                selectedItem: this,
                value: this.value,
            });

            this.$parent.select(this);
        },
    },
};
