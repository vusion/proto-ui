# 选择框 Select

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-select--0>
        <u-select--0-item>苹果</u-select--0-item>
        <u-select--0-item>香蕉</u-select--0-item>
        <u-select--0-item>蛋糕</u-select--0-item>
    </u-select--0>
    <u-select--0>
        <u-select--0-item>请选择</u-select--0-item>
        <u-select--0-item>苹果</u-select--0-item>
        <u-select--0-item>香蕉</u-select--0-item>
        <u-select--0-item>蛋糕</u-select--0-item>
    </u-select--0>
</u-linear-layout>
```

### 选择值

``` html
<u-select--0 value="banana">
    <u-select--0-item>请选择</u-select--0-item>
    <u-select--0-item value="apple">苹果</u-select--0-item>
    <u-select--0-item value="banana">香蕉</u-select--0-item>
    <u-select--0-item value="cake">蛋糕</u-select--0-item>
</u-select--0>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
    <u-select--0 value="cake" readonly>
        <u-select--0-item value="apple">苹果</u-select--0-item>
        <u-select--0-item value="banana">香蕉</u-select--0-item>
        <u-select--0-item value="cake">蛋糕</u-select--0-item>
    </u-select--0>
    <u-select--0 value="cake" disabled>
        <u-select--0-item value="apple">苹果</u-select--0-item>
        <u-select--0-item value="banana">香蕉</u-select--0-item>
        <u-select--0-item value="cake">蛋糕</u-select--0-item>
    </u-select--0>
    <u-select--0 value="cake">
        <u-select--0-item value="apple">苹果</u-select--0-item>
        <u-select--0-item value="banana" disabled>香蕉</u-select--0-item>
        <u-select--0-item value="cake">蛋糕</u-select--0-item>
    </u-select--0>
</u-linear-layout>
```

### 分隔符

``` html
<u-select--0 value="nut">
    <u-select--0-item value="cup">水杯</u-select--0-item>
    <u-select--0-item value="toothbrush">牙刷</u-select--0-item>
    <u-select--0-divider></u-select--0-divider>
    <u-select--0-item value="nut">坚果</u-select--0-item>
    <u-select--0-item value="towel">毛巾</u-select--0-item>
    <u-select--0-item value="sofa">沙发</u-select--0-item>
</u-select--0>
```

### 分组

``` html
<u-select--0>
    <u-select--0-group title="洗具">
        <u-select--0-item>毛巾</u-select--0-item>
        <u-select--0-item>牙刷</u-select--0-item>
    </u-select--0-group>
    <u-select--0-group title="杯具">
        <u-select--0-item>牙缸</u-select--0-item>
        <u-select--0-item>水杯</u-select--0-item>
    </u-select--0-group>
    <u-select--0-group title="餐具">
        <u-select--0-item>筷子</u-select--0-item>
        <u-select--0-item>碗</u-select--0-item>
    </u-select--0-group>
</u-select--0>
```

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-select--0-item>`、`<u-select--0-divider>`或`<u-select--0-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |
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
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SelectItem | 选择项子组件 |

#### @toggle

展开/收起选择框时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 展开/收起状态 |

## SelectItem API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SelectItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

## SelectGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |

### Slots

#### (default)

插入`<u-select--0-item>`或`<u-select--0-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## SelectDivider API

无
