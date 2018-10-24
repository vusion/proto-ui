import ListViewItem from '../u-list-view-item.vue';

export default {
    name: 'u-suggest-item',
    parentName: 'u-suggest',
    extends: ListViewItem,
    props: {
        value: { type: String, default: '' },
    },
    computed: {
        matched() {
            return this.parentVM && this.parentVM.match(this);
        },
        innerText() {
            return this.$el.innerText;
        },
    },
};
