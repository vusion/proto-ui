export default {
    name: 'u-tabs',
    childName: 'u-tab',
    props: {
        index: { type: Number, default: 0, validator: (value) => Number.isInteger(value) && value >= 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
            currentIndex: this.index,
        };
    },
    computed: {
        selectedVM() {
            return this.itemVMs[this.currentIndex];
        },
    },
    watch: {
        currentIndex(index, oldIndex) {
            this.$emit('change', index, oldIndex);
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
    methods: {
        select(index) {
            if (this.readonly || this.disabled || this.itemVMs[index].disabled)
                return;

            const oldIndex = this.currentIndex;

            const tabVM = this.itemVMs[index];
            this.currentIndex = index;

            let cancel = false;
            this.$emit('before-select', {
                index,
                oldIndex,
                tabVM,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.$emit('select', {
                index,
                oldIndex,
                tabVM,
            });
            this.$emit('update:index', index);

            this.router && tabVM.navigate();
        },
    },
};
