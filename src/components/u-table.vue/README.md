<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# UTable 表格

**UI 组件**, **块级展示**

对表格样式做了简单的修饰。如果需要横向滚动、固定列、分页、排序、过滤等更多功能，请使用 [UTableView](../u-table-view)。

## 示例
### 基本用法

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### 表格线条

设置`line="both"`属性，使表格单元格之间由线条隔开。

``` html
<u-table line="both">
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

也可以设置为`"horizontal"`，只显示水平线条。

``` html
<u-table line="horizontal">
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
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
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
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
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### 单行颜色

在`<tr>`上用`color`属性，可以单独给某一行添加颜色。

``` html
<u-table>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr color="light">
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="normal">
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="dark">
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="primary">
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr color="error">
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

### 组合修饰

表格组件的修饰属性可以组合使用。

``` html
<u-table line="both" striped hover>
    <thead>
        <tr>
            <th width="15%">用户名</th>
            <th width="15%">手机号码</th>
            <th>地址</th>
            <th width="18%">最近登录时间</th>
            <th width="12%">操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>张三</td>
            <td>18612917895</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦</td>
            <td>2018-05-28 21:52:11</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>小明</td>
            <td>13727160283</td>
            <td>浙江省杭州市滨江区江虹路459号英飞特科技园</td>
            <td>2019-03-12 22:24:36</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>18897127809</td>
            <td>浙江省杭州市滨江区秋溢路606号西可科技园</td>
            <td>2019-05-18 15:45:30</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>李华</td>
            <td>18749261214</td>
            <td>浙江省杭州市滨江区长河路590号东忠科技园</td>
            <td>2018-12-10 15:48:01</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
        <tr>
            <td>王五</td>
            <td>13579340020</td>
            <td>浙江省杭州市滨江区网商路599号网易大厦二期</td>
            <td>2018-07-16 01:32:06</td>
            <td><u-link>详情</u-link>&nbsp;<u-link>设置</u-link></td>
        </tr>
    </tbody>
</u-table>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| line | boolean |  | `false` | 单元格之间是否显示分隔线条 |
| striped | boolean |  | `false` | 表格行是否按斑马线条纹显示 |
| hover | boolean |  | `false` | 表格行在悬浮时是否高亮显示 |

### Slots

#### (default)

在表格中插入`<thead>`、`<tbody>`、`<tr>`、`<th>`、`<td>`标签。
