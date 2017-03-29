import Base from 'vi-base.vue';

/**
 * @class LinearProgress
 * @extends Base
 * @param {number=0}            props.percent                   The percentage of progress
 */
const LinearProgress = Base.extend({
    name: 'vi-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
});

export default LinearProgress;
