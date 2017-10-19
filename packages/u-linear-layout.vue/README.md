# 线性布局（LinearLayout）

## 示例
### 基本形式

``` html
<u-linear-layout>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
    <u-button>Button</u-button>
</u-linear-layout>
```

### 方向

``` html
<u-linear-layout direction="vertical">
    <u-pagination></u-pagination>
    <u-pagination></u-pagination>
    <u-pagination></u-pagination>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| direction | String | `'horizontal'` | 排列方向，'horizontal'或'vertical' |
| alignment | String | `'left'` | 'left', 'center'或'right' |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
