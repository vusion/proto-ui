# 单选组 Radios

## 示例
### 基本形式

``` html
<u-radios value="毛巾">
    <u-radio--0 label="水杯">水杯</u-radio--0>
    <u-radio--0 label="坚果">坚果</u-radio--0>
    <u-radio--0 label="毛巾">毛巾</u-radio--0>
    <u-radio--0 label="沙发">沙发</u-radio--0>
</u-radios>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout direction="vertical">
    <u-radios value="毛巾" readonly>
        <u-radio--0 label="水杯">水杯</u-radio--0>
        <u-radio--0 label="坚果">坚果</u-radio--0>
        <u-radio--0 label="毛巾">毛巾</u-radio--0>
        <u-radio--0 label="沙发">沙发</u-radio--0>
    </u-radios>
    <u-radios value="毛巾" disabled>
        <u-radio--0 label="水杯">水杯</u-radio--0>
        <u-radio--0 label="坚果">坚果</u-radio--0>
        <u-radio--0 label="毛巾">毛巾</u-radio--0>
        <u-radio--0 label="沙发">沙发</u-radio--0>
    </u-radios>
    <u-radios value="坚果">
        <u-radio--0 label="水杯">水杯</u-radio--0>
        <u-radio--0 label="坚果">坚果</u-radio--0>
        <u-radio--0 label="毛巾" disabled>毛巾</u-radio--0>
        <u-radio--0 label="沙发" disabled>沙发</u-radio--0>
    </u-radios>
</u-linear-layout>
```

## Radios API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-radio--0>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | ListViewItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | ListViewItem |  选择项子组件 |

## Radio API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| label | Any | | 单选框标签。用于关联单选组的值 |
| readonly | Boolean | `false` | 禁用只读 |
| disabled | Boolean | `false` | 禁用此项 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.label | Any | 此项的标签 |
| $event.itemVM | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
