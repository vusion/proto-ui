import MSinglex from '../m-singlex.vue';

export const UMenu = {
    name: 'u-menu',
    groupName: 'u-menu-group',
    childName: 'u-menu-item',
    extends: MSinglex,
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
            // this.parentVM && this.parentVM.toggle(false);
        });
    },
};

export { UMenuItem } from './item.vue';
export { UMenuGroup } from './group.vue';
export { UMenuDivider } from './divider.vue';

export default UMenu;
