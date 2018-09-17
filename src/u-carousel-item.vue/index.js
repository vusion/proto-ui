import SingleChoice from '../m-single-choice.vue';
import RouterItem from '../m-router-item.vue';

export default {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: SingleChoice,
    mixins: [RouterItem],
    props: {
        title: String,
    },
    computed: {
        animation() {
            return this.parentVM && this.parentVM.animation;
        },
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
    methods: {
        onAnimationStart() {
            this.parentVM.animating = true;
        },
        onAnimationEnd() {
            this.parentVM.animating = false;
        },
    },
};

