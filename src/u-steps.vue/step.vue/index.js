import { MChild } from '../../m-parent.vue';
import MRouterItem from '../../m-router-item.vue';

const UStep = {
    name: 'u-step',
    parentName: 'u-steps',
    mixins: [MChild, MRouterItem],
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

export { UStep };
export default UStep;
