import Emitter from '../u-emitter.vue';

export default {
    name: 'u-single-item',
    parentName: 'u-single',
    mixins: [Emitter],
    props: {
        value: null,
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
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
