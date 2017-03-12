import { Base } from 'vision-v-base';

/**
 * @class LinearProgress
 * @extends Base
 * @param {number=0}               props.percent                   百分比
 */
const LinearProgress = Base.extend({
    name: 'v-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
});

export default LinearProgress;
