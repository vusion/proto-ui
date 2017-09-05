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
            parentVM: undefined,
        };
    },
    computed: {
        selected() {
            return this.parentVM.selectedVM === this;
        },
    },
    created() {
        this.dispatch('u-tabs', 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch('u-tabs', 'remove-item-vm', this);
    },
};
