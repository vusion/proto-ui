import UMenu from '../../u-menu.vue';

const UNavbarMenu = {
    name: 'u-navbar-menu',
    groupName: 'u-navbar-menu-group',
    childName: 'u-navbar-menu-item',
    extends: UMenu,
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';
export { UNavbarMenu };
export default UNavbarMenu;
