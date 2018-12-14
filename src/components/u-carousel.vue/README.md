# 幻灯片 Carousel

## 示例
### 基本形式

``` html
<u-carousel>
    <u-carousel-item><img src="../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### 动画
#### fade
``` html
<u-carousel animation="fade">
    <u-carousel-item><img src="../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

### 自动播放与循环

通过`interval`来设置播放间隔。

``` html
<u-carousel :interval="1000">
    <u-carousel-item><img src="../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

通过`autoplay`可以关闭自动播放。

``` html
<u-carousel :autoplay="false">
    <u-carousel-item><img src="../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

通过`loop`可以关闭循环播放。

``` html
<u-carousel :autoplay="false" :loop="false">
    <u-carousel-item><img src="../../assets/images/1.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/2.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/3.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/4.jpg"></u-carousel-item>
    <u-carousel-item><img src="../../assets/images/5.jpg"></u-carousel-item>
</u-carousel>
```

## Carousel API
### Props/Attrs

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value.sync | Any |  | 播放位置 |
| autoplay | Boolean | `true` | 是否自动播放 |
| loop | Boolean | `true` | 是否循环播放，即首尾连接 |
| interval | Number | `4000` | 幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换 |
| direction | String | `'right'` | 幻灯片播放方向 |
| animation | String | | 幻灯片过渡动画 |

<!-- | router | Boolean | `false` | 是否根据vue-router来控制选择播放至哪个位置 | -->

### Slots

#### (default)

插入`<u-carousel-item>`子组件。

### Events

#### @before-select

选择某一页前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | Tab | 选中项实例 |
| $event.preventDefault | Function | 阻止选择流程 |
| senderVM | Vue | 发送事件实例 |

#### @select

选择某一页时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选中项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.itemVM | Tab | 选中项实例 |
| senderVM | Vue | 发送事件实例 |

## CollapseItem API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String | | 该项的标题 |
| value | Any | | 该项的值 |

### Slots

#### (default)

插入文本或 HTML。

#### title

自定义标题文本。
