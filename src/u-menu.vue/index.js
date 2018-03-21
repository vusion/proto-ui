import ListView from '../u-list-view.vue';

export default {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    mixins: [ListView],
    props: {
        router: { type: Boolean, default: true },
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    created() {
        let popperChildVM = this.$parent;
        while (popperChildVM && popperChildVM.$options.name !== 'u-popper-child')
            popperChildVM = popperChildVM.$parent;
        if (popperChildVM && popperChildVM.parentVM)
            this.parentVM = popperChildVM.parentVM;

        this.$on('select', ({ itemVM }) => {
            this.router && itemVM.navigate();
            this.parentVM && this.parentVM.toggle(false);
        });
    },
};
