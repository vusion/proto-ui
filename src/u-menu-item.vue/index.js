import SingleChoice from '../u-single-choice.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    extends: SingleChoice,
    mixins: [RouterItem],
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
