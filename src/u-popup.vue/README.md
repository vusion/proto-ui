# 弹出框 Popup

弹出层的设计思路请参阅[设计思路——弹出层系列](/ui-design/popper)。

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-button>
        内容
        <u-popup>使用 content 属性添加内容</u-popup>
    </u-button>
    <u-button>
        标题
        <u-popup title="标题">使用 title 属性添加标题</u-popup>
    </u-button>
    <u-button>
        使用 slot
        <u-popup>
            <span slot="title">标题 <u-badge :value="3"></u-badge></span>
            <span>使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### 自定义

``` html
<u-linear-layout>
    <u-button>
        Dropdown
        <u-popup>
            <u-menu slot="root" value="3" :router="false">
                <u-menu-item value="1">指南</u-menu-item>
                <u-menu-item value="2">概念</u-menu-item>
                <u-menu-item value="3">组件</u-menu-item>
            </u-menu>
        </u-popup>
    </u-button>
    <u-button>
        Textarea
        <u-popup>
            <u-textarea slot="root"></u-textarea>
        </u-popup>
    </u-button>
    <u-button>
        TreeView
        <u-popup>
            <u-tree-view slot="root">
                <u-tree-view-node text="节点1">
                    <u-tree-view-node text="节点1.1"></u-tree-view-node>
                    <u-tree-view-node text="节点1.2">
                        <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
                        <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
                    </u-tree-view-node>
                    <u-tree-view-node text="节点1.3"></u-tree-view-node>
                    <u-tree-view-node text="节点1.4"></u-tree-view-node>
                </u-tree-view-node>
                <u-tree-view-node text="节点2"></u-tree-view-node>
                <u-tree-view-node text="节点3">
                    <u-tree-view-node text="节点3.1"></u-tree-view-node>
                    <u-tree-view-node text="节点3.2"></u-tree-view-node>
                </u-tree-view-node>
            </u-tree-view>
        </u-popup>
    </u-button>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-button>
        hover
        <u-popup trigger="hover">Popup</u-popup>
    </u-button>
    <u-button>
        click（默认）
        <u-popup trigger="click">Popup</u-popup>
    </u-button>
    <u-button>
        right-click
        <u-popup trigger="right-click">Popup</u-popup>
    </u-button>
    <u-button>
        double-click
        <u-popup trigger="double-click">Popup</u-popup>
    </u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出框的弹出/隐藏：

``` vue
<template>
<u-button @click="open = !open">
    {{ open ? '隐藏' : '弹出' }}
    <u-popup trigger="manual" :open.sync="open">Popup</u-popup>
</u-button>
</template>
<script>
export default {
    data() {
        return {
            open: false,
        };
    },
};
</script>
```

### 弹出位置

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <u-popup placement="top-start">Popup</u-popup>
        </u-button>
        <u-button>
            top
            <u-popup placement="top">Popup</u-popup>
        </u-button>
        <u-button>
            top-end
            <u-popup placement="top-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <u-popup placement="left-start">Popup</u-popup>
        </u-button>
        <u-button>
            left
            <u-popup placement="left">Popup</u-popup>
        </u-button>
        <u-button>
            left-end
            <u-popup placement="left-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <u-popup placement="right-start">Popup</u-popup>
        </u-button>
        <u-button>
            right
            <u-popup placement="right">Popup</u-popup>
        </u-button>
        <u-button>
            right-end
            <u-popup placement="right-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <u-popup placement="bottom-start">Popup</u-popup>
        </u-button>
        <u-button>
            bottom
            <u-popup placement="bottom">Popup</u-popup>
        </u-button>
        <u-button>
            bottom-end
            <u-popup placement="bottom-end">Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

#### 跟随鼠标

将`'follow-cursor'`属性设置为`true`可以跟随鼠标。也可以传一个数字或对象调整位置偏移。

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            top-start
            <u-popup placement="top-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            top
            <u-popup placement="top" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            top-end
            <u-popup placement="top-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            left-start
            <u-popup placement="left-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            left
            <u-popup placement="left" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            left-end
            <u-popup placement="left-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            right-start
            <u-popup placement="right-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            right
            <u-popup placement="right" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            right-end
            <u-popup placement="right-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button>
            bottom-start
            <u-popup placement="bottom-start" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            bottom
            <u-popup placement="bottom" follow-cursor>Popup</u-popup>
        </u-button>
        <u-button>
            bottom-end
            <u-popup placement="bottom-end" follow-cursor>Popup</u-popup>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-button disabled>
    disabled
    <u-popup disabled>Popup</u-popup>
</u-button>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | `'标题'` | 弹出框标题 |
| open.sync | Boolean | `false` | 弹出/隐藏状态 |
| trigger | String | `'click'` | 弹出框的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 弹出框的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| hideDelay | Number | `0` | 提示内容消失延迟时间，单位是`'ms'` |
| offset | String | `'0'` | 弹出层偏移，如：'10', '10px 10px', '10% 10%', 第一个值表示水平偏移，第二个值表示垂直位移, 默认单位是`px` |
| follow-cursor | Boolean, Number, Object | `false` | 是否跟随鼠标 |
| disabled | Boolean | `false` | 是否禁用 |
| merge-borders | Boolean | `true` | 是否自动合并内外边框 |

### Slots

#### (default)

触发节点，该 slot 只能插入一个节点。Tooltip 除了会给该节点绑定触发事件，不会对它做任何事情。

#### root

自定义整个弹出层。

#### head

自定义头部。

#### body

自定义中部。

#### foot

自定义尾部。

#### title

自定义标题文本。

#### default

自定义内容。

### Events

#### @before-toggle

弹出/隐藏前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | 弹出/隐藏状态 |
| $event.preventDefault | Function | 阻止弹出/隐藏流程 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

弹出/隐藏时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出/隐藏状态 |
| senderVM | Vue | 发送事件实例 |
