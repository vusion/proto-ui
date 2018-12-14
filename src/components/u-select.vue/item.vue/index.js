import { UListViewItem } from '../../u-list-view.vue';

const USelectItem = {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    extends: UListViewItem,
    props: {
        label: String,
    },
    computed: {
        matched() {
            if (!this.parentVM || !this.parentVM.filterable)
                return true;
            else
                return this.parentVM.match(this);
        },
        currentLabel() {
            if (this.label !== undefined)
                return this.label;
            else
                return this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
};

export { USelectItem };
export default USelectItem;
