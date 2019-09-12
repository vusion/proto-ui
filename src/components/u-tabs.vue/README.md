# UTabs 标签页

<s-component-labels :labels="[
    'UI 组件', '路由链接', '块级展示',
]"></s-component-labels>

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-tabs/examples"></u-h2-tab>
    <u-h2-tab title="测试用例" v-if="NODE_ENV === 'development'" to="/components/u-tabs/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/u-tabs/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
