# 地区选择 RegionSelect

该组件从 CascadeSelect 继承，仅填充了中国的行政区数据，其他功能与 CascadeSelect 相同。

### 基本形式

``` html
<u-linear-layout direction="vertical">
    <u-region-select></u-region-select>
    <u-region-select value="浙江,杭州,滨江区"></u-region-select>
</u-linear-layout>
```

### Placeholder

``` html
<u-region-select :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```

### 隐藏空列表

``` html
<u-region-select empty-hidden :categories="[
    { label: '省', placeholder: '请选择省份' },
    { label: '市', placeholder: '请选择城市' },
    { label: '区', placeholder: '请选择县区' },
]"></u-region-select>
```


## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | 数据 | 数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| categories | Array\<{ label, key, placeholder }\> | 数据 | 多级分类 |
| hideEmpty | Boolean | `false` | 是否隐藏空列表 |
| converter | String, Object | `'join'` | value 与 values 的转换器。可选值：`'join'`表示将 values 数组 join 之后变成 value，`'join-number'`与`join`类似，只是会考虑它为数字的情况，`'last-value'`表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象 |
| field | String | `'value'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Events

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.level | Number | 选择的层级 |
| $event.value | Any | 改变后的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | ListViewItem | 选择项子组件 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.values | Array | 改变后每项值的数组 |
| $event.oldValues | Array | 旧的每项值的数组 |
