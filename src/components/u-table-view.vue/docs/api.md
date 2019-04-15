## UTableView

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 表格标题 |
| title-alignment | String | `'center'` | 表格标题对齐方式 |
| border | Boolean | | 是否显示边框 |
| line | Boolean | `false` | 单元格之间是否显示分隔线条 |
| striped | Boolean | `false` | 表格行是否按斑马线条纹显示 |
| hover | Boolean | `false` | 表格行在悬浮时是否高亮显示 |
| loading | Boolean | | 手动设置是否正在加载中 |
| loading-text | String | `'正在加载中'` | 正在加载中的文字 |
| error | Boolean | | 手动设置是否加载失败 |
| errorText | String | `'加载失败，请重试'` | 加载失败时的文字 |
| emptyText | String | `'暂无数据'` | 暂无数据时的文字 |
| - |
| data | Array\<{ \[field\]: string, ... }\> | | 表格数据 |
| data-source | Object, Function, DataSource | | 多功能数据源 |
| initial-load | Boolean | `true` | 是否在初始时立即加载 |
| pageable | Boolean | `false` | 是否需要分页 |
| page-size | Number | `20` | 分页大小 |
| sorting.sync | Object<{ field: string, order: string, compare: Function }> | `{ field: undefined, order: 'desc' }` | 当前排序字段和顺序 |
| default-order | String | `'asc'` | 所有列首次点击时的排序顺序 |
| filtering.sync | Object | | 过滤项 |
| remote-paging | Boolean | `false` | 是否使用后端分页 |
| remote-sorting | Boolean | `false` | 是否使用后端排序 |
| remote-filtering | Boolean | `false` | 是否使用后端过滤 |

### Slots

#### (default)

在表格中插入`<u-table-view-column>`子组件。

### Events

#### @before-load

加载前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止加载流程 |
| senderVM | UTableView | 发送事件实例 |

#### @load

加载时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | UTableView | 发送事件实例 |

#### @before-page

切换分页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | 分页大小 |
| $event.oldNumber | Number | 旧的页数 |
| $event.number | Number | 当前页数 |
| $event.preventDefault | Function | 阻止切换分页流程 |
| senderVM | UTableView | 发送事件实例 |

#### @page

切换分页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.size | Number | 分页大小 |
| $event.oldNumber | Number | 旧的页数 |
| $event.number | Number | 当前页数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-sort

排序前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | 排序顺序 |
| $event.order | String | 排序字段 |
| $event.compare | Function | 排序比较函数 |
| $event.preventDefault | Function | 阻止排序流程 |
| senderVM | UTableView | 发送事件实例 |

#### @sort

排序时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | String | 排序顺序 |
| $event.order | String | 排序字段 |
| $event.compare | Function | 排序比较函数 |
| senderVM | UTableView | 发送事件实例 |

#### @before-filter

过滤前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.field | Object | 过滤筛选对象 |
| $event.preventDefault | Function | 阻止过滤流程 |
| senderVM | UTableView | 发送事件实例 |

#### @filter

过滤时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 过滤筛选对象 |
| senderVM | UTableView | 发送事件实例 |

### Methods

#### load()

带缓存地加载

| Param | Type | Description |
| ----- | ---- | ----------- |

#### reload()

清除缓存，重新加载

| Param | Type | Description |
| ----- | ---- | ----------- |

## UTableViewColumn

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 列标题 |
| field | String | | data 中的字段名 |
| width | String, Number | | 给列指定宽度，可以为数字或百分比 |
| ellipsis | Boolean | `false` | 是否省略显示。默认文字超出时会换行 |
| formatter | String, Object, Function, Formatter | `'placeholder'` | 格式器 |
| - |
| sortable | Boolean | `false` | 该列是否可以排序 |
| default-order | String | `'asc'` | 该列首次点击时的排序顺序 |
| filters | Array\<{ text: string, value: any }\> | `'asc'` | 该列首次点击时的排序顺序 |
| hidden | Boolean | `false` | 是否隐藏 |

### Slots

#### (default)

在表格列中插入`<u-table-view-filters>`子组件。

#### cell

对单元格数据展示进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| item | Object | 循环中的当前项 |
| columnVM | String | 该列组件实例 |
| value | Any | item 中 field 字段对应的值 |
| index | Number | 列的索引 |

#### title

对标题进行自定义。

| Prop/Attr | Type | Description |
| --------- | ---- | ----------- |
| columnVM | String | 该列组件实例 |
| index | Number | 列的索引 |
