# UModal 弹窗

## 示例
### 基本形式

``` vue
<template>
<div>
    <u-modal :visible.sync="visible" title="标题">
        这是一段文字内容。
    </u-modal>
    <u-linear-layout>
        <u-button @click="visible = true">Modal</u-button>
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

### 快捷方式

``` vue
<template>
<u-linear-layout>
    <u-button @click="alert()">Alert</u-button>
    <u-button @click="confirm()">Confirm</u-button>
</u-linear-layout>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$alert('创建失败！');
        },
        confirm() {
            this.$confirm('是否要删除该任务？').then(() => {
                console.info('用户点击了确定。');
            }).catch(() => {
                console.info('用户点击了取消。');
            });
        },
    },
};
</script>
```

### Static

``` html
<u-modal visible static>静态显示，该属性用于文档中局部展示，实际开发时请去除。</u-modal>
```

### 标题与内容

``` html
<u-modal title="标题" visible static>内容</u-modal>
```

### 自定义

``` html
<u-modal visible static>
    <div slot="title">自定义标题 <u-badge :value="3"></u-badge></div>
    这是一段文字内容。
    <div slot="foot">
        <u-button color="primary">关闭</u-button>
    </div>
</u-modal>
```
### 大小扩展

``` html
<u-modal visible static size="small">
    Small
</u-modal>
<u-modal visible static size="normal">
    Normal
</u-modal>
<u-modal visible static size="large">
    Large
</u-modal>
<u-modal visible static size="auto">
    Auto
</u-modal>
```

## API
### Props/Attrs

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| visible.sync | Boolean | `false` | 是否显示 |
| title | String | `'提示'` | 弹窗的标题 |
| ok-button | String | `'确定'` | 确定按钮文本，如果为空则不显示 |
| cancel-button | String | `'取消'` | 取消按钮文本，如果为空则不显示 |
| size | String | `'normal'` | 弹窗的尺寸。可选值：`'small'`, `'normal'`, `'large'` |
| static | Boolean | `false` | 是否嵌入页面显示 |
| mask-closable | Boolean | `false` | 是否点击遮罩时关闭弹窗 |

### Slots

| Slot | Description |
| ---- | ----------- |
| title | 弹窗标题自定义 |
| head | 弹窗头部自定义 |
| foot | 弹窗尾部自定义 |
| (default) | 弹窗内容自定义 |

### Events

#### @open

打开弹窗时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @ok

确定时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @cancel

取消时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| senderVM | UModal | 发送事件实例 |

#### @before-close

关闭弹窗前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | Boolean | 是否确定 |
| $event.preventDefault | Function | 阻止关闭流程 |
| senderVM | UModal | 发送事件实例 |

#### @close
关闭弹窗时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.ok | Boolean | 是否确定 |
| senderVM | UModal | 发送事件实例 |

### Static Methods

#### alert(content, title)

打开只有确定按钮的弹窗

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 弹窗内容 |
| title | String | 弹窗标题 |

#### confirm(content, title)

打开有确定和取消按钮的弹窗

| Param | Type | Description |
| ----- | ---- | ----------- |
| content | String | 弹窗内容 |
| title | String | 弹窗标题 |
