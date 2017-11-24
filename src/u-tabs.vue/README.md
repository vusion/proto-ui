# 标签页 Tabs

## 示例
### 基本形式

``` html
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### Value

``` html
<u-tabs value="B">
    <u-tab title="模板" value="A">模板内容</u-tab>
    <u-tab title="样式" value="B">样式内容</u-tab>
    <u-tab title="逻辑" value="C">逻辑内容</u-tab>
</u-tabs>
```

### 只读和禁用

``` html
<u-tabs readonly>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs disabled>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
<u-tabs>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式" disabled>样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
</u-tabs>
```

### 隐藏部分项

``` html
<u-tabs value="2">
    <u-tab title="模板" value="0">模板内容</u-tab>
    <u-tab title="样式" value="1" hidden>样式内容</u-tab>
    <u-tab title="逻辑" value="2">逻辑内容</u-tab>
</u-tabs>
```

### 可关闭

``` html
<u-tabs closable>
    <u-tab title="模板">模板内容</u-tab>
    <u-tab title="样式">样式内容</u-tab>
    <u-tab title="逻辑">逻辑内容</u-tab>
    <u-tab title="文档">文档内容</u-tab>
    <u-tab title="资源">资源内容</u-tab>
</u-tabs>
```


### 路由

``` html
<u-tabs router>
    <u-tab title="Button" to="u-button"></u-tab>
    <u-tab title="Checkbox" to="u-checkbox"></u-tab>
    <u-tab title="Tabs" to="u-tabs"></u-tab>
</u-tabs>
```

### 额外的

``` html
<u-tabs value="1">
    <u-tab title="模板" value="0">模板内容</u-tab>
    <u-tab title="样式" value="1">样式内容</u-tab>
    <u-tab title="逻辑" value="2">逻辑内容</u-tab>
    <u-checkbox slot="extra">全选</u-checkbox>
</u-tabs>
```

## Tabs API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 选中标签页的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| closable | Boolean | `false` | 是否可以关闭 |
| router | Boolean | `false` | 是否根据vue-router来控制选择哪个标签页 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String \| Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入`<u-tab>`子组件。

#### extra

在标签右侧可以附加组件。

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
### Props/Attrs

| Prop/Attr | Type | Default | Description |
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

插入文本或HTML。
