import { MSingleChoice } from '../../m-single-choices.vue';
import RouterItem from '../../m-router-item.vue';

const UMenuItem = {
    name: 'u-menu-item',
    parentName: 'u-menu',
    groupName: 'u-menu-group',
    extends: MSingleChoice,
    mixins: [RouterItem],
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

export { UMenuItem };
export default UMenuItem;
