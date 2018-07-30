# Loading

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

### 填充

使用`full`属性可以填充定位父元素（offsetParent）。

``` html
<u-list-view>
    <u-list-view-item>水杯</u-list-view-item>
    <u-list-view-item>坚果</u-list-view-item>
    <u-list-view-item>毛巾</u-list-view-item>
    <u-list-view-item>沙发</u-list-view-item>
    <u-loading full>正在加载中...</u-loading>
</u-list-view>
```

如果将该属性值设置为`window`，则会填满整个浏览器。

``` vue
<template>
<div>
<u-button @click="load">加载</u-button>
<u-loading v-if="loading" full="window">正在加载中...</u-loading>
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
}
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | String | `'normal'` | 图标的大小。可选值：`'small'`, `'normal'`, `'large'` |
| full | Boolean, String | | 是否填充定位父元素或整个浏览器。可选值：`true`表示填充定位父元素（offsetParent），`'window'`表示填充整个浏览器 |

### Slots

#### (default)

插入文本或 HTML。
