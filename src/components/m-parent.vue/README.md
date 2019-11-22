# MParent 父子模式

本对 Mixin：MParent 和 MChild，对常见的类似`<u-tabs>`和`<u-tab>`一对嵌套父子组件的场景进行了抽象，用于快速开发和代码借鉴。

### 用法

- 在继承 MParent 的组件 Options 中，补充声明子组件的 `childName`字段
- 在继承 MChild 的组件 Options 中，补充声明父组件的 `parentName`字段

父组件会将多个子组件收集在`itemVMs`数组中，子组件将父组件标记为`parentVM`变量。这段过程发生在组件的`created`阶段。在`destroyed`阶段回收这些数据。

## 基础示例

### 基本用法

``` html
<m-parent>
    <m-child>水杯</m-child>
    <m-child>咖啡</m-child>
    <m-child>坚果</m-child>
</m-parent>
```

## MParent

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| childName | String | `m-child` | 子组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| itemVMs | Array\<MChild\> | `[]` | 子组件集合 |

### Slots

#### (default)

插入`<m-child>`子组件。

## MChild

继承 [MEmitter](../m-emitter)。

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | String | `m-parent` | 父组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent |  | 父组件实例 |

### Slots

#### (default)

插入文本或 HTML。
