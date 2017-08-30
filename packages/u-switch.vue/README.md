# 开关（Switch）

## 示例
### 基本形式

``` html
<u-switch></u-switch>
```

### Value绑定

``` vue
<template>
<u-switch v-model="value" width="wide">{{ value ? 'ON' : 'OFF' }}</u-switch>
</template>
<script>
export default {
    data() {
        return { value: false };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-switch readonly></u-switch>
    <u-switch disabled></u-switch>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean | `false` | 开关状态 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入文本或HTML |

### Events

切换开关状态时触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @input

切换开关状态后触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event | Boolean | 切换后的选中状态 |

#### @change

选中状态改变后触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event.value | Boolean | 选中状态 |
| $event.oldValue | Boolean | 旧的选中状态 |
