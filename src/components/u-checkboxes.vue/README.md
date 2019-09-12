# UCheckboxes 多选组

<s-component-labels :labels="[
    'UI 组件', '表单控件', '块级展示',
]"></s-component-labels>

## 示例
### 基本用法

``` html
<u-checkbox>多选框</u-checkbox>
```

### 双向绑定

``` vue
<template>
<u-linear-layout>
    <u-checkbox v-model="value">{{ value }}</u-checkbox>
    <u-checkbox :value.sync="value">{{ value }}</u-checkbox>
</u-linear-layout>
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

### 多选组

``` vue
<template>
<div>
    <u-checkboxes v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
};
</script>
```

### 数量限制

使用`min`和`max`属性可以限制选择项的数量。

``` vue
<template>
<div>
    <u-checkboxes :min="1" :max="2" v-model="checkedList">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            checkedList: ['毛巾', '沙发'],
        };
    },
    methods: {
        add() {
            this.checkedList.push('水杯');
        },
    },
};
</script>
```

### 全选

``` vue
<template>
<div>
    <u-checkbox v-model="allChecked" @check="checkAll($event.value)">全选</u-checkbox>
    <u-checkboxes v-model="checkedList" @check="onCheck($event.value)">
        <u-checkbox label="水杯">水杯</u-checkbox>
        <u-checkbox label="坚果">坚果</u-checkbox>
        <u-checkbox label="毛巾">毛巾</u-checkbox>
        <u-checkbox label="沙发">沙发</u-checkbox>
    </u-checkboxes>
    {{ checkedList }}
</div>
</template>
<script>
export default {
    data() {
        return {
            allChecked: false,
            checkedList: [],
        };
    },
    methods: {
        checkAll(checked) {
            this.checkedList = checked ? ['水杯', '坚果', '毛巾', '沙发'] : [];
        },
        onCheck(value) {
            if (this.checkedList.length === 4)
                this.allChecked = true;
            else if (this.checkedList.length === 0)
                this.allChecked = false;
            else
                this.allChecked = null;
        },
    },
};
</script>
```

## UCheckboxes
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Array | `[]` | 多选组的选中项  |
| min | Number | 0 | 可以勾选多选框的最小数量  |
| max | Number | Infinity | 可以勾选多选框的最大数量  |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<checkbox>`子组件。

## UCheckbox
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Boolean, null | `false` | 选中状态，`null`表示不确定状态  |
| label | Any | | 多选框标签。用于关联多选组的值 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @before-check

切换选中状态前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean, null | 选中状态 |
| $event.oldValue | Boolean, null | 旧的选中状态 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | UCheckbox | 发送事件实例 |

#### @input

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Boolean, null | 切换后的选中状态 |
| senderVM | UCheckbox | 发送事件实例 |

#### @check

切换选中状态时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean, null | 选中状态 |
| $event.oldValue | Boolean, null | 旧的选中状态 |
| $event.label | Any | 此选框的标签 |
| senderVM | UCheckbox | 发送事件实例 |

#### @change

选中状态改变时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Boolean, null | 选中状态 |
| $event.oldValue | Boolean, null | 旧的选中状态 |
| senderVM | UCheckbox | 发送事件实例 |
