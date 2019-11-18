# UComboPagination 复合翻页器

<s-component-labels :labels="[
    'UI 组件', '块级展示',
]"></s-component-labels>

在 UPagination 的基础上，添加了显示总页数、切换每页大小、页面跳转等功能。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-combo-pagination/examples"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="测试用例" to="/components/u-combo-pagination/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/u-combo-pagination/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
