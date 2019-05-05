# MRoot 根节点模式

本对 Mixin：MRoot 和 MNode，对常见的类似`<u-tree-view>`和`<u-tree-view-node>`多级组件嵌套的场景进行了抽象，用于快速开发和代码借鉴。

### 用法

- 在继承 MRoot 的组件 Options 中，补充声明子组件的 `nodeName`字段
- 在继承 MNode 的组件 Options 中，补充声明父组件的 `rootName`字段

父组件会将多个子组件收集在`nodeVMs`数组中，子组件将父组件标记为`parentVM`变量，将根组件标记为`rootVM`。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/m-root/examples"></u-h2-tab>
    <u-h2-tab hidden title="拓展应用" to="/components/m-root/advanced"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="测试用例" to="/components/m-root/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/m-root/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
