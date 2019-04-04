import MField from '../m-field.vue';
import debounce from 'lodash/debounce';
import { repeatClick } from '../../directives';
import { noopFormatter, NumberFormatter } from '../../utils/Formatters';

const UNumberInput = {
    name: 'u-number-input',
    mixins: [MField],
    directives: { repeatClick },
    props: {
        // 只能传入数字
        value: { type: [Number, String], default: 0 },
        defaultValue: Number,
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
            currentValue: this.fix(this.value),
            // 格式化后的 value，与`<input>`中的实际值保持一致
            formattedValue: this.value,
            currentFormatter: undefined,
        };

        if (this.formatter instanceof Object)
            data.currentFormatter = this.formatter;
        else if (typeof this.formatter === 'string')
            data.currentFormatter = new NumberFormatter(this.formatter);
        else
            data.currentFormatter = noopFormatter;

        // 初始值需要在最小值和最大值范围之内
        data.formattedValue = data.currentFormatter.format(data.currentValue);

        return data;
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['input', 'change', 'focus', 'blur', 'update:value'].forEach((prop) => {
                delete listeners[prop];
            });
            return listeners;
        },
    },
    watch: {
        value(value, oldValue) {
            this.currentValue = this.fix(value);
            this.formattedValue = this.currentFormatter.format(value);
        },
    },
    created() {
        this.debouncedInput = debounce(this.input, 400);
        this.$emit('change', {
            value: this.fix(this.value),
            oldValue: undefined,
            formattedValue: this.fix(this.currentFormatter.format(this.value)),
        }, this);
    },
    methods: {
        fix(value) {
            // 为空时使用默认值
            if (typeof value === 'string' && value.trim() === '' || value === null)
                value = this.defaultValue !== undefined ? this.defaultValue : this.currentValue || 0;
            else if (isNaN(value))
                value = this.currentValue || this.defaultValue || 0;
            value = +value;
            // 精度约束
            value = Math.round(value / this.precision) * this.precision;
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.floor(Math.log10(this.precision)) : 0);
            return value;
        },
        /**
         * 单纯输入
         * @param {*} value 输入值
         */
        input(value) {
            if (this.readonly || this.disabled)
                return;
            value = this.fix(value);

            const oldValue = this.currentValue;
            this.currentValue = value;
            this.formattedValue = this.currentFormatter.format(value);
            this.$refs.input.currentValue = this.formattedValue;

            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.$emit('change', {
                value,
                oldValue,
                formattedValue: this.formattedValue,
            }, this);
        },
        /**
         * 按上下按钮发送 adjust 事件
         * @param {*} value
         */
        adjust(value) {
            const oldValue = this.currentValue;

            let cancel = false;
            this.$emit('before-adjust', {
                value,
                oldValue,
                formattedValue: this.currentFormatter.format(value),
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.input(value);
            this.$emit('adjust', {
                value: this.currentValue,
                oldValue,
                formattedValue: this.formattedValue,
            }, this);
        },
        increase() {
            this.adjust(+this.currentValue + this.step);
        },
        decrease() {
            this.adjust(+this.currentValue - this.step);
        },
        onInput(value) {
            if (this.fixOn === 'input')
                this.debouncedInput(this.currentFormatter.parse(value));
            else if (this.fixOn === 'blur') {
                // 这种情况下直接透传
                this.formattedValue = value;
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
                // @change 与 @input 保持一致
                this.$emit('change', {
                    value,
                    oldValue: this.currentValue,
                    formattedValue: this.currentFormatter.format(value),
                }, this);
            }
        },
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            if (this.fixOn === 'blur')
                this.input(this.currentFormatter.parse(this.formattedValue));

            this.$emit('blur', e, this);
        },
        reset() {
            const oldValue = this.currentValue;

            let cancel = false;
            this.$emit('before-reset', {
                oldValue,
                value: this.defaultValue,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentValue = this.defaultValue;
            this.formattedValue = this.currentFormatter.format(this.defaultValue);
            this.$emit('input', this.defaultValue, this);
            this.$emit('update:value', this.defaultValue, this);

            this.$emit('reset', {
                oldValue,
                value: this.defaultValue,
            }, this);

            this.$emit('change', {
                value: this.defaultValue,
                oldValue,
                formattedValue: this.formattedValue,
            });
        },
    },
};

export { UNumberInput };
export default UNumberInput;
