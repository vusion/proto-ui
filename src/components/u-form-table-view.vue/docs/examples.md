### 基本形式

基本形式是这样的，Balabala。

``` vue
<template>
<u-form-table-view :data="list">
    <u-form-table-view-column title="URL" width="30%">
        <template #cell="{ item }">
            <u-input v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="30%">
        <template #cell="{ item }">
            <u-input v-model="item.service"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template #cell="{ item }">
            <u-input v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template #cell="{ item }">
            <u-input v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
        };
    },
};
</script>
```

### 动态表格

``` vue
<template>
<u-form-table-view :data="list" dynamic>
    <u-form-table-view-column title="URL" width="30%">
        <template #cell="{ item }">
            <u-input v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="30%">
        <template #cell="{ item }">
            <u-input v-model="item.service"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%">
        <template #cell="{ item }">
            <u-input v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template #cell="{ item }">
            <u-input v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
        };
    },
};
</script>
```

### 表单验证

``` vue
<template>
<u-form-table-view :data="list" dynamic>
    <u-form-table-view-column title="URL" width="30%"
        rules="required | pattern(/^[a-zA-Z0-9/\s]+$/)">
        <template #cell="{ item }">
            <u-input v-model="item.url"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="服务" width="30%"
        rules="required">
        <template #cell="{ item }">
            <u-input v-model="item.service"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="端口" width="20%"
        rules="required | integer | range(1,65535)">
        <template #cell="{ item }">
            <u-input v-model="item.port"></u-input>
        </template>
    </u-form-table-view-column>
    <u-form-table-view-column title="描述">
        <template #cell="{ item }">
            <u-input v-model="item.description"></u-input>
        </template>
    </u-form-table-view-column>
</u-form-table-view>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }, {
                url: 'xxx',
                service: 'abc',
                port: 8000,
                description: '',
            }],
        };
    },
};
</script>
```
