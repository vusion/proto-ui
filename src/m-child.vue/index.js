import MEmitter from '../m-emitter.vue';

export default {
    parentName: 'm-parent',
    groupName: 'm-group',
    mixins: [MEmitter],
    data() {
        return {
            parentVM: undefined,
            groupVM: undefined,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
    },
};
