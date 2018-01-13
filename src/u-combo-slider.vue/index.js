import Field from '../u-field.vue';

export default {
    name: 'u-combo-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
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
            if (this.currentValue === value)
                return;

            this.currentValue = value;
            this.$emit('input', value);
            this.$emit('update:value', value);
        },
    },
};
