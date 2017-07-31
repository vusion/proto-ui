import Base from 'u-base.vue';

/**
 * @class LinearLayout
 * @extends Base
 * @param {boolean=false}       attrs.direction                Direction
 */
const LinearLayout = Base.extend({
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: (value) => ['horizontal', 'vertical'].includes(value) },
    },
});

export default LinearLayout;
