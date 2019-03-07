## UTableView

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| line | Boolean | `false` | 单元格之间是否显示分隔线条 |
| striped | Boolean | `false` | 表格行是否按斑马线条纹显示 |
| hover | Boolean | `false` | 表格行在悬浮时是否高亮显示 |

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
| width | String, Number | | 给列指定宽度 |



### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。

