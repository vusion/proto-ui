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

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MGroup | 分组组件 |
| senderVM | Vue | 发送事件实例 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## MGroup

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
