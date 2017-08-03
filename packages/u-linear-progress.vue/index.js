/**
 * @class LinearProgress
 * @extends Base
 * @param {number=0}            props.percent                   The percentage of progress
 */
export default {
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
};
