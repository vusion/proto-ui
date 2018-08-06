# 面包屑 Crumb

## 示例
### 基本形式

``` html
<u-crumb>
    <u-crumb-item to="/">首页</u-crumb-item>
    <u-crumb-item to="/proto-ui">原型组件</u-crumb-item>
    <u-crumb-item to="/proto-ui/u-crumb" current>面包屑</u-crumb-item>
</u-crumb>
```

## Crumb API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| 无 |

### Slots

#### (default)

插入`<u-crumb-item>`子组件。

## CrumbItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | 链接地址 |
| target | String |  | （原生属性） |
| to | String, Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | Boolean | `false` | 需要vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| current | Boolean | `false` | 是否为当前路径。当前路径不会响应`click`事件。 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### $listeners

监听所有`<a>`元素的事件。

#### @click

点击链接时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |


#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.append | Boolean | `append`属性的值 |
