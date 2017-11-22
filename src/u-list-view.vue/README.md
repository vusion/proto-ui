# 列表视图（ListView）

## 示例
### 基本形式

有两种书写方式，这里推荐使用Tag方式，使用起来更加灵活。

#### Tag方式

``` html
<u-list-view>
    <u-list-view-item>水杯</u-list-view-item>
    <u-list-view-item>坚果</u-list-view-item>
    <u-list-view-item>毛巾</u-list-view-item>
    <u-list-view-item>沙发</u-list-view-item>
</u-list-view>
```

#### Data方式

``` html
<u-list-view :data="[
    { text: '水杯' },
    { text: '坚果' },
    { text: '毛巾' },
    { text: '沙发' },
]"></u-list-view>
```

### 选项值

#### Tag方式

``` html
<u-list-view value="towel">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

#### Data方式

``` html
<u-list-view value="towel" :data="[
    { text: '水杯', value: 'cup' },
    { text: '坚果', value: 'nut' },
    { text: '毛巾', value: 'towel' },
    { text: '沙发', value: 'sofa' },
]"></u-list-view>
```

### 只读、禁用、禁用某一项

#### Tag方式

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" readonly>
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut">坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" disabled>
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut">坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel">
            <u-list-view-item value="cup">水杯</u-list-view-item>
            <u-list-view-item value="nut" disabled>坚果</u-list-view-item>
            <u-list-view-item value="towel">毛巾</u-list-view-item>
            <u-list-view-item value="sofa">沙发</u-list-view-item>
        </u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
```

#### Data方式

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4" readonly>
        <u-list-view value="towel" :data="[
            { text: '水杯', value: 'cup' },
            { text: '坚果', value: 'nut' },
            { text: '毛巾', value: 'towel' },
            { text: '沙发', value: 'sofa' },
        ]"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4" disabled>
        <u-list-view value="towel" :data="[
            { text: '水杯', value: 'cup' },
            { text: '坚果', value: 'nut' },
            { text: '毛巾', value: 'towel' },
            { text: '沙发', value: 'sofa' },
        ]"></u-list-view>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-list-view value="towel" :data="[
            { text: '水杯', value: 'cup' },
            { text: '坚果', value: 'nut', disabled: true },
            { text: '毛巾', value: 'towel' },
            { text: '沙发', value: 'sofa' },
        ]"></u-list-view>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-list-view value="nut">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="cup">牙刷</u-list-view-item>
    <u-list-view-divider></u-list-view-divider>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

#### Data方式

暂不支持。

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无展开/收起功能</p>
            <u-list-view>
                <u-list-view-group text="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="餐具">
                    <u-list-view-item>筷子</u-list-view-item>
                    <u-list-view-item>碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启展开/收起功能</p>
            <u-list-view collapsible>
                <u-list-view-group text="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="杯具" expanded>
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="餐具" :collapsible="false">
                    <u-list-view-item>筷子</u-list-view-item>
                    <u-list-view-item>碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-list-view collapsible accordion value="cup">
                <u-list-view-group text="洗具">
                    <u-list-view-item value="towel">毛巾</u-list-view-item>
                    <u-list-view-item value="toothbrush">牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="杯具">
                    <u-list-view-item value="toothcup">牙缸</u-list-view-item>
                    <u-list-view-item value="cup">水杯</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="餐具">
                    <u-list-view-item value="chopsticks">筷子</u-list-view-item>
                    <u-list-view-item value="bowl">碗</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：热区为整体</p>
            <u-list-view collapsible expand-trigger="click">
                <u-list-view-group text="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：热区仅为小箭头</p>
            <u-list-view collapsible expand-trigger="click-expander">
                <u-list-view-group text="洗具">
                    <u-list-view-item>毛巾</u-list-view-item>
                    <u-list-view-item>牙刷</u-list-view-item>
                </u-list-view-group>
                <u-list-view-group text="杯具">
                    <u-list-view-item>牙缸</u-list-view-item>
                    <u-list-view-item>水杯</u-list-view-item>
                </u-list-view-group>
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

#### Data方式

暂不支持。

### 可取消

尝试在同一个选项上点击两次。

``` html
<u-list-view value="towel" cancelable>
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
```

### 多项

``` vue
<template>
<u-list-view multiple v-model="value">
    <u-list-view-item value="cup">水杯</u-list-view-item>
    <u-list-view-item value="nut">坚果</u-list-view-item>
    <u-list-view-item value="towel">毛巾</u-list-view-item>
    <u-list-view-item value="sofa">沙发</u-list-view-item>
</u-list-view>
<p>value: {{ value }}</p>
</template>

<script>
export default {
    data() {
        return { value: ['nut', 'towel'] };
    },
};
</script>
```

## ListView API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| multiple | Boolean | `false` | 是否可以多选 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入`<u-list-view-item>`子组件 |

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
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
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | ListViewItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<ListViewItem\> | 多选模式中，所有选中项子组件的数组 |

## ListViewItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 插入文本或HTML |

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | ListViewItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

## ListViewGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| text | String |  | 显示的文本 |
| expanded | Boolean | `false` | 是否展开 |

## ListViewDivider API

无
