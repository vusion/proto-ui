/**
 * @class LinearLayout
 * @extends Base
 * @param {boolean=false}       attrs.direction                Direction
 */
export default {
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: (value) => ['horizontal', 'vertical'].includes(value) },
    },
};
