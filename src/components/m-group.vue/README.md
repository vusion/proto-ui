# MGroup 分组模式

在父子组件的模式中，有时会遇到对子组件进行分组和折叠场景。MGroup 对这种模式进行了抽象，用于快速开发和代码借鉴。

### 用法

- 继承 MParent 的组件，同时要继承 MGroupParent，补充声明分组组件的 `groupName`字段
- 在继承 MChild 的组件 Options 中，补充声明分组组件的 `groupName`字段
- 在继承 MGroup 的组件 Options 中，补充声明父组件的 `parentName`字段，补充声明父组件的 `childName`字段

父组件会将多个分组组件收集在`groupVMs`数组中，分组组件会将多个子组件收集在`itemVMs`数组中，同时将父组件标记为`parentVM`变量。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/m-group/examples"></u-h2-tab>
    <u-h2-tab hidden title="拓展应用" to="/components/m-group/advanced"></u-h2-tab>
    <u-h2-tab v-if="NODE_ENV === 'development'" title="测试用例" to="/components/m-group/cases"></u-h2-tab>
    <u-h2-tab title="API" to="/components/m-group/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
