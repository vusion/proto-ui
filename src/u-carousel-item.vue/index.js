import SingleItem from '../u-single-item.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-carousel-item',
    parentName: 'u-carousel',
    mixins: [SingleItem, RouterItem],
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

