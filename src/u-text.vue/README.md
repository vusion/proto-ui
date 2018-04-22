# 文本 Text

用于在业务中临时快速调整文本大小、颜色等特性。不建议在封装基础组件时使用。

## 示例
### 大小扩展

``` html
<u-linear-layout>
    <u-text size="small">小号文本</u-text>
    <u-text size="normal">正常文本</u-text>
    <u-text size="large">大号文本</u-text>
</u-linear-layout>
```

### 颜色扩展

``` html
<u-linear-layout>
    <u-text>默认颜色</u-text>
    <u-text color="primary">主要文字</u-text>
    <u-text color="error">错误文字</u-text>
    <u-text color="disabled">禁默文本</u-text>
</u-linear-layout>
```

### 文本换行

``` html
<p style="width: 120px; background: #eee;">
    <u-text wrap="ellipsis">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
</p>
<p style="width: 120px; background: #eee;">
    <u-text wrap="break">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
</p>
<p style="width: 120px; background: #eee;">
    <u-text wrap="nowrap">天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。</u-text>
</p>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| size | String | `'normal'` | 大小扩展。可选值：`'small'`, `'normal'`, `'large'` |
| color | String | `'default'` | 颜色扩展。可选值：`'default'`, `'primary'`, `'error'` |
| wrap | String | `false` | 换行方式。可选值：`'normal'`表示默认方式，`'ellipsis'`表示多余的文本省略，`'break'`表示强制换行且英文自动添加换行符，`'nowrap'`表示始终不换行。 |
