# 树型视图（TreeView）

## 示例
### 基本形式

有两种书写方式，这里推荐使用Data方式，因为树型结构的数据有时非常多。

#### Tag方式

``` html
<u-tree-view>
    <u-tree-view-node text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2">
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2"></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data方式

``` html
<u-tree-view :data="[
    { text: '节点1', children: [
        { text: '节点1.1' },
        { text: '节点1.2', children: [
            { text: '节点1.2.1' },
            { text: '节点1.2.2' },
        ] },
        { text: '节点1.3' },
        { text: '节点1.4' },
    ] },
    { text: '节点2' },
    { text: '节点3', children: [
        { text: '节点3.1' },
        { text: '节点3.2' },
    ] },
]"></u-tree-view>
```

### 选项值

#### Tag方式

``` html
<u-tree-view value="1.2">
    <u-tree-view-node text="节点1" value="1">
        <u-tree-view-node text="节点1.1" value="1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2" value="1.2">
            <u-tree-view-node text="节点1.2.1" value="1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2" value="1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3" value="1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4" value="1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2" value="2"></u-tree-view-node>
    <u-tree-view-node text="节点3" value="3">
        <u-tree-view-node text="节点3.1" value="3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2" value="3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data方式

``` html
<u-tree-view value="1.2" :data="[
    { text: '节点1', value: '1', children: [
        { text: '节点1.1', value: '1.1' },
        { text: '节点1.2', value: '1.2', children: [
            { text: '节点1.2.1', value: '1.2.1' },
            { text: '节点1.2.2', value: '1.2.2' },
        ] },
        { text: '节点1.3', value: '1.3' },
        { text: '节点1.4', value: '1.4' },
    ] },
    { text: '节点2', value: '2' },
    { text: '节点3', value: '3', children: [
        { text: '节点3.1', value: '3.1' },
        { text: '节点3.2', value: '3.2' },
    ] },
]"></u-tree-view>
```

### 只读、禁用、禁用某一项

#### Tag方式

``` html
<u-tree-view readonly>
    <u-tree-view-node text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2">
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2"></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
<u-tree-view disabled>
    <u-tree-view-node text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2">
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2"></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
<u-tree-view>
    <u-tree-view-node text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2" disabled>
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3" disabled></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2" disabled></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

#### Data方式

``` html
<u-tree-view :data="[
    { text: '节点1', children: [
        { text: '节点1.1' },
        { text: '节点1.2', disabled: true, children: [
            { text: '节点1.2.1' },
            { text: '节点1.2.2'}
        ] },
        { text: '节点1.3', disabled: true  },
        { text: '节点1.4' },
    ] },
    { text: '节点2', disabled: true  },
    { text: '节点3', children: [
        { text: '节点3.1' },
        { text: '节点3.2'}
    ]}
]"></u-tree-view>
```

### 可取消

``` html
<u-tree-view cancelable>
    <u-tree-view-node text="节点1">
        <u-tree-view-node text="节点1.1"></u-tree-view-node>
        <u-tree-view-node text="节点1.2">
            <u-tree-view-node text="节点1.2.1"></u-tree-view-node>
            <u-tree-view-node text="节点1.2.2"></u-tree-view-node>
        </u-tree-view-node>
        <u-tree-view-node text="节点1.3"></u-tree-view-node>
        <u-tree-view-node text="节点1.4"></u-tree-view-node>
    </u-tree-view-node>
    <u-tree-view-node text="节点2"></u-tree-view-node>
    <u-tree-view-node text="节点3">
        <u-tree-view-node text="节点3.1"></u-tree-view-node>
        <u-tree-view-node text="节点3.2"></u-tree-view-node>
    </u-tree-view-node>
</u-tree-view>
```

### 多选

``` vue
<template>
<u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
<p>{{ data }}</p>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点1', expanded: true, checked: false, children: [
                    { text: '节点1.1', expanded: false, checked: false },
                    { text: '节点1.2', expanded: true, checked: false, children: [
                        { text: '节点1.2.1', expanded: false, checked: false },
                        { text: '节点1.2.2', expanded: false, checked: false }
                    ] },
                    { text: '节点1.3', expanded: false, checked: false },
                    { text: '节点1.4', expanded: false, checked: false },
                ] },
                { text: '节点2', expanded: false, checked: false },
                { text: '节点3', expanded: false, checked: false },
            ],
        };
    },
};
</script>
```

## 案例

### 多选

``` vue
<template>
<u-tree-view ref="treeView" checkable :data="data"></u-tree-view>
<u-button @click="checkAll(true)">全部选中</u-button>
<u-button @click="checkAll(false)">全部取消</u-button>
<u-button @click="toggleAll(true)">全部展开</u-button>
<u-button @click="toggleAll(false)">全部取消</u-button>
<p>{{ data }}</p>
</template>

<script>
export default {
    data() {
        return {
            data: [
                { text: '节点1', expanded: true, checked: false, children: [
                    { text: '节点1.1', expanded: false, checked: false },
                    { text: '节点1.2', expanded: true, checked: false, children: [
                        { text: '节点1.2.1', expanded: false, checked: false },
                        { text: '节点1.2.2', expanded: false, checked: false }
                    ] },
                    { text: '节点1.3', expanded: false, checked: false },
                    { text: '节点1.4', expanded: false, checked: false },
                ] },
                { text: '节点2', expanded: false, checked: false },
                { text: '节点3', expanded: false, checked: false },
            ],
        };
    },
    methods: {
        checkAll(checked) {
            this.$refs.treeView.checkAll(checked);
        },
        toggleAll(expanded) {
            this.$refs.treeView.toggleAll(expanded);
        }
    },
};
</script>
```

## TreeView API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| cancelable | Boolean | `false` | 是否可以取消选择 |
| checkable | Boolean | `false` | 是否可以选中/取消 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入`<u-tree-view-node>`子组件 |

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.node | Object | 选择项相关对象 |
| $event.$node | TreeViewNode | 选择项子组件 |
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
| $event.node | Object | 选择项相关对象 |
| $event.$node | TreeViewNode |  选择项子组件 |

#### @toggle

展开/收起某节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/收起状态 |
| $event.oldExpanded | Boolean | 旧的展开/收起状态 |
| $event.node | Object | 节点相关对象 |
| $event.$node | TreeViewNode | 节点组件 |

#### @check

选中/取消节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | 选中/取消状态 |
| $event.oldChecked | Boolean | 旧的选中/取消状态 |
| $event.node | Object | 节点相关对象 |
| $event.$node | TreeViewNode | 节点组件 |

### Methods

#### toggleAll(expanded)

展开/收起所有节点

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/收起 |

#### checkAll(checked)

选中/取消所有节点

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 选中/取消 |

## TreeViewNode API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| expanded.sync | Any | | 展开/收起状态 |
| checked.sync | Any | | 选中/取消状态 |
| disabled | Boolean | `false` | 禁用此项 |
| node | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | 在插槽中插入文本或HTML |

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.node | Object | 此项的相关对象 |
| $event.$node | TreeViewNode | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @before-toggle

展开/收起此节点前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/收起状态 |
| $event.oldExpanded | Boolean | 旧的展开/收起状态 |
| $event.node | Object | 节点相关对象 |
| $event.$node | TreeViewNode | 节点组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @toggle

展开/收起某节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/收起状态 |
| $event.oldExpanded | Boolean | 旧的展开/收起状态 |
| $event.node | Object | 节点相关对象 |
| $event.$node | TreeViewNode | 节点组件 |

#### @check

选中节点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.checked | Boolean | 选中状态 |
| $event.oldChecked | Boolean | 旧的选中状态 |
| $event.node | Object | 节点相关对象 |
| $event.$node | TreeViewNode | 节点组件 |
