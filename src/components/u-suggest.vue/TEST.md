# text vs value

``` html
<u-suggest value="b">
    <u-suggest-item value="a">苹果</u-suggest-item>
    <u-suggest-item value="b">香蕉</u-suggest-item>
    <u-suggest-item value="c">蛋糕</u-suggest-item>
</u-suggest>
<u-suggest value="b" strict>
    <u-suggest-item value="a">苹果</u-suggest-item>
    <u-suggest-item value="b">香蕉</u-suggest-item>
    <u-suggest-item value="c">蛋糕</u-suggest-item>
</u-suggest>
```

``` vue
<template>
<div>
    <u-suggest v-model="value" placeholder="输入时会自动提示">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
    <u-button @click="change">Change</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'aba',
        };
    },
    methods: {
        change() {
            this.value = 'testaaa';
        },
    },
};
</script>
```
