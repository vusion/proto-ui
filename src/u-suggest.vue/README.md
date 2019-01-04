# 自动提示 Suggest

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-suggest placeholder="输入时会自动提示">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
    <u-suggest value="bread">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
    <u-suggest value="蛋糕" readonly>
        <u-suggest-item value="苹果">苹果</u-suggest-item>
        <u-suggest-item value="香蕉">香蕉</u-suggest-item>
        <u-suggest-item value="蛋糕">蛋糕</u-suggest-item>
    </u-suggest>
    <u-suggest value="蛋糕" disabled>
        <u-suggest-item value="苹果">苹果</u-suggest-item>
        <u-suggest-item value="香蕉">香蕉</u-suggest-item>
        <u-suggest-item value="蛋糕">蛋糕</u-suggest-item>
    </u-suggest>
    <u-suggest value="蛋糕">
        <u-suggest-item value="苹果">苹果</u-suggest-item>
        <u-suggest-item value="香蕉" disabled>香蕉</u-suggest-item>
        <u-suggest-item value="蛋糕">蛋糕</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### 匹配方式

``` html
<u-linear-layout>
    <u-suggest match-method="includes" placeholder="包括即可（默认）">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
    <u-suggest match-method="startsWith" placeholder="只匹配开头">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
    <u-suggest match-method="endsWith" placeholder="只匹配结尾">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` html
<u-linear-layout>
    <u-suggest placeholder="区分大小写">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="Absent">Absent</u-suggest-item>
        <u-suggest-item value="ABOUT">ABOUT</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="Break">Break</u-suggest-item>
        <u-suggest-item value="BRIEF">BRIEF</u-suggest-item>
    </u-suggest>
    <u-suggest case-sensitive placeholder="不区分大小写">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="Absent">Absent</u-suggest-item>
        <u-suggest-item value="ABOUT">ABOUT</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="Break">Break</u-suggest-item>
        <u-suggest-item value="BRIEF">BRIEF</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### 严格模式

严格模式下，输入框中的值必须与某一个选项中的值完全匹配。

``` html
<u-linear-layout>
    <u-suggest placeholder="非严格模式">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
    <u-suggest strict placeholder="严格模式">
        <u-suggest-item value="abandon">abandon</u-suggest-item>
        <u-suggest-item value="absent">absent</u-suggest-item>
        <u-suggest-item value="bread">bread</u-suggest-item>
        <u-suggest-item value="brief">brief</u-suggest-item>
        <u-suggest-item value="calendar">calendar</u-suggest-item>
        <u-suggest-item value="cancel">cancel</u-suggest-item>
    </u-suggest>
</u-linear-layout>
```

### 数据源

使用标签或`data`属性添加数据时，均为静态的。如果想要动态更新数据，可以设置数据源属性。数据源为`DataSource`类型或普通函数，要求返回一个`Array<{ text, value }>`格式的数组或一个`Promise`对象。

#### 同步数据源

``` vue
<template>
<u-suggest placeholder="请输入邮箱" :data-source="load"></u-suggest>
</template>
<script>
export default {
    methods: {
        load({ filter }) {
            const prefix = filter.value.split('@')[0];
            if (!prefix)
                return [];
            else {
                return ['163.com', '126.com', 'vip.163.com', 'vip.126.com'].map((suffix) => {
                    const text = `${prefix}@${suffix}`;
                    return { text, value: text };
                });
            }
        },
    },
};
</script>
```

#### 异步一次性数据源（前端过滤）

如果要使用异步加载数据，只需将请求后的数据直接传入`data`属性。

<!-- 另一种方法是给`data-source`传入一个方法，要求返回一个`Promise`对象，该方法在组件初始创建时会被调用一次。 -->

``` vue
<template>
<u-linear-layout>
    <u-suggest :data="data" placeholder="使用`data`属性"></u-suggest>
</u-linear-layout>
</template>
<script>
// 模拟构造远程数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    data() {
        return {
            data: [],
        };
    },
    created() {
        // 使用`data`属性
        this.load().then((data) => this.data = data);
    },
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 500);
            });
        },
    },
};
</script>
```

#### 异步过滤数据源（后端过滤）

如果要使用异步过滤数据，需要给`data-source`传入一个方法，要求返回一个`Promise`对象，该方法在组件初始创建时会被调用一次。

``` vue
<template>
<u-linear-layout>
    <u-suggest :data-source="load" placeholder="使用`data-source`属性"></u-suggest>
</u-linear-layout>
</template>
<script>
// 模拟构造远程数据
const remoteData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

export default {
    methods: {
        load(params) {
            const value = params.filter.value.toLowerCase();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.toLowerCase().startsWith(value)));
                }, 500);
            });
        },
    },
};
</script>
```

#### 异步分页数据源（后端过滤 + 分页）

<!-- @TODO: 同步分页 -->

当过滤后数据量仍然很大时，推荐异步分页加载数据。在`new DataSource`时，直接重写`loadMore`这个方法。该方法会传入相关的参数，并要求返回一个`Promise`对象。

``` vue
<template>
<u-suggest placeholder="请输入 item, info 或 test" :data-source="{ loadMore }"></u-suggest>
</template>
<script>
// 模拟构造数量较多的 500 条远程数据
let remoteData = [];
for (let i = 1; i <= 500; i++) {
    remoteData.push('item' + i);
    remoteData.push('info' + i);
    remoteData.push('detail' + i);
}
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        loadMore(params) {
            const value = params.filter.value.toLowerCase();

            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.filter((item) => item.value.includes(value))
                        .slice(params.offset, params.offset + params.limit)
                    );
                }, 500);
            });
        },
    },
};
</script>
```

## Suggest API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| data-source | DataSource, Function, Object | | 多功能数据源 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| match-method | String, Function | `'includes'` | 匹配方式。可选值：`includes`表示包含即可，`startsWith`表示只匹配开头，`endsWith`表示只匹配结尾。也可以传一个方法 |
| case-sensitive | Boolean | `false` | 是否区分大小写，默认不区分大小写 |
| strict | Boolean | `false` | 是否为严格模式。当为严格模式时，`value`属性必须为一个选项的值，或者为空 |

### Slots

#### (default)

插入`<u-suggest-item>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SuggestItem | 选择项子组件 |
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
| $event.itemVM | SuggestItem | 选择项子组件 |

#### @toggle

展开/收起选择框时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.open | Boolean | 展开/收起状态 |

## SuggestItem API
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
