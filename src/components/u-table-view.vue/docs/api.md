## UTableView

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | 表格数据 |
| title | String | | 表格标题 |
| titleAlignment | String | `'center'` | 表格标题对齐方式 |

| border | Boolean | | 是否显示边框 |
| line | Boolean | `false` | 单元格之间是否显示分隔线条 |
| striped | Boolean | `false` | 表格行是否按斑马线条纹显示 |
| hover | Boolean | `false` | 表格行在悬浮时是否高亮显示 |

| loading | Boolean | | 手动设置是否正在加载中 |
| loadingText | String | `'正在加载中'` | 正在加载中的文字 |
| error | Boolean | | 手动设置是否加载失败 |
| errorText | String | `'加载失败，请重试'` | 加载失败时的文字 |
| emptyText | String | `'暂无数据'` | 暂无数据时的文字 |

| sorting.sync | Object<{ field, order }> | `{ field: undefined, order: 'desc' }` | 当前排序字段和顺序 |
| defaultOrder | String | `'asc'` | 所有列首次点击时的排序顺序 |

### Slots

#### (default)

在表格中插入`<u-table-view-column>`标签。

## UTableViewColumn

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 列标题 |
| field | String | | data 中的字段名 |
| sortable | Boolean | `false` | 该列是否可以排序 |
| defaultOrder | String | `'asc'` | 该列首次点击时的排序顺序 |

| width | String, Number | | 给列指定宽度 |
| ellipsis | Boolean | `false` | 是否省略显示。默认文字超出时会换行 |



### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。

