import Field from '../u-field.vue';

export default {
    name: 'u-number-input',
    mixins: [Field],
    props: {
        // 只能传入数字
        value: { type: Number, default: 0 },
        // 只能传入数字或空字符串
        // value: { type: [Number, String], default: '', validator: (value) => !isNaN(value) && value !== null },
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1 },
        fixed: { type: Number, default: 4 },
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
        fix(value) {
            if (isNaN(value) || value === '' || value === null)
                return this.currentValue;
            else {
                value = +(+value).toFixed(this.fixed);
                return Math.min(Math.max(this.min, value), this.max);
            }
        },
        input(value) {
            if (this.readonly || this.disabled)
                return;

            value = this.fix(value);
            if (this.currentValue === value)
                return;

            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        increase() {
            this.input(+(+this.currentValue + this.step).toFixed(this.fixed));
        },
        decrease() {
            this.input(+(+this.currentValue - this.step).toFixed(this.fixed));
        },
        onBlur(e) {
            this.$refs.input.currentValue = this.currentValue;
        },
    },
};
