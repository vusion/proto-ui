import Field from 'u-field.vue';

export default {
    name: 'u-input',
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
            this.$emit('input', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
    },
};
