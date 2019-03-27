## UListView API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| values.sync | Any | | 多项选择的值 |
| field | String | `'text'` | 显示文本字段 |
| data | Array\<{ text, value }\> | | Data 书写方式中的数据列表 |
| data-source | DataSource, Function, Object | | 多功能数据源 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| collapsible | Boolean | `false` | 分组是否可以折叠 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| loading-text | String | `'加载中...'` | 加载中的文字。使用异步数据源时才会出现 |
| initial-load | Boolean | `true` | 是否在初始时立即加载 |
| page-size | Number | `50` | 当使用`data-source`时的分页大小 |
| remote-paging | Number | `false` | 是否使用后端分页 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-list-view-item>`、`<u-list-view-divider>`或`<u-list-view-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | UListViewItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UListView | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | UListView | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | UListViewItem |  单选模式中，选择项子组件 |
| $event.values | Any | 多选模式中，改变后的值 |
| $event.oldValues | Any | 多选模式中，旧的值 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UListViewItem\> | 多选模式中，所有选中项子组件的数组 |
| senderVM | UListView | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | UListViewItem | 选择项子组件 |
| $event.values | Any | 多选模式中，改变后的值 |
| $event.oldValues | Any | 多选模式中，旧的值 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<UListViewItem\> | 多选模式中，所有选中项子组件的数组 |
| senderVM | UListView | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | UListViewGroup | 分组组件 |
| senderVM | UListView | 发送事件实例 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## UListViewItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | UListView | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | UListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | UListView | 发送事件实例 |

## UListViewGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |
| collapsible | Boolean |  | `false` | 是否可以折叠 |
| expanded.sync | Boolean | `false` | 展开/折叠状态 |
| disabled | Boolean | `false` | 是否禁用。禁用时无法展开/折叠 |

### Slots

#### (default)

插入`<u-list-view-item>`或`<u-list-view-divider>`子组件。

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
| $event.groupVM | UListViewGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | UListView | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | UListViewGroup | 分组组件 |
| senderVM | UListView | 发送事件实例 |

## UListViewDivider API

无
