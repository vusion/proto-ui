import SingleChoice from '../u-single-choice.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    extends: SingleChoice,
    mixins: [RouterItem],
};
