import ListViewItem from '../u-list-view-item.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    mixins: [ListViewItem, RouterItem],
};
