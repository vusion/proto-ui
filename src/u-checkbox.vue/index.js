import { MChild } from '../m-parent.vue';
import MField from '../m-field.vue';

const UCheckbox = {
    name: 'u-checkbox',
    parentName: 'u-checkboxes',
    mixins: [MChild, MField],
    props: {
        value: { type: Boolean, default: false },
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
            currentValue: this.value,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            ['focus', 'blur', 'update:value'].forEach((prop) => {
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
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e, this);
        },
        onBlur(e) {
            this.$emit('blur', e, this);
        },
        toggle(value) {
            // Check if enabled
            if (this.readonly || this.disabled)
                return;

            // Method overloading
            if (value === undefined)
                value = !this.currentValue;

            // Prevent replication
            const oldValue = this.currentValue;
            if (value === oldValue)
                return;

            if (this.parentVM && !this.parentVM.canToggle({
                value,
                oldValue,
                label: this.label,
                itemVM: this,
            }))
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-toggle', {
                value,
                oldValue,
                label: this.label,
            }, this))
                return;

            // Assign and sync `value`
            this.currentValue = value;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            if (value === true)
                this.$emit('check', { value, oldValue }, this);
            else if (value === false)
                this.$emit('uncheck', { value, oldValue }, this);
            this.$emit('toggle', { value, oldValue }, this);

            // Call parentVM
            this.parentVM && this.parentVM.onItemToggle({
                value,
                oldValue,
                label: this.label,
                itemVM: this,
            });
        },
    },
};

export { UCheckbox };
export default UCheckbox;
