#### 修改偏移距离

``` html
<u-linear-layout>
    <u-button>
        hover（默认）
        <u-tooltip offset="10">Tooltip</u-tooltip>
    </u-button>
    <u-button>
        hover（默认）
        <u-tooltip offset="10% 10px">Tooltip</u-tooltip>
    </u-button>
</u-linear-layout>
```

#### 更新数据

``` vue
<template>
<u-button>
    hover（默认）
    <u-tooltip @mousemove.native="onMouseMove">{{ count }}</u-tooltip>
</u-button>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onMouseMove(e) {
            this.count++;
        },
    },
};
</script>
```

#### 空值

``` html
<u-button>
    空值
    <u-tooltip></u-tooltip>
</u-button>
```
