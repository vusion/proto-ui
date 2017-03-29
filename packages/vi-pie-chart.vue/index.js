import Base from 'vi-base.vue';

/**
 * @class Chart
 * @extends Base
 * @param {string='100%'}           props.width              图表宽度
 * @param {string='480px'}          props.height             图表高度
 * @param {string=''}               props.title              标题
 * @param {string=''}               props.titleTemplate      标题模板
 * @param {string=''}               props.contentTemplate    内容模板，继承中使用
 * @param {Array}                   props.data               数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {boolean=false}           props.border             是否显示边框
 * @param {boolean=true}            props.legend             是否显示图例
 * @param {boolean=true}            props.visible            是否显示
 * @param {string=''}               props.class              补充class
 */
const Chart = Base.extend({
    name: 'vi-chart',
});

export default Chart;
