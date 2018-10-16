import { MSingleChoice } from '../../m-single-choices.vue';
import MRouterItem from '../../m-router-item.vue';

const UCarouselItem = {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: MSingleChoice,
    mixins: [MRouterItem],
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

export { UCarouselItem };
export default UCarouselItem;
