import Field from '../u-field.vue';
import debounce from 'lodash/debounce';
import { repeatClick } from '../base/directives';
import { generateStringFormatter } from '../base/utils/formatter';

export default {
    name: 'u-number-input',
    mixins: [Field],
    directives: { repeatClick },
    props: {
        // 只能传入数字
        value: { type: Number, default: 0 },
        min: { type: Number, default: -Infinity },
        max: { type: Number, default: Infinity },
        step: { type: Number, default: 1, validator: (step) => step >= 0 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        formatter: { type: [String, Object] },
        fixOn: { type: String, default: 'blur' },
        hideButtons: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        const data = {
            correctValue: this.value,
            // currentValue 就是 formattedValue，与`<input>`中的实际值保持一致
            currentValue: this.value,
            currentFormatter: undefined,
        };

        if (this.converter instanceof Object) {
            data.currentFormatter = this.formatter;
        } else if (typeof this.formatter === 'string') {
            data.currentFormatter = generateStringFormatter(this.formatter);
        } else {
            data.currentFormatter = {
                get(value) { return value; },
                set(value) { return value; },
            };
        }

        data.currentValue = data.currentFormatter.get(this.value);

        return data;
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
            this.currentValue = this.currentFormatter.get(value);
        },
        currentValue(value, oldValue) {
            this.$emit('change', {
                value: this.currentFormatter.set(value),
                oldValue: this.currentFormatter.set(oldValue),
            });
        },
    },
    created() {
        this.debouncedInput = debounce(this.input, 400);
    },
    methods: {
        fix(value) {
            if (isNaN(value))
                return this.correctValue;
            else {
                value = +value;
                // 最大最小约束
                value = Math.min(Math.max(this.min, value), this.max);
                // 精度约束
                value = Math.round(value / this.precision) * this.precision;
                // 保留小数位数
                if (this.precision < 1)
                    value = +value.toFixed(-Math.log10(this.precision));
                return value;
            }
        },
        /**
         * 单纯输入
         * @param {*} value 输入值
         */
        input(value) {
            if (this.readonly || this.disabled)
                return;

            value = this.fix(value);

            this.correctValue = value;
            this.currentValue = this.currentFormatter.get(value);
            this.$refs.input.currentValue = this.currentValue;

            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        increase() {
            this.input(+this.correctValue + this.step);
        },
        decrease() {
            this.input(+this.correctValue - this.step);
        },
        onInput(value) {
            if (this.fixOn === 'input')
                this.debouncedInput(this.currentFormatter.set(value));
            else if (this.fixOn === 'blur') {
                // 这种情况下直接透传
                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('update:value', value);
            }
        },
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            if (this.fixOn === 'blur')
                this.input(this.currentFormatter.set(this.currentValue));

            this.$emit('blur', e);
        },
    },
};
