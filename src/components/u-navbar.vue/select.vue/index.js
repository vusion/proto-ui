import { USelect } from '../../u-select.vue';

export const UNavbarSelect = {
    name: 'u-navbar-select',
    groupName: 'u-navbar-select-group',
    childName: 'u-navbar-select-item',
    extends: USelect,
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';

export default UNavbarSelect;
