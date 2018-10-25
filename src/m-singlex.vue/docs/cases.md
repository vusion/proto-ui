### 基本形式

``` html
<m-singlex>
    <m-singlex-item>水杯</m-singlex-item>
    <m-singlex-item>咖啡</m-singlex-item>
    <m-singlex-item>坚果</m-singlex-item>
    <m-singlex-item>毛巾</m-singlex-item>
    <m-singlex-item>沙发</m-singlex-item>
</m-singlex>
```

### 选项值

#### 静态绑定

``` html
<m-singlex value="towel">
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut">坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```

#### v-model

``` vue
<template>
<div>
    <m-singlex v-model="value">
        <m-singlex-item value="cup">水杯</m-singlex-item>
        <m-singlex-item value="coffee">咖啡</m-singlex-item>
        <m-singlex-item value="nut">坚果</m-singlex-item>
        <m-singlex-item value="towel">毛巾</m-singlex-item>
        <m-singlex-item value="sofa">沙发</m-singlex-item>
    </m-singlex>
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
    <m-singlex :value.sync="value">
        <m-singlex-item value="cup">水杯</m-singlex-item>
        <m-singlex-item value="coffee">咖啡</m-singlex-item>
        <m-singlex-item value="nut">坚果</m-singlex-item>
        <m-singlex-item value="towel">毛巾</m-singlex-item>
        <m-singlex-item value="sofa">沙发</m-singlex-item>
    </m-singlex>
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
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" readonly>
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut">坚果</m-singlex-item>
            <m-singlex-item value="towel">毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel" disabled>
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut">坚果</m-singlex-item>
            <m-singlex-item value="towel">毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <m-singlex value="towel">
            <m-singlex-item value="cup">水杯</m-singlex-item>
            <m-singlex-item value="coffee">咖啡</m-singlex-item>
            <m-singlex-item value="nut" disabled>坚果</m-singlex-item>
            <m-singlex-item value="towel" disabled>毛巾</m-singlex-item>
            <m-singlex-item value="sofa">沙发</m-singlex-item>
        </m-singlex>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<m-singlex value="nut">
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut">坚果</m-singlex-item>
    <m-singlex-divider></m-singlex-divider>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <m-singlex>
                <m-singlex-group title="洗具">
                    <m-singlex-item>毛巾</m-singlex-item>
                    <m-singlex-item>牙刷</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="杯具">
                    <m-singlex-item>牙缸</m-singlex-item>
                    <m-singlex-item>水杯</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="餐具">
                    <m-singlex-item>筷子</m-singlex-item>
                    <m-singlex-item>碗</m-singlex-item>
                </m-singlex-group>
            </m-singlex>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <m-singlex collapsible>
                <m-singlex-group title="洗具">
                    <m-singlex-item>毛巾</m-singlex-item>
                    <m-singlex-item>牙刷</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="杯具" expanded disabled>
                    <m-singlex-item>牙缸</m-singlex-item>
                    <m-singlex-item>水杯</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="餐具" :collapsible="false">
                    <m-singlex-item>筷子</m-singlex-item>
                    <m-singlex-item>碗</m-singlex-item>
                </m-singlex-group>
            </m-singlex>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <m-singlex collapsible accordion value="cup">
                <m-singlex-group title="洗具">
                    <m-singlex-item value="towel">毛巾</m-singlex-item>
                    <m-singlex-item value="toothbrush">牙刷</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="杯具">
                    <m-singlex-item value="toothcup">牙缸</m-singlex-item>
                    <m-singlex-item value="cup">水杯</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="餐具">
                    <m-singlex-item value="chopsticks">筷子</m-singlex-item>
                    <m-singlex-item value="bowl">碗</m-singlex-item>
                </m-singlex-group>
            </m-singlex>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <m-singlex collapsible expand-trigger="click">
                <m-singlex-group title="洗具">
                    <m-singlex-item>毛巾</m-singlex-item>
                    <m-singlex-item>牙刷</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="杯具">
                    <m-singlex-item>牙缸</m-singlex-item>
                    <m-singlex-item>水杯</m-singlex-item>
                </m-singlex-group>
            </m-singlex>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <m-singlex collapsible expand-trigger="click-expander">
                <m-singlex-group title="洗具">
                    <m-singlex-item>毛巾</m-singlex-item>
                    <m-singlex-item>牙刷</m-singlex-item>
                </m-singlex-group>
                <m-singlex-group title="杯具">
                    <m-singlex-item>牙缸</m-singlex-item>
                    <m-singlex-item>水杯</m-singlex-item>
                </m-singlex-group>
            </m-singlex>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

### 可取消

尝试在同一个选项上点击两次。

``` html
<m-singlex value="towel" cancelable>
    <m-singlex-item value="cup">水杯</m-singlex-item>
    <m-singlex-item value="coffee" disabled>咖啡</m-singlex-item>
    <m-singlex-item value="nut">坚果</m-singlex-item>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```
