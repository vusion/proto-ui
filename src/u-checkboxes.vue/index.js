import { MParent } from '../m-parent.vue';
import MField from '../m-field.vue';

const UCheckboxes = {
    name: 'u-checkboxes',
    childName: 'u-checkbox',
    mixins: [MParent, MField],
    props: {
        value: { type: Array, default() { return []; } },
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: itemVMs: [],
            currentValue: this.value,
        };
    },
    mounted() {
        this.watchValue(this.value);
    },
    watch: {
        value(value) {
            this.watchValue(value);
        },
        currentValue(value, oldValue) {
            this.$emit('change', {
                value,
                oldValue,
            }, this);
        },
    },
    methods: {
        watchValue(value) {
            this.currentValue = value;
            this.itemVMs.forEach((itemVM) => itemVM.currentValue = value.includes(itemVM.label));
        },
        canToggle($event) {
            if (this.readonly || this.disabled)
                return false;

            const value = $event.value;
            const label = $event.itemVM.label;
            if (value && !this.currentValue.includes(label)) {
                const length = this.currentValue.length + 1;
                return this.min <= length && length <= this.max;
            } else if (!value && this.currentValue.includes(label)) {
                const length = this.currentValue.length - 1;
                return this.min <= length && length <= this.max;
            }
        },
        onItemToggle($event) {
            const value = $event.value;
            const label = $event.itemVM.label;

            if (value && !this.currentValue.includes(label))
                this.currentValue.push(label);
            else if (!value && this.currentValue.includes(label))
                this.currentValue.splice(this.currentValue.indexOf(label), 1);

            this.$emit('input', this.currentValue, this);
            this.$emit('update:value', this.currentValue, this);
            this.$emit('toggle', {
                value: this.currentValue,
                itemVM: $event.itemVM,
            }, this);
        },
    },
};

export { UCheckboxes };
export default UCheckboxes;
