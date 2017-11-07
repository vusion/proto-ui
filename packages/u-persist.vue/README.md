# Persist

## Examples
### Field
Field类组件通过mixins:[Persist]使用，当persistKey属性值有效则自动开启输入值本地储存，在组件重新渲染或页面重载后输入值自动恢复
``` html
<u-input maxlength="12" placeholder="1~12位小写字母" persistKey="u-input"></u-input>
```
### Form
表单直接通过传入persistKey属性值，有效则表单内所有Field组件开启本地储存，在表单组件重新渲染或页面重载后表单内各个输入值自动恢复(表单开启本地储存时建议每个form-item都定义name值).disablePersist属性可禁用表单内指定Field组件的本地储存功能
``` vue
<template>
<u-form ref="form" persistKey="u-form-1">
    <u-form-item title="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item title="密码" name="password">
        <u-input disablePersist="true" v-model="model.password" type="password" maxlength="12" placeholder="请输入密码"></u-input>
    </u-form-item>
    <u-form-item title="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item title="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                password: '',
                email: '',
                phone: '',
            },
        };
    },
};
</script>
```

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
