import MEmitter from '../m-emitter.vue';

export default {
    name: 'm-node',
    rootName: 'm-root',
    mixins: [MEmitter],
    data() {
        return {
            nodeVMs: [],
            rootVM: undefined,
            parentVM: undefined,
        };
    },
    created() {
        this.dispatch(this.$options.name, 'add-node-vm', this);
        !this.parentVM && this.dispatch(this.$options.rootName, 'add-node-vm', this);

        this.$on('add-node-vm', (nodeVM) => {
            nodeVM.rootVM = this.rootVM;
            nodeVM.parentVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', (nodeVM) => {
            nodeVM.rootVM = undefined;
            nodeVM.parentVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
    destroyed() {
        this.dispatch(this.$options.rootName, 'remove-node-vm', this);
        this.dispatch(this.$options.name, 'remove-node-vm', this);
    },
};
