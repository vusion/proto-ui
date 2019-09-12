# USwitch 开关

## 示例
### 基本用法

``` html
<u-switch></u-switch>
```

### Value 绑定

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
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Boolean | `false` | 开关状态 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |

### Events

#### @before-toggle

切换开关状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | USwitch | 发送事件实例 |

#### @input

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Boolean | 切换后的开关状态 |
| senderVM | USwitch | 发送事件实例 |

#### @on

开关打开时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 无 |
| senderVM | USwitch | 发送事件实例 |

#### @off

开关关闭时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | | 无 |
| senderVM | USwitch | 发送事件实例 |

#### @toggle

切换开关状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
| senderVM | USwitch | 发送事件实例 |

#### @change

开关状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean | 开关状态 |
| $event.oldValue | Boolean | 旧的开关状态 |
| senderVM | USwitch | 发送事件实例 |
