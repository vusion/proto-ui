import { UListViewItem } from '../../u-list-view.vue';

const USelectItem = {
    name: 'u-select-item',
    parentName: 'u-select',
    groupName: 'u-select-group',
    extends: UListViewItem,
    computed: {
        currentText() {
            return this.$slots.default[0] && this.$slots.default[0].text;
        },
    },
};

export { USelectItem };
export default USelectItem;
