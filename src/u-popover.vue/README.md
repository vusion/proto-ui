# 弹出框 Popover

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-popover content="使用 content 属性添加内容">
        <u-button>内容</u-button>
    </u-popover>
    <u-popover title="标题" content="使用 title 属性添加标题">
        <u-button>标题</u-button>
    </u-popover>
    <u-popover>
        <u-button>使用 slot</u-button>
        <span slot="title">标题 <u-badge :value="3"></u-badge></span>
        <span slot="content">使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
    </u-popover>
</u-linear-layout>
```

### 自定义

``` html
<u-linear-layout>
    <u-popover>
        <u-button>Textarea</u-button>
        <div slot="root">
            <u-textarea style="border: none"></u-textarea>
        </div>
    </u-popover>
    <u-popover>
        <u-button>TreeView</u-button>
        <div slot="root">
            <u-tree-view style="border: none">
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
        </div>
    </u-popover>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-popover content="Popover" trigger="hover">
        <u-button>hover</u-button>
    </u-popover>
    <u-popover content="Popover" trigger="click">
        <u-button>click（默认）</u-button>
    </u-popover>
    <u-popover content="Popover" trigger="right-click">
        <u-button>right-click</u-button>
    </u-popover>
    <u-popover content="Popover" trigger="double-click">
        <u-button>double-click</u-button>
    </u-popover>
</u-linear-layout>
```

#### 手动触发

也可以手动触发弹出框的弹出/隐藏：

``` vue
<template>
<u-popover content="Popover" trigger="manual" :open.sync="open">
    <u-button @click="open = !open">{{ open ? '隐藏' : '弹出' }}</u-button>
</u-popover>
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
        <u-popover content="Popover" placement="top-start">
            <u-button>top-start</u-button>
        </u-popover>
        <u-popover content="Popover" placement="top">
            <u-button>top</u-button>
        </u-popover>
        <u-popover content="Popover" placement="top-end">
            <u-button>top-end</u-button>
        </u-popover>
    </u-linear-layout>
    <u-linear-layout>
        <u-popover content="Popover" placement="left-start">
            <u-button>left-start</u-button>
        </u-popover>
        <u-popover content="Popover" placement="left">
            <u-button>left</u-button>
        </u-popover>
        <u-popover content="Popover" placement="left-end">
            <u-button>left-end</u-button>
        </u-popover>
    </u-linear-layout>
    <u-linear-layout>
        <u-popover content="Popover" placement="right-start">
            <u-button>right-start</u-button>
        </u-popover>
        <u-popover content="Popover" placement="right">
            <u-button>right</u-button>
        </u-popover>
        <u-popover content="Popover" placement="right-end">
            <u-button>right-end</u-button>
        </u-popover>
    </u-linear-layout>
    <u-linear-layout>
        <u-popover content="Popover" placement="bottom-start">
            <u-button>bottom-start</u-button>
        </u-popover>
        <u-popover content="Popover" placement="bottom">
            <u-button>bottom</u-button>
        </u-popover>
        <u-popover content="Popover" placement="bottom-end">
            <u-button>bottom-end</u-button>
        </u-popover>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-popover content="Popover" disabled>
    <u-button disabled>disabled</u-button>
</u-popover>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| content | String | `'提示内容'` | 提示内容 |
| open.sync | Boolean | `false` | 弹出/隐藏状态 |
| trigger | String | `'click'` | 弹出框的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 弹出框的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

触发节点，该 slot 只能插入一个节点。Tooltip 除了会给该节点绑定触发事件，不会对它做任何事情。

#### root

自定义整体。

#### head

自定义头部。

#### body

自定义中部。

#### foot

自定义尾部。

#### title

自定义标题文本。

#### content

自定义内容文本。

### Events

#### @before-toggle

弹出/隐藏前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| open | Boolean | 弹出/隐藏状态 |
| $event.preventDefault | Function | 阻止弹出/隐藏流程 |

#### @toggle

弹出/隐藏时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 弹出/隐藏状态 |
