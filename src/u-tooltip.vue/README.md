# 工具提示 Tooltip

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-tooltip content="使用 content 属性比较方便">
        <u-button>使用属性</u-button>
    </u-tooltip>
    <u-tooltip>
        <span slot="content">使用 content <u-link>slot</u-link> 更加灵活</span>
        <u-button>使用 slot</u-button>
    </u-tooltip>
    <u-button v-tooltip="'使用指令最简单'">使用指令</u-button>
</u-linear-layout>
```

### 触发方式

``` html
<u-linear-layout>
    <u-tooltip content="Tooltip" trigger="hover">
        <u-button>hover（默认）</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="click">
        <u-button>click</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="right-click">
        <u-button>right-click</u-button>
    </u-tooltip>
    <u-tooltip content="Tooltip" trigger="double-click">
        <u-button>double-click</u-button>
    </u-tooltip>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout>
    <u-button v-tooltip="'Tooltip'">hover（默认）</u-button>
    <u-button v-tooltip.click="'Tooltip'">click</u-button>
    <u-button v-tooltip.right-click="'Tooltip'">right-click</u-button>
    <u-button v-tooltip.double-click="'Tooltip'">double-click</u-button>
</u-linear-layout>
```

#### 手动触发

也可以手动触发工具提示的弹出/隐藏：

``` vue
<template>
<u-tooltip content="Tooltip" trigger="manual" :open.sync="open">
    <u-button @click="open = !open">{{ open ? '隐藏' : '弹出' }}</u-button>
</u-tooltip>
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
        <u-tooltip content="Tooltip" placement="top-start">
            <u-button>top-start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="top">
            <u-button>top</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="top-end">
            <u-button>top-end</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="left-start">
            <u-button>left-start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="left">
            <u-button>left</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="left-end">
            <u-button>left-end</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="right-start">
            <u-button>right-start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="right">
            <u-button>right</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="right-end">
            <u-button>right-end</u-button>
        </u-tooltip>
    </u-linear-layout>
    <u-linear-layout>
        <u-tooltip content="Tooltip" placement="bottom-start">
            <u-button>bottom-start</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="bottom">
            <u-button>bottom</u-button>
        </u-tooltip>
        <u-tooltip content="Tooltip" placement="bottom-end">
            <u-button>bottom-end</u-button>
        </u-tooltip>
    </u-linear-layout>
</u-linear-layout>
```

#### 指令形式

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button v-tooltip.top-start="'Tooltip'">top-start</u-button>
        <u-button v-tooltip.top="'Tooltip'">top</u-button>
        <u-button v-tooltip.top-end="'Tooltip'">top-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.left-start="'Tooltip'">left-start</u-button>
        <u-button v-tooltip.left="'Tooltip'">left</u-button>
        <u-button v-tooltip.left-end="'Tooltip'">left-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.right-start="'Tooltip'">right-start</u-button>
        <u-button v-tooltip.right="'Tooltip'">right</u-button>
        <u-button v-tooltip.right-end="'Tooltip'">right-end</u-button>
    </u-linear-layout>
    <u-linear-layout>
        <u-button v-tooltip.bottom-start="'Tooltip'">bottom-start</u-button>
        <u-button v-tooltip.bottom="'Tooltip'">bottom</u-button>
        <u-button v-tooltip.bottom-end="'Tooltip'">bottom-end</u-button>
    </u-linear-layout>
</u-linear-layout>
```

### 禁用

``` html
<u-tooltip content="Tooltip" disabled>
    <u-button disabled>disabled</u-button>
</u-tooltip>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| content | String | `'提示内容'` | 提示内容 |
| open.sync | Boolean | `false` | 弹出/隐藏状态 |
| trigger | String | `'click'` | 工具提示的触发方式。可选值：`'click'`, `'hover'`, `'right-click'`, `'double-click'`, `'manual'` |
| placement | String | `'bottom'` | 工具提示的弹出方向。可选值：`'top'`, `'bottom'`, `'left'`, `'right'`, `'top-start'`, `'top-end'`, `'bottom-start'`, `'bottom-end'`, `'left-start`',` 'left-end'`, `'right-start'`, `'right-end'` |
| disabled | Boolean | `false` | 是否禁用 |

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
