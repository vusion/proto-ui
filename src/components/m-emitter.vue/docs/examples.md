该 Mixin 集成了一些发送事件相关的方法。继承之后直接使用方法即可。

``` vue
<template>
<div>这个例子中，该组件给上级添加了蓝色阴影。</div>
</template>
<script>
import { MEmitter } from '@@';

export default {
    mixins: [MEmitter],
    mounted() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '0 2px 10px rgb(69, 124, 208)';
        });
    },
    destroyed() {
        this.$contact('u-code-example', (codeExampleVM) => {
            codeExampleVM.$el.style.boxShadow = '';
        });
    },
};
</script>
```
