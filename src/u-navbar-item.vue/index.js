import ListViewItem from '../u-list-view-item.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    mixins: [ListViewItem, RouterItem],
};
