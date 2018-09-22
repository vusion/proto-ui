import MChild from '../m-child.vue';
import RouterItem from '../m-router-item.vue';

export default {
    name: 'u-step',
    parentName: 'u-steps',
    mixins: [MChild, RouterItem],
    props: {
        title: String,
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
};
