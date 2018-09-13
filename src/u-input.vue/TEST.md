``` vue
<template>
<div>
    <u-input :class="$style[className]" maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
    <u-input style="background: #abc" :style="{ width }" maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
    <div><u-button @click="change">切换</u-button> {{ className }} {{ width }}</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            className: 'test',
            width: '60px',
        };
    },
    methods: {
        change() {
            this.className = this.className === 'test' ? 'test2' : 'test';
            this.width = this.width === '60px' ? '120px' : '60px';
        },
    },
};
</script>
<style module>
.test {
    width: 60px;
    background: #abc;
}

.test2 {
    width: 200px;
    background: #abc;
}
</style>
```
