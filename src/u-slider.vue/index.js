import Field from '../u-field.vue';

export default {
    name: 'u-slider',
    mixins: [Field],
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 1 },
        fixed: { type: Number, default: 4 },
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

            this.$emit('change', {
                value,
                oldValue,
            });
        },
    },
    computed: {
        percent: {
            get() {
                return (this.currentValue - this.min) / (this.max - this.min) * 100;
            },
            set(percent) {
                let value = +this.min + (this.max - this.min) * percent / 100;
                // step 约束
                this.step && (value = Math.round(value / this.step) * this.step);
                // 最大最小约束
                value = Math.min(Math.max(this.min, value), this.max);
                // 保留小数
                value = +value.toFixed(this.fixed);

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
        onDragStart($event) {
            this.grid.x = this.step / (this.max - this.min) * $event.range.width;
            this.percent = $event.left / $event.range.width * 100;
            this.$emit('slide', {

            });
        },
        onDrag($event) {
            this.percent = $event.left / $event.range.width * 100;
            this.$emit('slide', {

            });
        },
    },
};
