import ListViewItem from '../u-list-view-item.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    mixins: [ListViewItem, RouterItem],
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    mounted() {
        this.watchActive(this.active);
    },
    methods: {
        watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true);
        },
    },
};
