# 单行输入

## 示例
### 基本形式

大部分属性与`<input>`元素一致。

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" autofocus></u-input>
```

### 加密

``` html
<u-input type="password" maxlength="12" placeholder="请输入密码"></u-input>
```

### 本地储存
Field类组件通过mixins:[Persist]使用，当persistKey属性值有效则自动开启输入值本地储存，在组件重新渲染或页面重载后输入值自动恢复

``` html
<u-input maxlength="12" placeholder="1~12位小写字母" persistKey="u-input"></u-input>
```

### 数字

使用`v-model`的`number`修饰符，可以很轻松的将输入值转成number类型。

``` vue
<template>
<u-input v-model.number="value" maxlength="12" placeholder="请输入端口号" @input="onInput"></u-input>
输出：{{ output }}
</template>

<script>
export default {
    data() {
        return {
            value: 3306,
            output: '',
        };
    },
    methods: {
        onInput(value) {
            this.output = JSON.stringify({
                inputValue: value,
                modelValue: this.value,
            });
        },
    },
};
</script>
```

### 只读与禁用

``` html
<u-linear-layout>
    <u-input value="只读" readonly></u-input>
    <u-input value="禁用" disabled></u-input>
</u-linear-layout>
```

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| type | String | `'text'` | 输入框的类型，目前只支持两种：`'text'`和`'password'` |
| value | String | | 输入框的值 |
| placeholder | String | | 原生属性 |
| maxlength | Number | | 原生属性 |
| autofocus | Boolean | | 原生属性 |
| readonly | Boolean | | 原生属性 |
| disabled | Boolean | | 原生属性 |
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |

### Slots

#### (default)

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入框的值 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 原生事件对象 |

## Persist API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| persistKey | String | | 本地储存的键值，需保证在该路由的页面下不重复 |
| disablePersist | Boolean | false | 禁止本地储存功能 |

### Methods
#### getSession
获取当前缓存的值

#### resetSession
重置当前缓存的值

| Param | Type | Description |
| ----- | ---- | ----------- |
| value | String | 重置为该值 |

#### removeSession
清除当前缓存的值

#### enableSessionResume
手动开启本地储存

| Param | Type | Description |
| ----- | ---- | ----------- |
| persistKey | String | 本地储存的键值 |
