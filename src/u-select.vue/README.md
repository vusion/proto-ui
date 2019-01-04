# 选择框 Select

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>请选择</u-select-item>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

### 选择值

``` html
<u-select value="banana">
    <u-select-item>请选择</u-select-item>
    <u-select-item value="apple">苹果</u-select-item>
    <u-select-item value="banana">香蕉</u-select-item>
    <u-select-item value="cake">蛋糕</u-select-item>
</u-select>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
    <u-select value="cake" readonly>
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana">香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
    <u-select value="cake" disabled>
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana">香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
    <u-select value="cake">
        <u-select-item value="apple">苹果</u-select-item>
        <u-select-item value="banana" disabled>香蕉</u-select-item>
        <u-select-item value="cake">蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

### 分隔符

``` html
<u-select value="nut">
    <u-select-item value="cup">水杯</u-select-item>
    <u-select-item value="toothbrush">牙刷</u-select-item>
    <u-select-divider></u-select-divider>
    <u-select-item value="nut">坚果</u-select-item>
    <u-select-item value="towel">毛巾</u-select-item>
    <u-select-item value="sofa">沙发</u-select-item>
</u-select>
```

### 分组

``` html
<u-select>
    <u-select-group title="洗具">
        <u-select-item>毛巾</u-select-item>
        <u-select-item>牙刷</u-select-item>
    </u-select-group>
    <u-select-group title="杯具">
        <u-select-item>牙缸</u-select-item>
        <u-select-item>水杯</u-select-item>
    </u-select-group>
    <u-select-group title="餐具">
        <u-select-item>筷子</u-select-item>
        <u-select-item>碗</u-select-item>
    </u-select-group>
</u-select>
```

### 数据源

当数据量不大时，除了用标签形式添加，也可以用`data`属性一次性传进来，`data`属性的格式为`Array<{ text, value }>`。

但如果数据量很大时，推荐使用`data-source`属性进行“前端分页”。

``` vue
<template>
<u-linear-layout>
    <!-- 没有使用分页功能，用`data`直接传入 -->
    <u-select :data="data">
        <u-select-item>没有使用分页功能</u-select-item>
    </u-select>
    <!-- `limit`表示分页大小，默认为 50，可以不传。 -->
    <u-select :data-source="{ data, limit: 50 }">
        <u-select-item>使用分页加载功能</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        // 构造数量较多的 500 条数据
        let data = [];
        for (let i = 1; i <= 500; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        return { data };
    },
};
</script>
```

#### 异步一次性数据源

如果要使用异步加载数据，一种方法是将请求后的数据直接传入`data`属性。另一种方法是给`data-source`传入一个方法，要求返回一个`Promise`对象，该方法在组件初始创建时会被调用一次。

``` vue
<template>
<u-linear-layout>
    <u-select :data="data">
        <u-select-item>使用`data`属性</u-select-item>
    </u-select>
    <u-select :data-source="load">
        <u-select-item>使用`data-source`属性</u-select-item>
    </u-select>
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

#### 异步分页数据源（后端分页）

如果要使用异步分页加载，需要给`data-source`传入一个对象，包含`loadMore`方法。该方法会接受一些相关的参数，要求返回一个`Promise`对象。

<!-- 有时会遇到多个`<u-select>`使用的数据相同，这时他们可以共享同一个数据源，避免重复发送请求。 -->

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="{ loadMore }">
        <u-select-item>异步数据源</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
// 模拟构造数量较多的 500 条远程数据
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        loadMore(params) {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.slice(params.offset, params.offset + params.limit));
                }, 500);
            });
        },
    },
};
</script>
```

## Select API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'text'` | 显示文本字段 |
| data | Array\<{ text, value }\> | | Data书写方式中的数据列表 |
| data-source | DataSource, Function, Object | | 多功能数据源 |
| loading-text | String | `'加载中...'` | 加载中的文字。使用异步数据源时才会出现 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-select-item>`、`<u-select-divider>`或`<u-select-group>`子组件。

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

插入`<u-select-item>`或`<u-select-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

## SelectDivider API

无
