### 数据与数据源

当数据量不大时，可以用`data`属性一次性传进来`data`属性的格式为`Array<{ [field], ... }>`，如基础示例中的例子。

当数据量较大，或需要执行后端分页、排序和过滤等操作时，推荐使用`data-source`。

### 分页

#### 前端分页

``` vue
<template>
<u-table-view striped :data-source="{ data }" :paging="{ size: 10 }">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
            { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
            { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
            { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
            { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.id = i + 1;
            item.name += '-' + (Math.random() * 20 >> 0);
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }" remote-paging>
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        total: remoteData.length,
                        data: remoteData.slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

### 排序

在`<u-table-view-column>`上给可以排序的列添加`sortable`属性，在`<u-table-view>`用`sorting`属性指定默认的排序字段和顺序。

#### 前端排序

``` vue
<template>
<u-table-view striped :data-source="{ data }" :paging="{ size: 10 }"
    :sorting="{ field: 'birthday', order: 'asc' }">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
            { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
            { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
            { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
            { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.id = i + 1;
            item.name += '-' + (Math.random() * 20 >> 0);
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端排序

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }"
    :sorting="{ field: 'birthday', order: 'asc' }">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端排序，前端分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }"
    :sorting="{ field: 'birthday', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(remoteData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端排序且分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }" remote-paging
    :sorting="{ field: 'birthday', order: 'asc' }" remote-sorting>
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging, sorting }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: remoteData.length,
                        data: remoteData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```

### 过滤

#### 前端过滤

``` vue
<template>
<u-table-view striped :data-source="{ data }" :paging="{ size: 10 }"
    :filtering="{ birthday: '19920914' }">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address">aaa</u-table-view-column>
    <u-table-view-column sortable :filters="[
        { text: '全部' },
        { text: '1992-09-14', value: '19920914' },
        { text: '1990-02-28', value: '19900228' },
        { text: '1993-07-16', value: '19930716' },
    ]" title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        const baseData = [
            { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
            { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
            { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
            { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
            { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
        ];

        // 构造数量较多的 500 条数据
        const data = [];
        for (let i = 0; i < 75; i++) {
            const item = Object.assign({}, baseData[i % 5]);
            item.id = i + 1;
            item.name += '-' + (Math.random() * 20 >> 0);
            data.push(item);
        }

        return { data };
    },
};
</script>
```

#### 一次性后端数据，前端过滤

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }"
    :sorting="{ field: 'birthday', order: 'asc' }"
    :filtering="{ birthday: '19920914' }">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable :filters="[
        { text: '全部' },
        { text: '1992-09-14', value: '19920914' },
        { text: '1990-02-28', value: '19900228' },
        { text: '1993-07-16', value: '19930716' },
    ]" title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load() {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(remoteData);
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端过滤，前端分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }"
    :sorting="{ field: 'birthday', order: 'asc' }" remote-sorting
    :filtering="{ birthday: '19920914' }" remote-filtering>
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" :filters="[
        { text: '全部' },
        { text: '1992-09-14', value: '19920914' },
        { text: '1990-02-28', value: '19900228' },
        { text: '1993-07-16', value: '19930716' },
    ]" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load({ sorting, filtering }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.birthday === filtering.birthday) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve(filteredData.sort((item1, item2) => {
                        if (item1[sorting.field] === item2[sorting.field])
                            return 0;
                        else
                            return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                    }));
                }, 400);
            });
        },
    },
};
</script>
```

#### 后端过滤、排序且分页

``` vue
<template>
<u-table-view striped :data-source="{ load }" :paging="{ size: 10 }" remote-paging
    :sorting="{ field: 'birthday', order: 'asc' }" remote-sorting
    :filtering="{ birthday: '19920914' }" remote-filtering>
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" :filters="[
        { text: '全部' },
        { text: '1992-09-14', value: '19920914' },
        { text: '1990-02-28', value: '19900228' },
        { text: '1993-07-16', value: '19930716' },
    ]" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
const baseData = [
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
];

// 构造数量较多的 500 条数据
const remoteData = [];
for (let i = 0; i < 75; i++) {
    const item = Object.assign({}, baseData[i % 5]);
    item.id = i + 1;
    item.name += '-' + (Math.random() * 20 >> 0);
    remoteData.push(item);
}

export default {
    methods: {
        load({ paging, sorting, filtering }) {
            // 这里使用 Promise 和 setTimeout 模拟一个后端请求
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const filteredData = filtering ? remoteData.filter((item) => item.birthday === filtering.birthday) : remoteData;

                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    resolve({
                        total: filteredData.length,
                        data: filteredData.sort((item1, item2) => {
                            if (item1[sorting.field] === item2[sorting.field])
                                return 0;
                            else
                                return item1[sorting.field] > item2[sorting.field] ? orderSign : -orderSign;
                        }).slice(paging.offset, paging.offset + paging.limit),
                    });
                }, 400);
            });
        },
    },
};
</script>
```
