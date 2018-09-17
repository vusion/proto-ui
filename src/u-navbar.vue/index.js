import SingleChoices from '../m-single-choices.vue';

export default {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    extends: SingleChoices,
    props: {
        router: { type: Boolean, default: true },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};
