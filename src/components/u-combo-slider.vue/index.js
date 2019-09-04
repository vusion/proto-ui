import MField from '../m-field.vue';

export const UComboSlider = {
    name: 'u-combo-slider',
    mixins: [MField],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        range: { type: Array, default() { return []; } },
        formatter: { type: [String, Object] },
        syncOn: { type: String, default: 'input' },
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
            }, this);
        },
    },
    computed: {
        numberMin() {
            return Math.max(this.min, this.range[0] === undefined ? -Infinity : this.range[0]);
        },
        numberMax() {
            return Math.min(this.max, this.range[1] === undefined ? Infinity : this.range[1]);
        },
    },
    methods: {
        onValidate($event) {
            if (this.syncOn === 'blur')
                return;
            const value = $event.value;

            // 最小值的情况不同步，不然会显得很怪异
            if (!$event.valid && value === this.min)
                return;
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        onInput(value) {
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
        },
        onSlide($event) {
            this.$emit('slide', $event, this);
        },
    },
};

export default UComboSlider;
