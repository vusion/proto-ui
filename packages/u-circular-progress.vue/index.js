import Base from 'u-base.vue';

/**
 * @class CircularProgress
 * @extends Base
 * @param {number=0}               props.percent                   百分比
 */
const CircularProgress = Base.extend({
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
    data() {
        return {
            radius: 45,
        };
    },
    computed: {
        strokeDasharray() {
            return 2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px';
        },
    },
});

export default CircularProgress;
