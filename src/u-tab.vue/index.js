import SingleChoice from '../u-single-choice.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    extends: SingleChoice,
    mixins: [RouterItem],
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
};
