export default {
    name: 'u-switch',
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            value_: this.value,
        };
    },
    watch: {
        value(value) {
            this.value_ = value;
        },
    },
    methods: {
        change() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value_;
            this.value_ = !this.value_;

            this.$emit('input', this.value_);
            this.$emit('change', this.value_, oldValue);
            this.$emit('update:value', this.value_);
        },
    },
};
