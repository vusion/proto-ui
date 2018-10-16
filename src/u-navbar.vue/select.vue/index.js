import { USelect } from '../../u-select.vue';

const UNavbarSelect = {
    name: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    childName: 'u-navbar-select-item',
    extends: USelect,
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';
export { UNavbarSelect };
export default UNavbarSelect;
