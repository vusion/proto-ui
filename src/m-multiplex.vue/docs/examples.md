### 基本用法

下面展示了单选子的一些基本特性，添加分隔线、禁用选项等。

``` html
<m-multiplex>
    <m-multiplex-item>水杯</m-multiplex-item>
    <m-multiplex-item>咖啡</m-multiplex-item>
    <m-multiplex-item disabled>坚果</m-multiplex-item>
    <m-multiplex-item>毛巾</m-multiplex-item>
    <m-multiplex-item>沙发</m-multiplex-item>
</m-multiplex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<div>
    <m-multiplex v-model="value">
        <m-multiplex-item value="cup">水杯</m-multiplex-item>
        <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
        <m-multiplex-item value="nut">坚果</m-multiplex-item>
        <m-multiplex-item value="towel">毛巾</m-multiplex-item>
        <m-multiplex-item value="sofa">沙发</m-multiplex-item>
    </m-multiplex>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```
