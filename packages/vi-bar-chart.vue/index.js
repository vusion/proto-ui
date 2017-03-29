import Base from 'vi-base.vue';
import * as _ from 'vi-utils';

/**
 * @class BarChart
 * @extends Chart
 * @param {string='100%'}           props.width              图表宽度
 * @param {string='480px'}          props.height             图表高度
 * @param {string=''}               props.title              标题
 * @param {string=''}               props.titleTemplate      标题模板
 * @param {string=''}               props.tooltipTemplate    工具提示模板
 * @param {Array}                   props.data               数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  props.axisX              横坐标信息
 * @param {Object}                  props.axisY              纵坐标信息
 * @param {Array=[]}                props.series             序列信息
 * @param {boolean=false}           props.border             是否显示边框
 * @param {boolean=true}            props.legend             是否显示图例
 * @param {boolean=true}            props.visible            是否显示
 * @param {string='m-barChart'}     props.class              补充class
 */
const BarChart = Base.extend({
    name: 'vi-bar-chart',
    props: {
        data: Array,
        axisX: Object,
        axisY: Object,
        series: Array,
    },
    data() {
        return {
            axisXOptions: { data: [] },
            axisYOptions: { data: [] },
        };
    },
    created() {
        this.draw();
    },
    methods: {
        draw() {
            if (!this.data || !this.data.length)
                return;

            // Compute X Axis
            {
                const axisXOptions = this.axisXOptions;
                axisXOptions.count = this.axisX.count || 12;
                // 柱状图数据全部显示，暂不考虑收缩间隔的情况
                axisXOptions.data = this.data.map((item) => item[this.axisX.key]);
            }

            // Compute Y Axis
            {
                const axisYOptions = this.axisYOptions;

                // 如果没有设置最小值和最大值，则寻找
                if (this.axisY.min !== undefined)
                    axisYOptions.min = this.axisY.min;
                else {
                    axisYOptions.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.data.map((item) => item[sery.key]))
                    ));
                }
                if (this.axisY.max !== undefined)
                    axisYOptions.max = this.axisY.max;
                else {
                    axisYOptions.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.data.map((item) => item[sery.key]))
                    ));
                }

                axisYOptions.count = this.axisY.count || 8;
                const tick = _.roundToFirst((axisYOptions.max - axisYOptions.min) / axisYOptions.count) || 1;
                axisYOptions.min = Math.floor(axisYOptions.min / tick) * tick;
                axisYOptions.max = Math.ceil(axisYOptions.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (axisYOptions.min === axisYOptions.max)
                    axisYOptions.max = axisYOptions.min + axisYOptions.count;

                axisYOptions.data = [];
                for (let i = axisYOptions.min; i <= axisYOptions.max; i += tick)
                    axisYOptions.data.push(i);
            }

            console.log(this.axisXOptions, this.axisYOptions);
        },
    },
});

export default BarChart;
