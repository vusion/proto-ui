### 数据源

当数据量不大时，可以用标签形式添加，也可以用`data`属性一次性传进来，`data`属性的格式为`Array<{ text, value }>`。

如果数据量很大时，推荐对数据进行分页，需要使用`data-source`属性。同时可以用`page-size`属性修改分页大小。

#### 前端分页

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>没有使用分页功能</p>
            <!-- 没有使用分页功能，用`data`直接传入 -->
            <u-list-view :data="data"
                style="height: 182px">
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>使用分页加载功能</p>
            <!-- `limit`表示分页大小，默认为 50，可以不传。 -->
            <u-list-view :data-source="{ data }" :page-size="50"
                style="height: 182px">
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
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

#### 一次性后端数据，前端分页

一次性加载后端数据后，可以使用`data-source`属性进行前端分页.

需要传入一个`load`方法，要求返回一个 Promise，该方法在组件初始创建时会被调用一次。

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>使用`data`属性</p>
            <u-list-view :data="data"
                style="height: 182px">
            </u-list-view>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>使用`data-source`属性</p>
            <u-list-view :data-source="{ load }" :page-size="20"
                style="height: 182px">
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
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
        setTimeout(() => this.load().then((data) => this.data = data), 500);
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

#### 后端分页

如果需要使用后端分页加载，需要在`data-source`中传入一个`load`方法。该方法会接受一个`paging`相关的参数，要求返回一个`Promise`对象。`paging`包括4个参数：

``` js
params.paging = {
    size, // 每页大小
    number, // 页数。从1开始计
    offset, // 偏移量：(number - 1) * size
    limit, // 同 size
}
```

``` vue
<template>
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <u-list-view :data-source="{ load }" remote-paging
                style="height: 182px">
            </u-list-view>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
</template>
<script>
// 模拟构造数量较多的 500 条远程数据
let remoteData = [];
for (let i = 1; i <= 500; i++)
    remoteData.push('item' + i);
remoteData = remoteData.map((text) => ({ text, value: text }));

export default {
    methods: {
        load({ paging }) {
            // 这里使用 Promise 和 setTimeout 模拟一个异步请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData.slice(paging.offset, paging.offset + paging.limit));
                }, 500);
            });
        },
    },
};
</script>
```
