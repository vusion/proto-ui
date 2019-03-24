### 文字过长问题

#### 默认多行显示

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '张三张三张三张三张三张三张三张三张三张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四李四李四李四李四李四李四李四李四李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 省略显示

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '张三张三张三张三张三张三张三张三张三张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四李四李四李四李四李四李四李四李四李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column ellipsis title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column ellipsis title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 列过长

#### 全部百分比

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="20%"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="20%"></u-table-view-column>
    <u-table-view-column title="区县" field="district" width="40%"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="40%"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 百分比与数字结合，横向滚动

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="30%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="200"></u-table-view-column>
    <u-table-view-column title="区县" field="district" width="200"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 固定列

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', province: '浙江省', city: '杭州市', district: '滨江区', address: '江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', province: '浙江省', city: '杭州市', district: '滨江区', address: '秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', province: '浙江省', city: '杭州市', district: '滨江区', address: '长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', province: '浙江省', city: '杭州市', district: '滨江区', address: '网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column fixed title="序号" field="id" width="5%"></u-table-view-column>
    <u-table-view-column fixed title="姓名" field="name" width="10%"></u-table-view-column>
    <u-table-view-column title="省份" field="province" width="200"></u-table-view-column>
    <u-table-view-column title="城市" field="city" width="200"></u-table-view-column>
    <u-table-view-column title="区县" field="district" width="200"></u-table-view-column>
    <u-table-view-column title="地址" field="address" width="400"></u-table-view-column>
    <u-table-view-column fixed title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

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
