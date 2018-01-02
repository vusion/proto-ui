# 弹出层 Popper

## 示例
### 基本形式

一般情况下，需要用一个popper slot来设置弹出元素，并且要用default slot来设置触发元素，这个触发元素通常也作为参照元素。由于Vue的限制，每个slot中只能有一个根节点。

``` html
<u-popper>
    <u-button>click</u-button>
    <div slot="popper">
        <u-button>popper</u-button>
    </div>
</u-popper>
```

### 触发事件

``` html
<u-linear-layout>
    <u-popper trigger="click">
        <u-button>click（默认）</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper trigger="hover">
        <u-button>hover</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper trigger="right-click">
        <u-button>right-click</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper trigger="double-click">
        <u-button>double-click</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
</u-linear-layout>
```

### 弹出位置

``` html
<u-linear-layout>
    <u-popper placement="bottom-start">
        <u-button>bottom-start（默认）</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper placement="bottom">
        <u-button>bottom</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper placement="right-start">
        <u-button>right-start</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
    <u-popper placement="left">
        <u-button>left</u-button>
        <div slot="popper">
            <u-button>popper</u-button>
        </div>
    </u-popper>
</u-linear-layout>
```

### 禁用

``` html
<u-popper disabled>
    <u-button disabled>disabled</u-button>
</u-popper>
```

## Popper API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| trigger | String | `'click'` | 弹出层的触发方式，可选click,hover,manual |
| placement | String | `'bottom'` | 弹出层的弹出方向：top,bottom,left,right,top-start,top-end... |
| offset | String | `undefined` | 弹出层偏移，"10px 10px","10% 10%" |
| escape-with-reference | Boolean | `true` | 当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内 |
| hover-delay | Number | `0` | trigger为hover时的延迟时间 |
| boundaries-element | Element \| String | `scrollParent` | 弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素 |
| arrow-element | String | `'[u-arrow]'` | 箭头元素的query值，默认为u-arrow属性，定义该属性则组件会控制箭头元素的偏移量 |
| append-to | String | `body` | 指示添加到哪个元素 |
| options | Object | `{ modifiers: {} }` | 补充popper.js的选项 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @toggle

触发popper显示或隐藏

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | true表示展示，false表示隐藏 |

### Methods

#### update

触发popper实例的update方法

| Param | Type | Description |
| ----- | ---- | ----------- |

#### toggle

改变popper的状态：展开/隐藏

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | 展开/隐藏 |