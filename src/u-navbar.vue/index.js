import ListView from '../u-list-view.vue';

export default {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    mixins: [ListView],
    props: {
        router: { type: Boolean, default: true },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};
