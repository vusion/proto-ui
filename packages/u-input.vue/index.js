import Field from 'u-field.vue';

export default {
    name: 'u-input',
    mixins: [Field],
    props: {
        value: { type: String },
        color: { type: String },
    },
    data() {
        return {
            currentValue: this.value,
            compositionInputing: false,
            formItem: undefined,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.input;
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
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
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
    },
};
