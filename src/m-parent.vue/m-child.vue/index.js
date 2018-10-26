import MEmitter from '../../m-emitter.vue';

const MChild = {
    name: 'm-child',
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
        this.$contact(this.$options.parentName, (parentVM) => {
            this.parentVM = parentVM;
            parentVM.itemVMs.push(this);
        });
        this.$contact(this.$options.groupName, (groupVM) => {
            this.groupVM = groupVM;
            groupVM.itemVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.itemVMs.splice(parentVM.itemVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
        this.$contact(this.$options.groupName, (groupVM) => {
            groupVM.itemVMs.splice(groupVM.itemVMs.indexOf(this), 1);
            this.groupVM = undefined;
        });
    },
};

export { MChild };
export default MChild;
