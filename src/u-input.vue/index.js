import Field from '../u-field.vue';

export default {
    name: 'u-input',
    mixins: [Field],
    props: {
        value: { type: [String, Number] },
        color: { type: String },
    },
    data() {
        return {
            focused: false,
            currentValue: this.value,
            compositionInputing: false,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.input;
            delete listeners.change;
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue });
        },
    },
    methods: {
        onInput(e) {
            if (!this.compositionInputing) {
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue);
                this.$emit('update:value', this.currentValue);
            }
        },
        onFocus(e) {
            this.focused = true;
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.focused = false;
            this.$emit('blur', e);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.blur.blur();
        },
    },
};
