import Field from '../u-field.vue';

export default {
    name: 'u-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        precision: { type: Number, default: 1, validator: (precision) => precision > 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            grid: { x: 0, y: 0 },
            handleEl: undefined,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
            this.handleEl.style.left = this.percent + '%';
        },
        currentValue(value, oldValue) {
            value = +value;

            this.$emit('change', { value, oldValue });
        },
    },
    computed: {
        percent: {
            get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set(percent) {
                const value = this.fix(+this.min + (this.max - this.min) * percent / 100);

                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('update:value', value);
            },
        },
    },
    mounted() {
        this.handleEl = this.$refs.handle;
        this.handleEl.style.left = this.percent + '%';
    },
    methods: {
        fix(value) {
            // 刻度约束
            this.step && (value = Math.round(value / this.step) * this.step);
            // 最大最小约束
            value = Math.min(Math.max(this.min, value), this.max);
            // 保留小数位数
            value = +value.toFixed(this.precision < 1 ? -Math.log10(this.precision) : 0);
            return value;
        },
        onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;

            const oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            this.$emit('slide', {
                oldValue,
                value: this.currentValue,
                percent: this.percent,
            });
        },
        onDrag($event) {
            const oldValue = this.currentValue;
            this.percent = $event.left / $event.range.width * 100;
            this.$emit('slide', {
                oldValue,
                value: this.currentValue,
                percent: this.percent,
            });
        },
    },
};
