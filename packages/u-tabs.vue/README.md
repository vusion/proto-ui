# 标签页（Tabs）

## 示例
### 基本形式

``` html
<u-tabs>
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="TabA" value="A">ContentA</u-tab>
    <u-tab title="TabB" value="B">ContentB</u-tab>
    <u-tab title="TabC" value="C">ContentC</u-tab>
</u-tabs>
```

### 只读和禁用

``` html
<u-tabs readonly>
    <u-tab title="TabA">Readonly</u-tab>
    <u-tab title="TabB">Readonly</u-tab>
    <u-tab title="TabC">Readonly</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="TabA">Disabled All</u-tab>
    <u-tab title="TabB">Disabled All</u-tab>
    <u-tab title="TabC">Disabled All</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="TabA">Disabled Partially</u-tab>
    <u-tab title="TabB" disabled>Disabled Partially</u-tab>
    <u-tab title="TabC">Disabled Partially</u-tab>
</u-tabs>
```

### 隐藏部分项

``` html
<u-tabs value="2">
    <u-tab title="TabA" value="0">ContentA</u-tab>
    <u-tab title="TabB" value="1" hidden>ContentB</u-tab>
    <u-tab title="TabC" value="2">ContentC</u-tab>
</u-tabs>
```

### 可关闭

``` html
<u-tabs closable>
    <u-tab title="TabA">ContentA</u-tab>
    <u-tab title="TabB">ContentB</u-tab>
    <u-tab title="TabC">ContentC</u-tab>
    <u-tab title="TabD">ContentD</u-tab>
    <u-tab title="TabE">ContentE</u-tab>
</u-tabs>
```


### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="u-button">Button Content</u-tab>
    <u-tab title="Checkbox" to="u-checkbox">Checkbox Content</u-tab>
    <u-tab title="Tabs" to="u-tabs">Tabs Content</u-tab>
</u-tabs>
```

### 额外的

``` html
<u-tabs value="1">
    <u-tab title="TabA" value="0">ContentA</u-tab>
    <u-tab title="TabB" value="1">ContentB</u-tab>
    <u-tab title="TabC" value="2">ContentC</u-tab>
    <u-checkbox slot="extra">All</u-checkbox>
</u-tabs>
```

## Tabs API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 选中标签页的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| closable | Boolean | `false` | 是否可以关闭 |
| router | Boolean | `false` | 是否根据vue-router对应的路由进行高亮显示 |

### Slots

#### (default)

在插槽中插入`<u-tab>`子组件

#### extra

在标签右侧可以附加组件

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 选中标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 选中标签页实例 |

#### @before-close

关闭某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 待关闭标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 待关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭流程 |

#### @close

关闭某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | Any | 关闭的标签页的值 |
| oldValue | Any | 旧的值 |
| itemVM | Tab | 关闭的标签页实例 |
| $event.preventDefault | Function | 阻止关闭后自动选择页的流程 |

## Tab API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 标签页标题 |
| value | Any | | 标签页的值 |
| hidden | Boolean | `false` | 是否隐藏此标签页 |
| disabled | Boolean | `false` | 是否禁用此标签页 |
| to | String \| Object | | vue-router的目标链接 |
| replace | Boolean | `false` | 当切换路由时，调用`router.replace()`，而不是`router.push()` |
| exact | Boolean | `false` | 是否精确匹配 |

### Slots

#### (default)

在插槽中插入文本或HTML
