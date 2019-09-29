import { MSinglexItem } from '../../m-singlex.vue';
import { checkIntoView } from '../../../utils/style';

export const USidebarItem = {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: MSinglexItem,
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
            if (active) {
                this.groupVM && this.groupVM.toggle(true);
                if (!checkIntoView(this.$el, this.parentVM.$el)) {
                    this.$nextTick(() => {
                        this.$el.scrollIntoView(false);
                    });
                }
            }
        },
    },
};

export default USidebarItem;
