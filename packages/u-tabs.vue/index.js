export default {
    name: 'u-tabs',
    childName: 'u-tab',
    props: {
        value: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
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
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.itemVMs[0];
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
                item: itemVM && itemVM.item,
                itemVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.selectedVM = itemVM;

            const value = this.selectedVM && this.selectedVM.value;
            const item = this.selectedVM && this.selectedVM.item;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value,
                oldValue,
                item,
                itemVM: this.selectedVM,
            });

            this.router && itemVM.navigate();
        },
    },
};
