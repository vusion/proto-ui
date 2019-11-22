# UIconTooltip 图标提示

<s-component-labels :labels="[
    'UI 组件', '弹出层', '行内展示',
]"></s-component-labels>

图标与`<u-tooltip>`的组合。

## 示例
### 基本用法

``` html
文字旁的提示 <u-icon-tooltip>这是提示内容</u-icon-tooltip>
```

### 切换类型

``` html
信息 <u-icon-tooltip>这是提示内容</u-icon-tooltip><br>
帮助 <u-icon-tooltip type="help">这是提示内容</u-icon-tooltip><br>
详情 <u-icon-tooltip type="detail">这是提示内容</u-icon-tooltip>
```

### 弹出位置

``` html
<u-linear-layout>
    <span>
        top
        <u-icon-tooltip placement="top">Tooltip</u-icon-tooltip>
    </span>
    <span>
        left
        <u-icon-tooltip placement="left">Tooltip</u-icon-tooltip>
    </span>
    <span>
        right
        <u-icon-tooltip placement="right">Tooltip</u-icon-tooltip>
    </span>
    <span>
        bottom
        <u-icon-tooltip placement="bottom">Tooltip</u-icon-tooltip>
    </span>
</u-linear-layout>
```

## UIconTooltip
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'info'` | 图标类型。可选值：`'info'`, `'help'`, `'detail'` |
| size | String | `'normal'` | 提示大小。可选值：`'mini'`, `'normal'`, `'large'` |
| opened.sync | Boolean | `false` | 弹出/关闭状态 |
| trigger | String | `'hover'` | 工具提示的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 工具提示的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hide-delay | Number | `0` | 提示内容消失延迟时间，单位是 ms |
| offset | String | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | Boolean, Number, Object | `false` | 是否跟随鼠标 |
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
| senderVM | UTooltip | 发送事件实例 |

#### @open

弹出时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | UTooltip | 发送事件实例 |

#### @before-close

隐藏前触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止隐藏流程 |
| senderVM | UTooltip | 发送事件实例 |

#### @close

隐藏时触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 空 |
| senderVM | UTooltip | 发送事件实例 |

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
