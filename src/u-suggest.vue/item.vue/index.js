import { UListViewItem } from '../../u-list-view.vue';

const USuggestItem = {
    name: 'u-suggest-item',
    parentName: 'u-suggest',
    extends: UListViewItem,
    props: {
        value: { type: String, default: '' },
    },
    computed: {
        matched() {
            return this.parentVM && this.parentVM.match(this);
        },
    },
};

export { USuggestItem };
export default USuggestItem;
