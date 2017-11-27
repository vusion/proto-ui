import ListViewItem from '../u-list-view-item.vue';

export default {
    name: 'u-select-item',
    parentName: 'u-select',
    mixins: [ListViewItem],
    props: {
        field: String,
    },
    created() {
        let popperChildVM = this.$parent;
        while (popperChildVM.$options.name !== 'u-popper-child')
            popperChildVM = popperChildVM.$parent;
        if (popperChildVM && popperChildVM.parentVM) {
            this.parentVM = popperChildVM.parentVM.$parent;
            this.parentVM.$emit('add-item-vm', this);
        }
    },
    destroyed() {
        this.parentVM && this.parentVM.$emit('remove-item-vm', this);
    },
};
