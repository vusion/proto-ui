import { MSinglexItem } from '../../m-singlex.vue';

const UCarouselItem = {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    extends: MSinglexItem,
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
