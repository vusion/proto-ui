import SingleChoice from '../m-single-choice.vue';
import RouterItem from '../m-router-item.vue';

export default {
    name: 'u-navbar-item',
    parentName: 'u-navbar',
    extends: SingleChoice,
    mixins: [RouterItem],
};
