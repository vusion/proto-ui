import MChild from '../m-child.vue';
import Link from '../u-link.vue';

export default {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    mixins: [MChild, Link],
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: parentVM: undefined,
        };
    },
};
