import MField from '../m-field.vue';
import { focus } from '../../directives';

export const UInput = {
    name: 'u-input',
    mixins: [MField],
    directives: { focus },
    props: {
        value: [String, Number],
        color: String,
        placeholder: String,
        clearable: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
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
                this.emitCurrentValue(e.target.value);
            }
        },
        emitCurrentValue(value) {
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
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
            this.emitCurrentValue(e.target.value);
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
            const value = '';
            this.$emit('before-clear', {
                oldValue,
                value,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.emitCurrentValue(value);
            this.focus();

            this.$emit('clear', {
                oldValue,
                value,
            }, this);
        },
    },
};

export default UInput;
