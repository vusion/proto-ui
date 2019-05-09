# ULoading 加载中

## 示例
### 基本形式

``` html
<u-loading></u-loading>
```

### 添加文字

``` html
<u-loading>正在加载中...</u-loading>
```

### 大小扩展

``` html
<u-linear-layout direction="vertical">
    <div><u-loading size="small">正在加载中...</u-loading></div>
    <div><u-loading>正在加载中...</u-loading></div>
    <div><u-loading size="large">正在加载中...</u-loading></div>
</u-linear-layout>
```

### 展示方式

#### 行内展示

``` html
<u-loading size="small" display="inline"></u-loading> 默认在行内...
```

#### 块级展示

``` html
<u-loading>正在加载中...</u-loading>
```

#### 填充父元素

将`display`属性设置为`full`，可以填充定位父元素（offsetParent）。

``` html
<u-list-view>
    <u-list-view-item>水杯</u-list-view-item>
    <u-list-view-item>坚果</u-list-view-item>
    <u-list-view-item>毛巾</u-list-view-item>
    <u-list-view-item>沙发</u-list-view-item>
    <u-loading display="full">正在加载中...</u-loading>
</u-list-view>
```

#### 填充全窗口

将`display`属性设置为`fullWindow`，则会填满整个浏览器。

``` vue
<template>
<div>
<u-button @click="load">加载</u-button>
<u-loading v-if="loading" display="fullWindow">正在加载中...</u-loading>
</div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => this.loading = false, 2000);
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | String | `'normal'` | 图标的大小。可选值：`'small'`, `'normal'`, `'large'` |
| display | String | `'inline'` | 展示方式。可选值：`'inline'`表示按行内展示，`'block'`表示按块级展示，`'full'`表示填充定位父元素（offsetParent），`'fullWindow'`表示填充整个浏览器 |

### Slots

#### (default)

插入文本或 HTML。
