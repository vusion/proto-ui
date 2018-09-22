import MParent from '../m-parent.vue';

export default {
    name: 'u-crumb',
    childName: 'u-crumb-item',
    mixins: [MParent],
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
};
