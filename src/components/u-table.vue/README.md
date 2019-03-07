# 表格 Table

对表格样式做了简单的修饰。如果需要更多功能，请使用 [TableView](./u-table-view)。

## 示例
### 基本形式

``` html
<u-table>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 条纹展示

添加`striped`属性，使表格具有斑马线条纹样式。

``` html
<u-table striped>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 悬浮高亮

添加`hover`属性，使表格行在悬浮时能够高亮显示。

``` html
<u-table hover>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

### 组合修饰

表格组件的修饰属性可以组合使用。

``` html
<u-table striped hover>
    <thead>
        <tr>
            <th width="20%">序号</th>
            <th width="20%">姓名</th>
            <th>地址</th>
            <th width="20%">出生日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>1991-05-28</td>
        </tr>
        <tr>
            <td>2</td>
            <td>小明</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>1992-09-14</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李四</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>1990-02-28</td>
        </tr>
        <tr>
            <td>4</td>
            <td>李华</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>1989-12-10</td>
        </tr>
        <tr>
            <td>5</td>
            <td>王五</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>1993-07-16</td>
        </tr>
    </tbody>
</u-table>
```

## Table API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| striped | Boolean | `false` | 表格是否按斑马线条纹样式显示 |
| hover | Boolean | `false` | 表格行在悬浮时是否高亮显示 |

### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。

