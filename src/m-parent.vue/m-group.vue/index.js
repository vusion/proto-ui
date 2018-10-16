import MEmitter from '../../m-emitter.vue';

const MGroup = {
    name: 'm-group',
    parentName: 'm-parent',
    childName: 'm-child',
    mixins: [MEmitter],
    data() {
        return {
            parentVM: undefined,
            itemVMs: [],
        };
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.groupVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.groupVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.dispatch(this.$options.parentName, 'add-group-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-group-vm', this);
    },
};

export { MGroup };
export default MGroup;
