import { MEmitter } from '../../m-emitter.vue';

export const UTableViewColumn = {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [MEmitter],
    props: {
        title: String,
        field: String,
        width: [String, Number],
        sortable: { type: Boolean, default: false },
        defaultOrder: String,
    },
    data() {
        return {
            parentVM: undefined,
            tempWidth: this.width + '',
            currentWidth: this.width,
        };
    },
    created() {
        !this.parentVM && this.$contact(this.$options.parentName, (parentVM) => {
            this.parentVM = parentVM;
            parentVM.columnVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.columnVMs.splice(parentVM.columnVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
    },
};

export default UTableViewColumn;
