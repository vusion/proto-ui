import { MSingleChoices } from '../m-single-choices.vue';

const UNavbar = {
    name: 'u-navbar',
    childName: 'u-navbar-item',
    extends: MSingleChoices,
    props: {
        router: { type: Boolean, default: true },
    },
    created() {
        this.$on('select', ({ itemVM }) => this.router && itemVM.navigate());
    },
};

export * from './item.vue';
export * from './divider.vue';
//
export * from './menu.vue';
export * from './select.vue';
export default UNavbar;
