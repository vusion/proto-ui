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

## 基础示例
### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <m-parent>
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
                <m-group title="餐具">
                    <m-child>筷子</m-child>
                    <m-child>碗</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## MGroupParent

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | String | `m-group` | 分组组件的名称 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| groupVMs | Array\<MGroup\> | `[]` | 分组组件集合 |

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| collapsible | Boolean | `false` | 分组是否可以折叠 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |

### Events

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| senderVM | MGroupParent | 发送事件实例 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## MGroup

继承 [MEmitter](../m-emitter)。

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| parentName | String | `m-parent` | 父组件的名称 |
| childName | String | `m-child` | 子组件的名称 |

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 显示的标题 |
| collapsible | Boolean |  | `false` | 是否可以折叠 |
| expanded.sync | Boolean | `false` | 展开/折叠状态 |
| disabled | Boolean | `false` | 是否禁用。禁用时无法展开/折叠 |

### Data

| Data | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| parentVM | MParent |  | 父组件实例 |
| itemVMs | Array\<MChild\> | `[]` | 子组件集合 |

### Slots

#### (default)

插入`<m-child>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | MGroup | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| senderVM | MGroup | 发送事件实例 |

## MChild

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| groupName | String | `m-group` | 分组组件的名称 |

其它参见[MParent](../m-parent/api)。

