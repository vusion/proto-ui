import MSingleChoices from '../m-single-choices.vue';

const UMenu = {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    extends: MSingleChoices,
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
        while (popperChildVM && popperChildVM.$options.name !== 'm-popper-child')
            popperChildVM = popperChildVM.$parent;
        if (popperChildVM && popperChildVM.parentVM)
            this.parentVM = popperChildVM.parentVM;

        this.$on('select', ({ itemVM }) => {
            this.router && itemVM.navigate();
            this.parentVM && this.parentVM.toggle(false);
        });
    },
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';
export { UMenu };
export default UMenu;
