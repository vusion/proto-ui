# 表格视图 TableView

## 示例
### 基本形式

``` html
<u-table-view-2 :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19910528' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19910528' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19910528' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19910528' },
]">
    <u-table-view-column-2 title="序号" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="姓名" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="地址" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="出生日期" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### 加载中

``` html
<u-table-view-2>
    <u-table-view-column-2 title="序号" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="姓名" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="地址" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="出生日期" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

``` html
<u-table-view-2 :data="null">
    <u-table-view-column-2 title="序号" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="姓名" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="地址" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="出生日期" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### 空态

``` html
<u-table-view-2 :data="[]">
    <u-table-view-column-2 title="序号" field="id" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="姓名" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="地址" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="出生日期" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```

### Slot

``` html
<u-table-view-2 :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19910528' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19910528' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19910528' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19910528' },
]">
    <u-table-view-column-2 title="序号" field="id" width="20%">
        <div slot-scope="{ item }">test {{ item.id * 10 }}</div>
    </u-table-view-column-2>
    <u-table-view-column-2 title="姓名" field="name" width="20%"></u-table-view-column-2>
    <u-table-view-column-2 title="地址" field="address"></u-table-view-column-2>
    <u-table-view-column-2 title="出生日期" field="birthday" width="20%"></u-table-view-column-2>
</u-table-view-2>
```
