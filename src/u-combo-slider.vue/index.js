import Field from '../u-field.vue';

export default {
    name: 'u-combo-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        start: { type: Number, default: 0 },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        formatter: { type: [String, Object] },
        fixOn: { type: String, default: 'blur' },
        hideButtons: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
        currentValue(currentValue, oldValue) {
            this.$emit('change', {
                value: currentValue,
                oldValue,
            });
        },
    },
    methods: {
        onInput(value) {
            const oldValue = this.currentValue;
            if (value >= this.start) {
                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('update:value', value);
            } else {
                this.$refs.numberInput.input(oldValue);
            }
        },
        onSlide($event) {
            this.$emit('slide', $event);
        },
    },
};
