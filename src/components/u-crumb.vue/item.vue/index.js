import { MChild } from '../../m-parent.vue';
import ULink from '../../u-link.vue';

export const UCrumbItem = {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    mixins: [MChild, ULink],
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },
};

export default UCrumbItem;
