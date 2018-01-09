import Field from '../u-field.vue';

export default {
    name: 'u-radios',
    childName: 'u-radio',
    mixins: [Field],
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
            selectedVM: undefined,
        };
    },
    watch: {
        value(value, oldValue) {
            this.watchValue(value);
            this.$emit('change', {
                value,
                oldValue,
            });
        },
        itemVMs() {
            this.selectedVM = undefined;
            this.watchValue(this.value);
        },
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });

        this.$nextTick(() => this.watchValue(this.value));
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.label === value)
                return;
            if (value === undefined)
                this.selectedVM = undefined;
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.label === value);
        },
        select(itemVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.label,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            if (this.cancelable && this.selectedVM === itemVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = itemVM;

            const value = this.selectedVM && this.selectedVM.label;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value,
                oldValue,
                itemVM: this.selectedVM,
            });
        },
    },
};
