import ListViewItem from '../u-list-view-item.vue';

export default {
    name: 'u-suggest-item',
    parentName: 'u-suggest',
    extends: ListViewItem,
    props: {
        value: { type: String, default: '' },
    },
    computed: {
        innerText() {
            return this.$slots.default[0].text;
        },
        matched() {
            return this.parentVM && this.parentVM.match(this);
        },
    },
};
