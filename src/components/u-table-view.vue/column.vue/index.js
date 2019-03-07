import { Emitter } from '../../m-emitter.vue';

export const UTableViewColumn = {
    name: 'u-table-view-column',
    parentName: 'u-table-view',
    mixins: [Emitter],
    props: {
        title: String,
        field: String,
        width: [String, Number],
    },
    data() {
        return {
            tempWidth: this.width + '',
            currentWidth: this.width,
        };
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-column-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-column-vm', this);
    },
};

export default UTableViewColumn;
