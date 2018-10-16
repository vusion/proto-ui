import MEmitter from '../../m-emitter.vue';

const MChild = {
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

export { MChild };
export default MChild;
