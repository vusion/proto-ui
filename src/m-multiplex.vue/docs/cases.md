### 基本形式

``` html
<m-multiplex>
    <m-multiplex-item>水杯</m-multiplex-item>
    <m-multiplex-item>咖啡</m-multiplex-item>
    <m-multiplex-item>坚果</m-multiplex-item>
    <m-multiplex-item>毛巾</m-multiplex-item>
    <m-multiplex-item>沙发</m-multiplex-item>
</m-multiplex>
```

### 选项值

#### 静态绑定

``` html
<m-multiplex :value="['nut', 'towel']">
    <m-multiplex-item value="cup">水杯</m-multiplex-item>
    <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
    <m-multiplex-item value="nut">坚果</m-multiplex-item>
    <m-multiplex-item value="towel">毛巾</m-multiplex-item>
    <m-multiplex-item value="sofa">沙发</m-multiplex-item>
</m-multiplex>
```

#### v-model

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
    <m-multiplex :value.sync="value">
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
        <m-multiplex value="towel" readonly>
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut">坚果</m-multiplex-item>
            <m-multiplex-item value="towel">毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex value="towel" disabled>
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut">坚果</m-multiplex-item>
            <m-multiplex-item value="towel">毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-multiplex value="towel">
            <m-multiplex-item value="cup">水杯</m-multiplex-item>
            <m-multiplex-item value="coffee">咖啡</m-multiplex-item>
            <m-multiplex-item value="nut" disabled>坚果</m-multiplex-item>
            <m-multiplex-item value="towel" disabled>毛巾</m-multiplex-item>
            <m-multiplex-item value="sofa">沙发</m-multiplex-item>
        </m-multiplex>
    </u-grid-layout-column>
</u-grid-layout>
```

#### 更新列表

``` vue
<template>
<div>
    <m-multiplex v-model="value">
        <m-multiplex-item v-for="item in list" :key="item.value" :value="item.value">{{ item.text }}</m-multiplex-item>
    </m-multiplex>
    <span>value: {{ value }}</span>
    <u-button @click="updateList">更新列表</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { value: 'cup', text: '水杯' },
                { value: 'coffee', text: '咖啡' },
                { value: 'nut', text: '坚果' },
                { value: 'towel', text: '毛巾' },
                { value: 'sofa', text: '沙发' },
            ],
            value: ['nut', 'towel', 'toothbrush'],
        };
    },
    methods: {
        updateList() {
            this.list = [
                { value: 'cup', text: '水杯' },
                { value: 'coffee', text: '咖啡' },
                { value: 'nut', text: '坚果' },
                { value: 'toothbrush', text: '牙刷' },
            ];
        },
    },
};
</script>
```
