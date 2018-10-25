### 基本用法

下面展示了单选子的一些基本特性，添加分隔线、禁用选项等。

``` html
<m-singlex>
    <m-singlex-item>水杯</m-singlex-item>
    <m-singlex-item>咖啡</m-singlex-item>
    <m-singlex-item disabled>坚果</m-singlex-item>
    <m-singlex-divider></m-singlex-divider>
    <m-singlex-item>毛巾</m-singlex-item>
    <m-singlex-item>沙发</m-singlex-item>
</m-singlex>
```

### 双向绑定

可以使用`v-model`或`:value.sync`两种方式进行双向绑定。

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
    <m-singlex-item value="coffee">咖啡</m-singlex-item>
    <m-singlex-item value="nut" disabled>坚果</m-singlex-item>
    <m-singlex-divider></m-singlex-divider>
    <m-singlex-item value="towel">毛巾</m-singlex-item>
    <m-singlex-item value="sofa">沙发</m-singlex-item>
</m-singlex>
```
