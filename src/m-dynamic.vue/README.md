## MDynamic

继承 [MEmitter](../m-emitter)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | 数据 |
| dynamic | Boolean | `true` | 是否可以动态添加/删除项 |
| get-default-item | Function | | 传入获取默认项的方法 |
| initial-add | Boolean | `true` | 是否自动补充项，如果初始时`data`中的项目数少于`min-count` |
| min-count | Number | `1` | 最小项目数 |
| max-count | Number | `Infinity` | 最大项目数 |

### Slots

#### (default)

添加文本或 HTML。

### Events

#### @before-add

添加前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 添加的项 |
| $event.index | Number | 添加的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止添加流程 |
| senderVM | MDynamic | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 添加的项 |
| $event.index | Number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | MDynamic | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 变更的项 |
| $event.index | Number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | MDynamic | 发送事件实例 |
