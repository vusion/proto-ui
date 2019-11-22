## MPopper
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| opened.sync | Boolean | `false` | 弹出/关闭状态 |
| trigger | String | `'click'` | 触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| reference | String, HTMLElement, Function | `'parent'` | 参考元素。可选值：`'parent'`表示父元素，`'prev'`表示上一个元素，`'next'`表示下一个元素。也可以传一个 HTML 元素，或用于返回元素的方法 |
| placement | String | `'bottom'` | 弹出方位。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hover-delay | Number | `0` | 当 trigger 为 `'hover'` 时的延迟时间 |
| hide-delay | Number | `0` | 当 trigger 为 `'hover'` 时的隐藏延迟时间 |
| append-to | String | `'body'` | 设置添加到哪个元素。可选值：`'body'`表示添加到 document.body，`'reference'`表示添加到参考元素中 |
| boundaries-element | Element, String | `'window'` | 边际元素。用于定义弹出层的边际，默认为首个滚动的父级元素 |
| escape-with-reference | Boolean | `true` | 当触发元素离开边际时，弹出层离开/保留在边际元素内 |
| follow-cursor | Boolean, Number, Object | `false` | 是否跟随鼠标 |
| offset | String | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| options | Object | `{ modifiers: {} }` | 补充 popper.js 的选项 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入需要弹出的内容。

### Events

#### @before-open

弹出前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止弹出流程 |
| senderVM | MPopper | 发送事件实例 |

#### @open

弹出时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | MPopper | 发送事件实例 |

#### @before-close

隐藏前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止隐藏流程 |
| senderVM | MPopper | 发送事件实例 |

#### @close

隐藏时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | MPopper | 发送事件实例 |

#### @before-toggle

@deprecated

#### @toggle

@deprecated

### Methods

#### open()

弹出实例。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### close()

关闭实例。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### toggle(opened?)

切换弹出/关闭状态。

| Param | Type | Description |
| ----- | ---- | ----------- |
| opened? | Boolean | 可选。弹出/关闭状态 |

#### update()

更新 popper 实例。参考 [Popper.update()](https://popper.js.org/popper-documentation.html#Popper.update)。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### scheduleUpdate()

在下次 UI 渲染时一块更新 popper 实例，比`update()`性能要好。参考 [Popper.scheduleUpdate()](https://popper.js.org/popper-documentation.html#Popper.scheduleUpdate)。

| Param | Type | Description |
| ----- | ---- | ----------- |
