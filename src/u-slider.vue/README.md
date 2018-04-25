# 滑块 Slider

## 示例
### 基本形式

``` html
<u-slider :value="36"></u-slider>
```

### 最大值和最小值

``` html
<u-slider :value="36" :min="10" :max="50"></u-slider>
```

### 连续和间隔

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :step="0"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :step="20"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 范围

使用`range`可以进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。

``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="50" :range="[20, 85]"></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="40" :step="10" :range="[30]"></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

### 只读和禁用
``` html
<u-grid-layout>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" readonly></u-slider>
    </u-grid-layout-column>
    <u-grid-layout-column :span="6">
        <u-slider :value="36" disabled></u-slider>
    </u-grid-layout-column>
</u-grid-layout>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Number | `0` | 滑块的值 |
| min | Number | `0` | 最小值 |
| max | Number | `100` | 最大值 |
| step | Number | `1` | 间隔，表示点击按钮或按上下键所增加或减少的量。`0`表示连续 |
| precision | Number | `1` | 精度，表示数字要保留的最小单位，整数、小数均可 |
| range | Array | `[]` | 进一步对`value`限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Number | 滑块的值 |

#### @slide

拖动滑块时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 滑块的值 |
| $event.oldValue | Number | 旧的值 |
| $event.percent | Number | 滑块位置所在的百分比 |

#### @change

滑块的值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Number | 改变后的值 |
| $event.oldValue | Number | 旧的值 |
