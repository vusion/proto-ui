# UComboPagination 复合翻页器

在 UPagination 的基础上，添加了显示总页数、切换每页大小、页面跳转等功能。

## 示例
### 基本用法

使用`show-total`、`show-sizer`、`show-jumper`这几个属性，可以对应开启的显示总页数、切换每页大小、页面跳转功能。

``` html
<u-combo-pagination show-total show-sizer show-jumper></u-combo-pagination>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| page.sync | Number | `1` | 当前页码 |
| page-size.sync | Number | `20` | 每页大小 |
| page-size-options | Array | `[10, 20, 50]` | 每页大小选项列表 |
| total | Number | `11` | 总页数 |
| side | Number | `2` | 当页数多时，两边恒定显示的数量 |
| around | Number | `5` | 当页数多时，中间恒定显示的数量  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| show-total | Boolean | `false` | 是否显示总页数 |
| show-sizer | Boolean | `false` | 是否显示切换每页大小选项 |
| show-jumper | Boolean | `false` | 是否显示页面跳转输入框 |

### Events

#### @change

页码改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | 当前页码 |
| $event.oldPage | Number | 旧的页码 |
| senderVM | UComboPagination | 发送事件实例 |

#### @change-page-size

每页大小改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | 当前页码 |
| $event.oldPage | Number | 旧的页码 |
| senderVM | UComboPagination | 发送事件实例 |
