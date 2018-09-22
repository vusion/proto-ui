export default {
    name: 'm-root',
    nodeName: 'm-node',
    data() {
        return {
            nodeVMs: [],
        };
    },
    created() {
        this.$on('add-node-vm', (nodeVM) => {
            nodeVM.rootVM = this;
            this.nodeVMs.push(nodeVM);
        });
        this.$on('remove-node-vm', (nodeVM) => {
            nodeVM.rootVM = undefined;
            this.nodeVMs.splice(this.nodeVMs.indexOf(nodeVM), 1);
        });
    },
};
