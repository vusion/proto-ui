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

## 基础示例

### 基本用法

``` html
<m-root>
    <m-node text="节点 1">
        <m-node text="节点 1.1"></m-node>
        <m-node text="节点 1.2">
            <m-node text="节点 1.2.1"></m-node>
            <m-node text="节点 1.2.2"></m-node>
        </m-node>
        <m-node text="节点 1.3"></m-node>
        <m-node text="节点 1.4"></m-node>
    </m-node>
    <m-node text="节点 2"></m-node>
    <m-node text="节点 3">
        <m-node text="节点 3.1"></m-node>
        <m-node text="节点 3.2"></m-node>
    </m-node>
</m-root>
```

## MRoot

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| nodeName | String | `m-node` | 节点组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| nodeVMs | Array\<MNode\> | `[]` | 首层节点组件集合 |

### Slots

#### (default)

插入`<m-node>`子组件。

### Methods

#### walk(func)

广度优先遍历树。当`func`函数有返回值时，停止遍历。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 遍历的处理函数 |

#### find(func)

查找节点实例。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 查找函数。找到第一个返回值为`true`的实例。 |

## MNode

继承 [MEmitter](../m-emitter)。

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| rootName | String | `m-root` | 根组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| rootVM | MRoot |  | 根组件实例 |
| parentVM | MNode |  | 父节点实例 |
| nodeVMs | Array\<MNode\> | `[]` | 子节点组件集合 |

### Slots

#### (default)

插入`<m-node>`子组件。
