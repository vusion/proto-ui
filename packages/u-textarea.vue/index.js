import Field from 'u-field.vue';

export default {
    name: 'u-textarea',
    mixins: [Field],
    props: {
        value: { type: String },
    },
    data() {
        return {
            currentValue: this.value,
            compositionInputing: false,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onInput(e) {
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue);
        },
        onFocus(e) {
            this.$emit('focus', this.currentValue);
        },
        onBlur(e) {
            this.$emit('blur', this.currentValue);
        },
    },
};
