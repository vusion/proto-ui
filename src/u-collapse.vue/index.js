export default {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    props: {
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            itemVMs: [],
        };
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
        onToggle(itemVM, expanded) {
            this.$emit('toggle', {
                expanded,
                itemVM,
            }, this);
        },
        toggleAll(expanded) {
            this.itemVMs.forEach((itemVM) => itemVM.toggle(expanded));
        },
    },
};
