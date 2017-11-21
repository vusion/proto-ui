import Field from '../u-field.vue';

export default {
    name: 'u-switch',
    mixins: [Field],
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
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
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        toggle() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.currentValue;
            const value = !this.currentValue;

            let cancel = false;
            this.$emit('before-toggle', {
                value,
                oldValue,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentValue = value;

            this.$emit('input', value);
            this.$emit('toggle', { value, oldValue });
        },
    },
};
