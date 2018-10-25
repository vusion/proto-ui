# MSinglex 单选子

常用的单项选择模式，用于快速派生出像`<u-navbar>`、`<u-tabs>`这样的组件。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/m-singlex/examples"></u-h2-tab>
    <u-h2-tab title="高级应用" to="/components/m-singlex/advanced"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="详细用例" to="/components/m-singlex/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/m-singlex/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
