## UTreeView
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| checkable | Boolean | `false` | 是否可以选中/取消 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-tree-view-node>`子组件

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.node | Object | 选择项相关对象 |
| $event.oldNode | Object | 旧的选择项相关对象 |
| $event.nodeVM | UTreeViewNode | 选择项子组件 |
| $event.oldVM | UTreeViewNode | 旧的选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTreeView | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | UTreeView | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.node | Object | 选择项相关对象 |
| $event.oldNode | Object | 旧的选择项相关对象 |
| $event.nodeVM | UTreeViewNode | 选择项子组件 |
| $event.oldVM | UTreeViewNode | 旧的选择项子组件 |
| senderVM | UTreeView | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.node | Object | 选择项相关对象 |
| $event.oldNode | Object | 旧的选择项相关对象 |
| $event.nodeVM | UTreeViewNode | 选择项子组件 |
| $event.oldVM | UTreeViewNode | 旧的选择项子组件 |
| senderVM | UTreeView | 发送事件实例 |

#### @toggle

展开/折叠某节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.node | Object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| senderVM | UTreeView | 发送事件实例 |

#### @check

选中/取消节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | 选中/取消状态 |
| $event.oldChecked | Boolean | 旧的选中/取消状态 |
| $event.values | Array | 所有选中节点的值 |
| $event.node | Object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| senderVM | UTreeView | 发送事件实例 |

### Methods

#### walk(func)

广度优先遍历树。当`func`函数有返回值时，停止遍历。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 遍历的处理函数 |

### find(func)

查找节点实例。

| Param | Type | Description |
| ----- | ---- | ----------- |
| func | Function | 查找函数。找到第一个返回值为`true`的实例。 |

#### toggleAll(expanded)

展开/折叠所有节点

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

#### checkAll(checked)

选中/取消所有节点

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 选中/取消 |

## UTreeViewNode
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| expanded.sync | Any | | 展开/折叠状态 |
| checked.sync | Any | | 选中/取消状态 |
| disabled | Boolean | `false` | 禁用此项 |
| node | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.node | Object | 此项的相关对象 |
| $event.nodeVM | UTreeViewNode | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UTreeViewNode | 发送事件实例 |

#### @before-toggle

展开/折叠此节点前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.node | Object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | UTreeViewNode | 发送事件实例 |

#### @toggle

展开/折叠某节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.node | Object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| senderVM | UTreeViewNode | 发送事件实例 |

#### @check

选中节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | 选中状态 |
| $event.oldChecked | Boolean | 旧的选中状态 |
| $event.node | Object | 节点相关对象 |
| $event.nodeVM | UTreeViewNode | 节点组件 |
| senderVM | UTreeViewNode | 发送事件实例 |
