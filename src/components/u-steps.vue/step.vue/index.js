import { MChild } from '../../m-parent.vue';

const UStep = {
    name: 'u-step',
    parentName: 'u-steps',
    mixins: [MChild],
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
