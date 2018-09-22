import SingleChoice from '../m-single-choice.vue';

export default {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    extends: SingleChoice,
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
