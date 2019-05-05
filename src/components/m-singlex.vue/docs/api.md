## MSinglex

继承 [MParent](../m-parent)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| auto-select | Boolean | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| router | Boolean | `false` | 是否开启路由模式 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-singlex-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MSinglex | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | MSinglex | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.oldItem | Object | 旧的选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.oldVM | MSinglexItem | 旧的选择项子组件 |
| senderVM | MSinglex | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.oldItem | Object | 旧的选择项相关对象 |
| $event.itemVM | MSinglexItem | 选择项子组件 |
| $event.oldVM | MSinglexItem | 旧的选择项子组件 |
| senderVM | MSinglex | 发送事件实例 |

## MSinglexItem

继承 [MChild](../m-parent/api#MChild)。

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

点击此项时触发。与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | MSinglexItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | MSinglexItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MSinglexItem | 发送事件实例 |
