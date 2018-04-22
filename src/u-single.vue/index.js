export default {
    name: 'u-single',
    childName: 'u-single-item',
    props: {
        value: null,
        autoSelect: { type: Boolean, default: false },
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
        value(value) {
            this.watchValue(value);
        },
        itemVMs() {
            // this.selectedVM = undefined;
            this.watchValue(this.value);
        },
        selectedVM(selectedVM, oldVM) {
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            });
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
    },
    mounted() {
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.autoSelect ? this.itemVMs[0] : undefined;
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
        },
        select(itemVM) {
            if (this.readonly || this.disabled || itemVM.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-select', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.selectedVM = itemVM;

            const value = this.selectedVM && this.selectedVM.value;

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
