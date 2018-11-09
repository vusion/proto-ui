import MField from '../m-field.vue';
import { focus } from '../directives';

const UInput = {
    name: 'u-input',
    mixins: [MField],
    directives: { focus },
    props: {
        value: [String, Number],
        defaultValue: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        posternReadonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            focused: false,
            currentValue: this.value,
            currentColor: this.color,
            compositionInputing: false,
        };
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
        value(value) {
            this.currentValue = value;
        },
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue }, this);
        },
        color(color) {
            this.currentColor = color;
        },
    },
    methods: {
        onInput(e) {
            if (!this.compositionInputing) {
                this.currentValue = e.target.value;
                this.$emit('input', this.currentValue, this);
                this.$emit('update:value', this.currentValue, this);
            }
        },
        onFocus(e) {
            this.focused = true;
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.focused = false;
            this.$emit('blur', e, this);
        },
        onCompositionEnd(e) {
            // 中文输入的时候，会先触发onInput事件，再触发此事件，导致不能捕捉到中文输入
            // 因此需要特殊处理，此时compositionInputing值为true
            this.compositionInputing = false;
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue, this);
            this.$emit('update:value', this.currentValue, this);
        },
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$refs.input.blur();
        },
        clear() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.currentValue;

            let cancel = false;
            this.$emit('before-clear', {
                oldValue,
                value: undefined,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentValue = undefined;
            this.$emit('input', undefined, this);
            this.$emit('update:value', undefined, this);
            this.focus();

            this.$emit('clear', {
                oldValue,
                value: undefined,
            }, this);
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
            this.$emit('input', this.defaultValue, this);
            this.$emit('update:value', this.defaultValue, this);

            this.$emit('reset', {
                oldValue,
                value: this.defaultValue,
            }, this);
        },
    },
};

export { UInput };
export default UInput;
