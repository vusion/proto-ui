### 基本形式

``` html
<m-complex>
    <m-complex-item>水杯</m-complex-item>
    <m-complex-item>咖啡</m-complex-item>
    <m-complex-item>坚果</m-complex-item>
    <m-complex-item>毛巾</m-complex-item>
    <m-complex-item>沙发</m-complex-item>
</m-complex>
```

### 选项值

#### 静态绑定

``` html
<m-complex value="towel">
    <m-complex-item value="cup">水杯</m-complex-item>
    <m-complex-item value="coffee">咖啡</m-complex-item>
    <m-complex-item value="nut">坚果</m-complex-item>
    <m-complex-item value="towel">毛巾</m-complex-item>
    <m-complex-item value="sofa">沙发</m-complex-item>
</m-complex>
```

#### v-model

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

#### value.sync

``` vue
<template>
<div>
    <m-complex :value.sync="value">
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

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" readonly>
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut">坚果</m-complex-item>
            <m-complex-item value="towel">毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel" disabled>
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut">坚果</m-complex-item>
            <m-complex-item value="towel">毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-complex value="towel">
            <m-complex-item value="cup">水杯</m-complex-item>
            <m-complex-item value="coffee">咖啡</m-complex-item>
            <m-complex-item value="nut" disabled>坚果</m-complex-item>
            <m-complex-item value="towel" disabled>毛巾</m-complex-item>
            <m-complex-item value="sofa">沙发</m-complex-item>
        </m-complex>
    </u-grid-layout-column>
</u-grid-layout>
```
