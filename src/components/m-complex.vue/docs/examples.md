### 基本用法

下面展示了单选子的一些基本特性，添加分隔线、禁用选项等。

``` html
<m-complex>
    <m-complex-item>水杯</m-complex-item>
    <m-complex-item>咖啡</m-complex-item>
    <m-complex-item disabled>坚果</m-complex-item>
    <m-complex-item>毛巾</m-complex-item>
    <m-complex-item>沙发</m-complex-item>
</m-complex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<div>
    <m-complex v-model="value">
        <m-complex-item value="cup">水杯</m-complex-item>
        <m-complex-item value="coffee">咖啡</m-complex-item>
        <m-complex-item value="nut">坚果</m-complex-item>
        <m-complex-item value="towel">毛巾</m-complex-item>
        <m-complex-item value="sofa">沙发</m-complex-item>
    </m-complex>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: ['nut', 'towel'],
        };
    },
};
</script>
```
