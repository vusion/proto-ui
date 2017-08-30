# 多选按钮（Checkbox）

## 示例
### 基本形式

``` html
<u-checkbox>Checkbox</u-checkbox>
```

### Value绑定

``` vue
<template>
<u-checkbox v-model="value">{{ value }}</u-checkbox>
</template>
<script>
export default {
    data() {
        return {
            value: true,
        };
    },
};
</script>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-checkbox :value="true" readonly>Readonly</u-checkbox>
    <u-checkbox :value="true" disabled>Disabled</u-checkbox>
</u-linear-layout>
```

### 不确定状态

``` html
<u-checkbox :value="null">Indeterminate</u-checkbox>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean \| null | `false` | 选中状态，`null`表示不确定状态  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入文本或HTML |

### Events

#### @check

切换选中状态时触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event.value | Boolean \| null | 选中状态 |
| $event.oldValue | Boolean \| null | 旧的选中状态 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @input

切换选中状态后触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event | Boolean \| null | 切换后的选中状态 |

#### @change

选中状态改变后触发

| Argument | Type | Description |
| -------- | ---- | ----------- |
| $event.value | Boolean \| null | 选中状态 |
| $event.oldValue | Boolean \| null | 旧的选中状态 |
