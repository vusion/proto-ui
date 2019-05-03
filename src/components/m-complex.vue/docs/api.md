## MComplex

继承 [MSinglex](../m-singlex)、[MMultiplex](../m-multiplex)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Array | | 当前选择的值 |
| values.sync | Array | | 多项选择的值 |
| auto-select | Boolean | `false` | 是否自动选择第一个非禁用的项 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否切换为多选模式 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-complex-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | MComplexItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MComplex | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值。多选模式中，为数组 |
| senderVM | MComplex | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 单选模式中，改变后的值 |
| $event.oldValue | Any | 单选模式中，旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | MComplexItem | 单选模式中，选择项子组件 |
| $event.values | Array | 多选模式中，改变后的值 |
| $event.oldValues | Array | 多选模式中，旧的值 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MComplexItem\> | 多选模式中，所有选中项子组件的数组 |
| senderVM | MComplex | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 单选模式中，选择项的值 |
| $event.oldValue | Any | 单选模式中，旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | MComplexItem |  单选模式中，选择项子组件 |
| $event.values | Array | 多选模式中，改变后的值 |
| $event.oldValues | Array | 多选模式中，旧的值 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MComplexItem\> | 多选模式中，所有选中项子组件的数组 |
| senderVM | MComplex | 发送事件实例 |

## MComplexItem

继承 [MSinglexItem](../m-singlex#MSinglexItem)、[MMultiplexItem](../m-multiplex/api#MMultiplexItem)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| selected | Boolean | `false` | 是否选中此项 |
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
| senderVM | MComplexItem | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | MComplexItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | MComplexItem | 发送事件实例 |