import SingleChoices from '../m-single-choices.vue';

export default {
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
