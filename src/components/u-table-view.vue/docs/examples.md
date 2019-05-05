基础示例中展示了如何初步地在表格视图组件中配置数据、修饰样式，以及如何处理数据过多的情况。

### 基本形式

下面是表格视图组件中的基本用法。

以列的视角对数据进行配置，`title`为列的标题，`field`是数据中作为唯一识别的字段名。

列宽默认会平均分配，可以使用`width`对列宽进行适当调整，支持数值和百分比两种格式。

``` html
<u-table-view :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 表格线条

``` html
<u-table-view line="both" :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 条纹展示

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 状态

#### 加载中

``` html
<u-table-view>
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 空态

``` html
<u-table-view :data="[]">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 格式器

在表格的列组件中可以配置`formatter`属性，会自动将该列数据做一个格式化处理，类似于 Vue 的 filter。

``` html
<u-table-view :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: 675388800000 },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: 675388800000 },
    { id: 3, name: '', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: 675388800000 },
    { id: 4, name: '李华', address: '', birthday: undefined },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: 675388800000 },
]">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column formatter="placeholder | date('yyyy-MM-dd')" title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

支持简单传入一个函数：

``` vue
<template>
<u-table-view :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: 675388800000 },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: 675388800000 },
    { id: 3, name: '', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: 675388800000 },
    { id: 4, name: '李华', address: '', birthday: undefined },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: 675388800000 },
]">
    <u-table-view-column :formatter="idFormatter" title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column formatter="placeholder | date('yyyy-MM-dd')" title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    methods: {
        idFormatter(value) {
            return +value + 1;
        },
    },
};
</script>
```

### 列插槽

如果需要对数据进行更加自定义的展示，可以使用列的`cell`插槽，定制想要的格式。

这个插槽为一个作用域插槽，会传入三个参数`item`、`columnVM`和`index`。

``` html
<u-table-view :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="20%">
        <div slot="cell" slot-scope="{ item }">test {{ item.id * 10 }}</div>
    </u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 垂直数据过多

#### 表头固定

通过给`<u-table-view>`的样式设置`height`或`max-height`属性，可以限制表格高度。在数据较多的情况下，会自动固定表头。

``` html
<u-table-view striped :data="[
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
    { id: 1, name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]" style="max-height: 300px;">
    <u-table-view-column title="序号" field="id" width="20%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

### 水平内容过长

#### 默认多行显示

某些情况下，我们会遇到文字过长的问题，默认会进行多行显示。

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '这是一个很长很长很长很长很长很长很长很长的名字', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '名字就是起得这么这么这么这么这么这么长', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 单行省略显示

这时可以对列设置`ellipsis`属性，使文本单行省略，鼠标悬浮时会有工具提示。

``` html
<u-table-view line="horizontal" striped :data="[
    { id: 1, name: '这是一个很长很长很长很长很长很长很长很长的名字', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: 2, name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: 3, name: '名字就是起得这么这么这么这么这么这么长', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: 4, name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: 5, name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="序号" field="id" width="10%"></u-table-view-column>
    <u-table-view-column ellipsis title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column ellipsis title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 横向滚动

有时省略文字并不直观，可以考虑对所以列设置较长的宽度。产生横向滚动。

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

也可以对左右边缘重要的列进行固定。

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

### 隐藏部分列

``` vue
<template>
<u-linear-layout direction="vertical">
    <u-linear-layout display="block">
        <u-checkbox v-model="columnsVisible[0]">序号</u-checkbox>
        <u-checkbox v-model="columnsVisible[1]">姓名</u-checkbox>
        <u-checkbox v-model="columnsVisible[2]">省份</u-checkbox>
        <u-checkbox v-model="columnsVisible[3]">城市</u-checkbox>
        <u-checkbox v-model="columnsVisible[4]">区县</u-checkbox>
        <u-checkbox v-model="columnsVisible[5]">地址</u-checkbox>
        <u-checkbox v-model="columnsVisible[6]">出生日期</u-checkbox>
    </u-linear-layout>
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
        <u-table-view-column :hidden="!columnsVisible[0]" title="序号" field="id" width="5%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[1]" title="姓名" field="name" width="10%"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[2]" title="省份" field="province"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[3]" title="城市" field="city"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[4]" title="区县" field="district"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[5]" title="地址" field="address"></u-table-view-column>
        <u-table-view-column :hidden="!columnsVisible[6]" title="出生日期" field="birthday" width="20%"></u-table-view-column>
    </u-table-view>
</u-linear-layout>
</template>
<script>
export default {
    data() {
        return {
            columnsVisible: [true, true, false, false, true, true, true],
        };
    },
};
</script>
```

### 特殊列

UTableView 中内置了一些特殊的列，通过设置`type`来开启。

#### 序号列

添加一个`type="index"`的`<u-table-view-column>`，这个列中会显示每行的序号。设置`start-index`可以改变初始值，默认为`1`。

> 注意：这种方式只能显示当前页的序号，如果复杂的序号请使用列插槽自定义。

``` html
<u-table-view striped :data="[
    { id: '975386421', name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: '975386422', name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: '975386423', name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: '975386424', name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: '975386425', name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column type="index" title="#" width="10%"></u-table-view-column>
    <u-table-view-column title="ID" field="id" width="15%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="20%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

#### 单选列

开启`selectable`属性，可以选择行。

``` html
<u-table-view striped hover selectable :data="[
    { id: '975386421', name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
    { id: '975386422', name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
    { id: '975386423', name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
    { id: '975386424', name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
    { id: '975386425', name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
]">
    <u-table-view-column title="ID" field="id" width="15%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
```

也可以添加一个`type="radio"`的`<u-table-view-column>`，这个列中会显示单项选择框，专门用于单选操作。

通过`value-field`属性指定数据中唯一值的字段，然后`v-model`或`:value.sync`对选择值进行双向绑定。

``` vue
<template>
<u-table-view striped value-field="id" v-model="selectedValue" :data="data">
    <u-table-view-column type="radio" title="选择" width="10%"></u-table-view-column>
    <u-table-view-column title="ID" field="id" width="15%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            selectedValue: '975386422',
            data: [
                { id: '975386421', name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
                { id: '975386422', name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
                { id: '975386423', name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
                { id: '975386424', name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
                { id: '975386425', name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
            ],
        };
    },
};
</script>
```

#### 多选列

添加一个`type="checkbox"`的`<u-table-view-column>`，这个列中会显示多项选择框，用于多选操作。

控制多选有两种方式，一种是设置数据对应行的`checked`属性，该属性会与多项选择框进行双向绑定。设置`disabled`属性用于禁用多项选择框。

``` vue
<template>
<u-table-view striped :data="data">
    <u-table-view-column type="checkbox" title="选择" width="10%"></u-table-view-column>
    <u-table-view-column title="ID" field="id" width="15%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            data: [
                { id: '975386421', name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
                { id: '975386422', name: '小明', checked: true, address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
                { id: '975386423', name: '李四', checked: true, address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
                { id: '975386424', name: '李华', disabled: true, address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
                { id: '975386425', name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
            ],
        };
    },
};
</script>
```

另一种是通过`value-field`属性指定数据中唯一值的字段，再通过`:values.sync`对选择值进行双向绑定。

``` vue
<template>
<u-table-view striped value-field="id" :values="values" :data="data">
    <u-table-view-column type="checkbox" title="选择" width="10%"></u-table-view-column>
    <u-table-view-column title="ID" field="id" width="15%"></u-table-view-column>
    <u-table-view-column title="姓名" field="name" width="15%"></u-table-view-column>
    <u-table-view-column title="地址" field="address"></u-table-view-column>
    <u-table-view-column title="出生日期" field="birthday" width="20%"></u-table-view-column>
</u-table-view>
</template>
<script>
export default {
    data() {
        return {
            values: ['975386422', '975386424'],
            data: [
                { id: '975386421', name: '张三', address: '浙江省杭州市滨江区网商路599号网易大厦', birthday: '19910528' },
                { id: '975386422', name: '小明', address: '浙江省杭州市滨江区江虹路459号英飞特科技园', birthday: '19920914' },
                { id: '975386423', name: '李四', address: '浙江省杭州市滨江区秋溢路606号西可科技园', birthday: '19900228' },
                { id: '975386424', name: '李华', address: '浙江省杭州市滨江区长河路590号东忠科技园', birthday: '19891210' },
                { id: '975386425', name: '王五', address: '浙江省杭州市滨江区网商路599号网易大厦二期', birthday: '19930716' },
            ],
        };
    },
};
</script>
```
