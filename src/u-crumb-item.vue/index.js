import Link from '../u-link.vue';
import Emitter from '../m-emitter.vue';

export default {
    name: 'u-crumb-item',
    parentName: 'u-crumb',
    mixins: [Link, Emitter],
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
