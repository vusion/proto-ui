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
        this.$on('select', ({ itemVM }) => {
            this.router && itemVM.navigate();
            this.$parent && this.$parent.close && this.$parent.close();
        });
    },
};

export { UMenuItem } from './item.vue';
export { UMenuGroup } from './group.vue';
export { UMenuDivider } from './divider.vue';

export default UMenu;
