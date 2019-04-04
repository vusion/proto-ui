# UDrawer 抽屉

## 示例
### 基本形式

``` vue
<template>
<div>
    <u-drawer :visible.sync="visible" title="标题">
        <u-sidebar slot="drawer">
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-linear-layout>
        <u-button @click="visible = true">Drawer</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
};
</script>
```

### 位置

``` vue
<template>
<div>
    <u-drawer :visible.sync="leftVisible" title="标题">
        <u-sidebar slot="drawer">
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-drawer placement="right" :visible.sync="rightVisible" title="标题">
        <u-sidebar slot="drawer">
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-drawer>
    <u-linear-layout>
        <u-button @click="leftVisible = true">Left</u-button>
        <u-button @click="rightVisible = true">Right</u-button>
    </u-linear-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            leftVisible: false,
            rightVisible: false,
        };
    },
};
</script>
```

## API
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| visible.sync | Boolean | `false` | 是否显示 |
| title | String | `'提示'` | 抽屉的标题 |
| okButton | String | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancelButton | String | `'取消'` | 取消按钮文本，如果为空则不显示 |
| size | String | `'normal'` | 抽屉的尺寸。可选值：`'small'`, `'normal'`, `'large'` |
| static | Boolean | `false` | 是否嵌入页面显示 |
| maskClosable | Boolean | `false` | 是否点击遮罩时关闭抽屉 |

### Slots

| Slot | Description |
| ---- | ----------- |
| title | 抽屉标题自定义 |
| head | 抽屉头部自定义 |
| foot | 抽屉尾部自定义 |
| (default) | 抽屉内容自定义 |

### Events

#### @open

打开抽屉时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @ok

确定时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @cancel

取消时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UDrawer | 发送事件实例 |

#### @before-close

关闭抽屉前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | Boolean | 是否确定 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UDrawer | 发送事件实例 |

#### @close
关闭抽屉时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| ok | Boolean | 是否确定 |
| senderVM | UDrawer | 发送事件实例 |

### Static Methods

#### alert(content, title)

打开只有确定按钮的抽屉

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 抽屉内容 |
| title | String | 抽屉标题 |

#### confirm(content, title)

打开有确定和取消按钮的抽屉

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 抽屉内容 |
| title | String | 抽屉标题 |
