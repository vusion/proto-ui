# 分页 Pagination

## 示例
### 基本形式

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11"></u-pagination>
    <u-pagination :total="11" :page="6"></u-pagination>
</u-linear-layout>
```

### 显示数量

当页数多时，可以使用`side`和`around`来设置两边和中间恒定显示的数量。

``` html
<u-pagination :total="11" :page="6" :side="1" :around="3"></u-pagination>
```

### 只读和禁用

``` html
<u-linear-layout direction="vertical">
    <u-pagination :total="11" readonly></u-pagination>
    <u-pagination :total="11" disabled></u-pagination>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| page | Number | `1` | 当前页码 |
| total | Number | `11` | 总页数 |
| side | Number | `2` | 当页数多时，两边恒定显示的数量 |
| around | Number | `5` | 当页数多时，中间恒定显示的数量  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @before-select

选择分页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | 选择的页码 |
| $event.oldPage | Number | 旧的页码 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @select

选择分页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | 选择的页码 |
| $event.oldPage | Number | 旧的页码 |
| senderVM | Vue | 发送事件实例 |

#### @change

页码改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.page | Number | 当前页码 |
| $event.oldPage | Number | 旧的页码 |
| senderVM | Vue | 发送事件实例 |
