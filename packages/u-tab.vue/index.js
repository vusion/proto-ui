import Emitter from 'u-emitter.vue';
import RouterItem from 'u-router-item.vue';

export default {
    name: 'u-tab',
    mixins: [Emitter, RouterItem],
    props: {
        title: String,
        hidden: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            tabs: undefined,
        };
    },
    created() {
        this.dispatch('u-tabs', 'addItem', this);
    },
    destroyed() {
        this.dispatch('u-tabs', 'removeItem', this);
    },
};
