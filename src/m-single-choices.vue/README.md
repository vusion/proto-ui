# SingleChoices 单选基类

## 示例
### 基本形式

``` html
<m-single-choices>
    <m-single-choice>水杯</m-single-choice>
    <m-single-choice>坚果</m-single-choice>
    <m-single-choice>毛巾</m-single-choice>
    <m-single-choice>沙发</m-single-choice>
</m-single-choices>
```

### 选项值

``` html
<m-single-choices value="towel">
    <m-single-choice value="cup">水杯</m-single-choice>
    <m-single-choice value="nut">坚果</m-single-choice>
    <m-single-choice value="towel">毛巾</m-single-choice>
    <m-single-choice value="sofa">沙发</m-single-choice>
</m-single-choices>
```

### 只读、禁用、禁用某一项

#### Tag方式

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-single-choices value="towel" readonly>
            <m-single-choice value="cup">水杯</m-single-choice>
            <m-single-choice value="nut">坚果</m-single-choice>
            <m-single-choice value="towel">毛巾</m-single-choice>
            <m-single-choice value="sofa">沙发</m-single-choice>
        </m-single-choices>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-single-choices value="towel" disabled>
            <m-single-choice value="cup">水杯</m-single-choice>
            <m-single-choice value="nut">坚果</m-single-choice>
            <m-single-choice value="towel">毛巾</m-single-choice>
            <m-single-choice value="sofa">沙发</m-single-choice>
        </m-single-choices>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-single-choices value="towel">
            <m-single-choice value="cup">水杯</m-single-choice>
            <m-single-choice value="nut" disabled>坚果</m-single-choice>
            <m-single-choice value="towel">毛巾</m-single-choice>
            <m-single-choice value="sofa">沙发</m-single-choice>
        </m-single-choices>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<m-single-choices value="nut">
    <m-single-choice value="cup">水杯</m-single-choice>
    <m-single-choice value="toothbrush">牙刷</m-single-choice>
    <m-single-choice-divider></m-single-choice-divider>
    <m-single-choice value="nut">坚果</m-single-choice>
    <m-single-choice value="towel">毛巾</m-single-choice>
    <m-single-choice value="sofa">沙发</m-single-choice>
</m-single-choices>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <m-single-choices>
                <m-single-choice-group title="洗具">
                    <m-single-choice>毛巾</m-single-choice>
                    <m-single-choice>牙刷</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="杯具">
                    <m-single-choice>牙缸</m-single-choice>
                    <m-single-choice>水杯</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="餐具">
                    <m-single-choice>筷子</m-single-choice>
                    <m-single-choice>碗</m-single-choice>
                </m-single-choice-group>
            </m-single-choices>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <m-single-choices collapsible>
                <m-single-choice-group title="洗具">
                    <m-single-choice>毛巾</m-single-choice>
                    <m-single-choice>牙刷</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="杯具" expanded disabled>
                    <m-single-choice>牙缸</m-single-choice>
                    <m-single-choice>水杯</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="餐具" :collapsible="false">
                    <m-single-choice>筷子</m-single-choice>
                    <m-single-choice>碗</m-single-choice>
                </m-single-choice-group>
            </m-single-choices>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <m-single-choices collapsible accordion value="cup">
                <m-single-choice-group title="洗具">
                    <m-single-choice value="towel">毛巾</m-single-choice>
                    <m-single-choice value="toothbrush">牙刷</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="杯具">
                    <m-single-choice value="toothcup">牙缸</m-single-choice>
                    <m-single-choice value="cup">水杯</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="餐具">
                    <m-single-choice value="chopsticks">筷子</m-single-choice>
                    <m-single-choice value="bowl">碗</m-single-choice>
                </m-single-choice-group>
            </m-single-choices>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <m-single-choices collapsible expand-trigger="click">
                <m-single-choice-group title="洗具">
                    <m-single-choice>毛巾</m-single-choice>
                    <m-single-choice>牙刷</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="杯具">
                    <m-single-choice>牙缸</m-single-choice>
                    <m-single-choice>水杯</m-single-choice>
                </m-single-choice-group>
            </m-single-choices>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <m-single-choices collapsible expand-trigger="click-expander">
                <m-single-choice-group title="洗具">
                    <m-single-choice>毛巾</m-single-choice>
                    <m-single-choice>牙刷</m-single-choice>
                </m-single-choice-group>
                <m-single-choice-group title="杯具">
                    <m-single-choice>牙缸</m-single-choice>
                    <m-single-choice>水杯</m-single-choice>
                </m-single-choice-group>
            </m-single-choices>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 可取消

尝试在同一个选项上点击两次。

``` html
<m-single-choices value="towel" cancelable>
    <m-single-choice value="cup">水杯</m-single-choice>
    <m-single-choice value="nut">坚果</m-single-choice>
    <m-single-choice value="towel">毛巾</m-single-choice>
    <m-single-choice value="sofa">沙发</m-single-choice>
</m-single-choices>
```

## SingleChoices API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| collapsible | Boolean | `false` | 分组是否可以折叠 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<m-single-choice>`、`<m-single-choice-divider>`或`<m-single-choice-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SingleChoice | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |
| senderVM | Vue | 发送事件实例 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | SingleChoice |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<SingleChoice\> | 多选模式中，所有选中项子组件的数组 |
| senderVM | Vue | 发送事件实例 |

#### @change

选择值改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SingleChoice | 选择项子组件 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | SingleChoiceGroup | 分组组件 |
| senderVM | Vue | 发送事件实例 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## SingleChoice API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @click

点击此项时触发，与原生 click 事件不同的是，它只会在非只读和禁用的情况下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | Vue | 发送事件实例 |

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SingleChoice | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

## SingleChoiceGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |
| collapsible | Boolean |  | `false` | 是否可以折叠 |
| expanded.sync | Boolean | `false` | 展开/折叠状态 |
| disabled | Boolean | `false` | 是否禁用。禁用时无法展开/折叠 |
| senderVM | Vue | 发送事件实例 |

### Slots

#### (default)

插入`<m-single-choice>`或`<m-single-choice-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | SingleChoiceGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |
| senderVM | Vue | 发送事件实例 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | SingleChoiceGroup | 分组组件 |
| senderVM | Vue | 发送事件实例 |

## SingleChoiceDivider API

无
