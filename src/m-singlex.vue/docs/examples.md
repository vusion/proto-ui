### 基本用法

下面展示了单选子的一些基本特性，添加分隔线、禁用选项等。

``` html
<m-singlex>
    <m-singlex-item>水杯</m-singlex-item>
    <m-singlex-item>咖啡</m-singlex-item>
    <m-singlex-item disabled>坚果</m-singlex-item>
    <m-singlex-item>毛巾</m-singlex-item>
    <m-singlex-item>沙发</m-singlex-item>
</m-singlex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item value="cup">水杯</m-singlex-item>
        <m-singlex-item value="coffee">咖啡</m-singlex-item>
        <m-singlex-item value="nut">坚果</m-singlex-item>
        <m-singlex-item value="towel">毛巾</m-singlex-item>
        <m-singlex-item value="sofa">沙发</m-singlex-item>
    </m-singlex>
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

### 可取消

尝试在同一个选项上点击两次。

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut" disabled>坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```
