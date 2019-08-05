## UFormTableView

继承 [MDynamic](../m-dynamic)。

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| border | Boolean | | 是否有边框 |
| data | Array | | 数据 |
| dynamic | Boolean | `false` | 是否可以动态添加/删除项 |
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
| senderVM | UFormTableView | 发送事件实例 |

#### @add

添加时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 添加的项 |
| $event.index | Number | 添加的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

#### @before-remove

删除前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| $event.preventDefault | Function | 阻止删除流程 |
| senderVM | UFormTableView | 发送事件实例 |

#### @remove

删除时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 删除的项 |
| $event.index | Number | 删除的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

#### @splice

数量变更（添加/删除）时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.item | Any | 变更的项 |
| $event.index | Number | 变更的索引 |
| $event.data | Array | 当前数据 |
| senderVM | UFormTableView | 发送事件实例 |

## UFormTableViewColumn

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 列标题 |
| field | String | | data 中的字段名 |
| width | String, Number | | 给列指定宽度，可以为数字或百分比 |
| ellipsis | Boolean | `false` | 是否省略显示。默认文字超出时会换行 |
| formatter | String, Object, Function, Formatter | `'placeholder'` | 格式器 |
| hidden | Boolean | `false` | 是否隐藏 |
| start-index | Number | `1` | 当`type="index"`时的起始序号 |
| **Validator Props/Attrs** |
| label | String | | 标签。用于提示消息的合成 |
| muted | String | | 验证时是否静默。可选值：`'message'`表示只静默消息提示，`'all'`同时静默消息提示和红框提示 |
| rules | String, Array | | 验证规则。简写格式为字符串类型，完整格式或混合格式为数组类型 |
| ignore-validation | Boolean | `false` | 忽略验证 |
| ignore-rules | Boolean | `false` | 忽略验证规则。已废弃，同`ignore-validation` |
| validating-options | Object | | 验证辅助对象。在 Rule 的 `validate` 方法中使用。表格中会额外将`{ data: currentData, item, rowIndex }`注入 |
| validating-value | Any | | 临时修改验证值 |
| validating-process | Function | | 验证前对值进行预处理 |

### Slots

#### (default)

在表格列中插入`cell`插槽。

#### cell

对单元格数据展示进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | 循环中的当前项 |
| value | Any | item 中 field 字段对应的值 |
| columnVM | String | 该列组件实例 |
| rowIndex | Number | 行的索引 |
| columnIndex | Number | 列的索引 |

#### title

对标题进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| columnVM | String | 该列组件实例 |
| columnIndex | Number | 列的索引 |

#### expand-content

展开列的内容

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | 循环中的当前项 |
| value | Any | item 中 field 字段对应的值 |
| columnVM | String | 该列组件实例 |
| rowIndex | Number | 行的索引 |
| columnIndex | Number | 列的索引 |
