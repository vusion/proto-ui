# 数字输入 NumberInput

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-number-input></u-number-input>
    <u-number-input :value="6"></u-number-input>
</u-linear-layout>
```

### 只读和禁用

``` html
<u-linear-layout>
    <u-number-input :value="6" readonly></u-number-input>
    <u-number-input :value="6" disabled></u-number-input>
</u-linear-layout>
```

### 最大值和最小值

``` html
<u-linear-layout>
    <u-number-input :value="6" :min="4" :max="12"></u-number-input>
</u-linear-layout>
```

### 间隔

``` html
<u-linear-layout>
    <u-number-input :value="6" :step="10"></u-number-input>
</u-linear-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 输入框的值 |
| min | Number | `0` | 最小值 |
| max | Number | `0` | 最大值 |
| step | Number | `0` | 间隔。`0`表示连续 |
| fixed | Number | `4` | 如果值为小数，该属性表示需要保留的位数 |
| placeholder | String | | 原生属性 |
| autofocus | Boolean | | 原生属性 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |
