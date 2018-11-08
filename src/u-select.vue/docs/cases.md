## 单选模式

### 基本形式

``` html
<u-linear-layout>
    <u-select>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select placeholder="请选择">
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select>
        <u-select-item>请选择</u-select-item>
        <u-select-item>兼容 0.3.x</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

### 选择值

#### 静态绑定

``` html
<u-select value="banana">
    <u-select-item value="apple">苹果</u-select-item>
    <u-select-item value="banana">香蕉</u-select-item>
    <u-select-item value="cake">蛋糕</u-select-item>
</u-select>
```

#### v-model

``` vue
<template>
<div>
    <u-select v-model="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

#### value.sync

``` vue
<template>
<div>
    <u-select :value.sync="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
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

### 可清除

``` html
<u-select value="banana" clearable>
    <u-select-item value="apple">苹果</u-select-item>
    <u-select-item value="banana">香蕉</u-select-item>
    <u-select-item value="cake">蛋糕</u-select-item>
</u-select>
```

### 数据源

当数据量不大时，除了用标签形式添加，也可以用`data`属性一次性传进来，`data`属性的格式为`Array<{ text, value }>`。

但如果数据量很大时，推荐使用`data-source`属性进行“分页加载”。

``` vue
<template>
<u-linear-layout>
    <u-select :data="data">
        <u-select-item>没有使用分页功能</u-select-item>
    </u-select>
    <u-select :data-source="dataSource">
        <u-select-item>使用分页加载功能</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
import { utils } from 'library';

export default {
    data() {
        return { data: [] };
    },
    created() {
        // 构造数量较多的 1000 条数据
        let data = [];
        for (let i = 1; i <= 1000; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        // 没有使用分页功能，直接传入
        this.data = data;

        // 使用`utils.DataSource`自动分页
        this.dataSource = new utils.DataSource({
            data,
            limit: 50, // `limit`表示分页大小，默认为 50，可以不传。
        });
    },
};
</script>
```

#### 异步数据源

也可以使用异步加载数据，在`new DataSource`时，直接重写`loadMore`这个方法。该方法会传入相关的参数，并要求返回一个`Promise`对象。

有时会遇到多个`<u-select>`使用的数据相同，这时他们可以共享同一个数据源，避免重复发送请求。

``` vue
<template>
<u-linear-layout>
    <u-select :data-source="dataSource">
        <u-select-item>异步数据源</u-select-item>
    </u-select>
    <u-select :data-source="dataSource">
        <u-select-item>共享数据源</u-select-item>
    </u-select>
</u-linear-layout>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        // 构造数量较多的 1000 条数据
        let data = [];
        for (let i = 1; i <= 1000; i++)
            data.push('item' + i);
        data = data.map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            loadMore(params) {
                // 这里使用 Promise 和 setTimeout 模拟一个异步请求
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data.slice(params.offset, params.offset + params.limit));
                    }, 500);
                });
            },
        });
    },
};
</script>
```

## 多选模式

### 基本形式

``` html
<u-linear-layout>
    <u-select multiple>
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select multiple placeholder="请选择">
        <u-select-item>苹果</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
    <u-select multiple>
        <u-select-item>请选择</u-select-item>
        <u-select-item>兼容 0.3.x</u-select-item>
        <u-select-item>香蕉</u-select-item>
        <u-select-item>蛋糕</u-select-item>
    </u-select>
</u-linear-layout>
```

### 选择值

#### 静态绑定

``` html
<u-select multiple :value="['banana', 'cake']">
    <u-select-item value="apple">苹果</u-select-item>
    <u-select-item value="banana">香蕉</u-select-item>
    <u-select-item value="cake">蛋糕</u-select-item>
</u-select>
```

#### v-model

``` vue
<template>
<div>
    <u-select v-model="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

#### value.sync

``` vue
<template>
<div>
    <u-select :value.sync="value">
        <u-select-item value="cup">水杯</u-select-item>
        <u-select-item value="coffee">咖啡</u-select-item>
        <u-select-item value="nut">坚果</u-select-item>
        <u-select-item value="towel">毛巾</u-select-item>
        <u-select-item value="sofa">沙发</u-select-item>
    </u-select>
    <span>value: {{ value }}</span>
</div>
</template>
<script>
export default {
    data() {
        return {
            value: 'towel',
        };
    },
};
</script>
```

## 过滤模式

### 可过滤

``` html
<u-select filterable>
    <u-select-item value="abandon">abandon</u-select-item>
    <u-select-item value="absent">absent</u-select-item>
    <u-select-item value="bread">bread</u-select-item>
    <u-select-item value="brief">brief</u-select-item>
    <u-select-item value="calendar">calendar</u-select-item>
    <u-select-item value="cancel">cancel</u-select-item>
</u-select>
```

### 匹配方式

``` html
<u-linear-layout>
    <u-select filterable match-method="includes" placeholder="包括即可（默认）">
        <u-select-item value="abandon">abandon</u-select-item>
        <u-select-item value="absent">absent</u-select-item>
        <u-select-item value="bread">bread</u-select-item>
        <u-select-item value="brief">brief</u-select-item>
        <u-select-item value="calendar">calendar</u-select-item>
        <u-select-item value="cancel">cancel</u-select-item>
    </u-select>
    <u-select filterable match-method="startsWith" placeholder="只匹配开头">
        <u-select-item value="abandon">abandon</u-select-item>
        <u-select-item value="absent">absent</u-select-item>
        <u-select-item value="bread">bread</u-select-item>
        <u-select-item value="brief">brief</u-select-item>
        <u-select-item value="calendar">calendar</u-select-item>
        <u-select-item value="cancel">cancel</u-select-item>
    </u-select>
    <u-select filterable match-method="endsWith" placeholder="只匹配结尾">
        <u-select-item value="abandon">abandon</u-select-item>
        <u-select-item value="absent">absent</u-select-item>
        <u-select-item value="bread">bread</u-select-item>
        <u-select-item value="brief">brief</u-select-item>
        <u-select-item value="calendar">calendar</u-select-item>
        <u-select-item value="cancel">cancel</u-select-item>
    </u-select>
</u-linear-layout>
```

### 区分大小写

默认不区分大小写，可用`case-sensitive`属性开启。

``` html
<u-linear-layout>
    <u-select filterable placeholder="不区分大小写（默认）">
        <u-select-item value="abandon">abandon</u-select-item>
        <u-select-item value="Absent">Absent</u-select-item>
        <u-select-item value="ABOUT">ABOUT</u-select-item>
        <u-select-item value="bread">bread</u-select-item>
        <u-select-item value="Break">Break</u-select-item>
        <u-select-item value="BRIEF">BRIEF</u-select-item>
    </u-select>
    <u-select filterable case-sensitive placeholder="区分大小写">
        <u-select-item value="abandon">abandon</u-select-item>
        <u-select-item value="Absent">Absent</u-select-item>
        <u-select-item value="ABOUT">ABOUT</u-select-item>
        <u-select-item value="bread">bread</u-select-item>
        <u-select-item value="Break">Break</u-select-item>
        <u-select-item value="BRIEF">BRIEF</u-select-item>
    </u-select>
</u-linear-layout>
```

### 数据源

使用标签或`data`属性添加数据时，均为静态的。如果想要动态更新数据，可以设置数据源属性。数据源为`DataSource`类型或普通函数，要求返回一个`Array<{ text, value }>`格式的数组或一个`Promise`对象。

#### 同步数据源

``` vue
<template>
<u-select filterable placeholder="请输入邮箱" :data-source="fetchData"></u-select>
</template>
<script>
export default {
    methods: {
        fetchData({ filter }) {
            const prefix = filter.text.split('@')[0];
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

#### 异步数据源

``` vue
<template>
<u-select filterable placeholder="请输入地名" :data-source="dataSource"></u-select>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        const data = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'].map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            fetch({ filter }) {
                const value = filter.text.toLowerCase();
                // 这里使用 Promise 和 setTimeout 模拟一个 fetch 异步请求
                return new Promise((resolve, reject) => {
                    setTimeout((result) => {
                        resolve(data.filter((item) => item.value.toLowerCase().startsWith(value)));
                    }, 500);
                });
            },
        });
    },
};
</script>
```

#### 异步分页数据源

<!-- @TODO: 同步分页 -->

当过滤后数据量仍然很大时，可以分页加载异步数据。在`new DataSource`时，直接重写`loadMore`这个方法。该方法会传入相关的参数，并要求返回一个`Promise`对象。

``` vue
<template>
<u-select filterable placeholder="请输入 item, info 或 test" :data-source="dataSource"></u-select>
</template>
<script>
import { utils } from 'library';

export default {
    created() {
        let data = [];
        for (let i = 1; i <= 1000; i++) {
            data.push('item' + i);
            data.push('info' + i);
            data.push('detail' + i);
        }
        data = data.map((text) => ({ text, value: text }));

        this.dataSource = new utils.DataSource({
            loadMore(params) {
                const value = params.filter.text.toLowerCase();

                // 这里使用 Promise 和 setTimeout 模拟一个异步请求
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data.filter((item) => item.value.includes(value))
                            .slice(params.offset, params.offset + params.limit)
                        );
                    }, 500);
                });
            },
        });
    },
};
</script>
```
