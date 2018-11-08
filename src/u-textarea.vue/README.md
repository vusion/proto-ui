# 多行输入 Textarea

<u-linear-layout gap="small">
    <u-label>UI 组件</u-label>
    <!-- <u-label>输入型</u-label> -->
    <u-label>表单类</u-label>
    <u-label>默认行内</u-label>
</u-linear-layout>

多行输入组件，在原生`<textarea>`控件基础上进行了一些功能扩展。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-textarea/examples"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="衍生应用" to="/components/u-textarea/advanced"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="详细用例" to="/components/u-textarea/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/u-textarea/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
