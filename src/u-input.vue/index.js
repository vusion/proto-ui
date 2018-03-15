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
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        compositionend(e) {
            // 中文输入的时候，会先触发onInput事件，再触发此事件，导致不能捕捉到中文输入（此时compositionInputing值为true），需要特殊处理
            this.compositionInputing = false;
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue);
            this.$emit('update:value', this.currentValue);
        },
    },
};
