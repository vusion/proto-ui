import Base from 'u-base.vue';

/**
 * @class LinearProgress
 * @extends Base
 * @param {number=0}            props.percent                   The percentage of progress
 */
const LinearProgress = Base.extend({
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
});

export default LinearProgress;
