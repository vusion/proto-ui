# 多选框 Checkbox

## 示例
### 基本形式

``` html
<u-checkbox>多选框</u-checkbox>
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
    <u-checkbox :value="true" readonly>只读</u-checkbox>
    <u-checkbox :value="true" disabled>禁用</u-checkbox>
</u-linear-layout>
```

### 不确定状态

``` html
<u-checkbox :value="null">不确定</u-checkbox>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean \| null | `false` | 选中状态，`null`表示不确定状态  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

####　(default)

插入文本或HTML。

### Events

#### @before-check

切换选中状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean \| null | 选中状态 |
| $event.oldValue | Boolean \| null | 旧的选中状态 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @input

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Boolean \| null | 切换后的选中状态 |

#### @check

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean \| null | 选中状态 |
| $event.oldValue | Boolean \| null | 旧的选中状态 |

#### @change

选中状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean \| null | 选中状态 |
| $event.oldValue | Boolean \| null | 旧的选中状态 |
