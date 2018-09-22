import ListView from '../u-list-view.vue';
import { ellipsisTitle } from '../directives';

export default {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    extends: ListView,
    directives: { ellipsisTitle },
    created() {
        this.$on('select', () => {
            this.toggle(false);
        });
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.itemVMs[0];
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onToggle($event) {
            this.$emit('toggle', $event, this);
            setTimeout(() => this.ensureSelectedInView(true));
        },
    },
};
