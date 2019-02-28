### v-repeat-click

``` vue
<template>
<div>
    <u-button v-repeat-click="onClick">Click Me!</u-button> {{ count }}
</div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onClick() {
            this.count++;
        },
    },
};
</script>
```

| Modifier | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| self | Boolean | `false` | 是否每次只会展开一个面板 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| disabled | Boolean | `false` | 是否禁用 |
