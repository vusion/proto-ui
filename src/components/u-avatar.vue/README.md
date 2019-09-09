# UAvatar

## 示例

### 图片类头像

``` vue
<template>
<div>
    <u-avatar :src="src"></u-avatar>
    <br/><br/>
    <u-avatar :src="noImage" alt="no Image"></u-avatar>
</div>
</template>
<script>
export default {
    data() {
        return {
            src: require('@/components/u-avatar.vue/avatar.png'),
            noImage: '/noImage',
        };
    },
};
</script>
```

### 字体头像

```html
<u-avatar icon="arrow-up"></u-avatar>
<br/><br/>
<u-avatar icon="arrow-up" shape="square"></u-avatar>
```

``` vue
<template>
    <div>
        <u-avatar :icon="icon" :fontSize="size/2" :size="size"></u-avatar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icon: 'arrow-up',
            size: 48,
        };
    },
};
</script>
```

### 展示 slot 内容

```html
<u-avatar>U</u-avatar>
<br/><br/>
<u-avatar  :fontSize="18" :size="44">User</u-avatar>
```

### 自定义

``` vue
<template>
    <u-avatar :class="$style.avatar" @click="clickMe()">U</u-avatar>
</template>
<script>
export default {
    methods: {
        clickMe() {
            console.log('click me');
        },
    },
};
</script>
<style module>
.avatar {
    color: red;
    cursor: pointer;
}
</style>
```

### 配合 u-badge 使用

```html
<u-badge :value="3" corner dot>
    <u-avatar :size="32">U</u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="3" corner dot>
    <u-avatar :size="32" shape="square">U</u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="120" :max="99" corner>
    <u-avatar :size="32">U</u-avatar>
</u-badge>
<br/><br/>
<u-badge :value="120" :max="99" corner>
    <u-avatar :size="32" shape="square">U</u-avatar>
</u-badge>
```

## API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | Number |  | 64 | 头像大小，单位是 `px`
| shape | String | circle | 形状，`circle`, `square` 两种类型 |
| backgroundColor | String | `#f2f3f8` | 头像背景色 |
| src | String |  | 图片类头像地址 |
| alt | String |  | 图片类头像获取失败时展示文案 |
| icon | String |  | 参考 `icon` 组件，`icon` 类型的头像 |
| fontSize | Number | `size / 2` | 用于 `icon` 类型头像以及 `slot` 的默认插入 |

### Slots

#### (default)

当既不是图片类头像、又不是 `icon` 类头像时，会展示此处内容
