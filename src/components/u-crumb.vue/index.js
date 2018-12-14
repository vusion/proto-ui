import { MParent } from '../m-parent.vue';

const UCrumb = {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent],
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
};

export * from './item.vue';
export { UCrumb };
export default UCrumb;
