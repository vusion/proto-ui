# UInput 单行输入

<s-component-labels :labels="[
    'UI 组件', '表单控件', '行内展示',
]"></s-component-labels>

基本的表单输入组件，在原生`<input>`控件基础上进行了一些功能扩展。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-input/examples"></u-h2-tab>
    <!-- <u-h2-tab v-if="NODE_ENV === 'development'" title="拓展应用" to="/components/u-input/advanced"></u-h2-tab> -->
    <u-h2-tab v-if="NODE_ENV === 'development'" title="测试用例" to="/components/u-input/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/u-input/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
