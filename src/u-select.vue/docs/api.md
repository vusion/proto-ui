## USelect
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| data-source | DataSource, Function | | 多功能数据源 |
| loading-text | String | `'加载中...'` | 加载中的文字。使用异步数据源时才会出现 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | Vue | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

展开/收起选择框时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.opened | Boolean | 展开/收起状态 |
| senderVM | Vue | 发送事件实例 |

## USelectItem
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SelectItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

## USelectGroup

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## USelectDivider

无
