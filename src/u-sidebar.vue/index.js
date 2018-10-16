import SingleChoices from '../m-single-choices.vue';

const USidebar = {
    name: 'u-sidebar',
    groupName: 'u-sidebar-group',
    childName: 'u-sidebar-item',
    extends: SingleChoices,
    props: {
        router: { type: Boolean, default: true },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';
export { USidebar };
export default USidebar;
