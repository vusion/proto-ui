# 选择框 Select

<u-linear-layout gap="small">
    <u-label>UI 组件</u-label>
    <!-- <u-label>输入型</u-label> -->
    <u-label>表单类</u-label>
    <u-label>行内展示</u-label>
</u-linear-layout>

下拉选择框，支持支持单选、多选、搜索等功能，用于代替原生的选择框。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-select/examples"></u-h2-tab>
    <u-h2-tab title="衍生应用" to="/components/u-select/advanced"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="详细用例" to="/components/u-select/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/u-select/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>