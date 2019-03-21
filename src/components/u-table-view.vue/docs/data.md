### 排序

给可以排序的列添加`sortable`属性。

``` html
<u-table-view :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

在`<u-table-view>`上用`sorting`属性来指定默认的排序顺序。

``` html
<u-table-view :sorting="{ field: 'birthday', order: 'asc' }" :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column sortable title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column sortable title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column sortable title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 过滤

### 数据源

#### 同步数据源

当数据量不大时，用`data`属性一次性传进来，`data`属性的格式为`Array<{ text, value }>`。

但如果数据量很大时，推荐使用`data-source`属性进行**前端分页**。

``` vue
<template>
<u-table-view striped :data-source="{ data, limit: 10 }">
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
