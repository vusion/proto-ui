# Form

## Examples
### Basic

``` vue
<template>
<u-form ref="form">
    <u-form-item title="用户名" :rules="rules.username">
        <u-input></u-input>
    </u-form-item>
    <u-form-item title="设置密码">
        <u-input></u-input>
    </u-form-item>
    <u-form-item title="确认密码">
        <u-input></u-input>
    </u-form-item>
    <u-form-item title="选择" :rules="rules.switch">
        <u-switch></u-switch>
    </u-form-item>
    <u-form-item title="验证码">
        <u-input></u-input>
    </u-form-item>
    <u-linear-layout>
        <u-button @click="submit()">提交</u-button>
        <u-button>重置</u-button>
    </u-linear-layout>
</u-form>
</template>
<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
                    { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
                    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'input+blur', message: '以字母或数字结尾' },
                    { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },
                ],
                switch: [
                    { type: 'boolean', validator: (rule, value, callback) => value ? callback() : callback(new Error('value is false')) , trigger: 'blur', message: '打开开关' }
                ]
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then((result) => console.info('success'))
                .catch((errors) => console.info('error'));
        },
    },
};
</script>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| color | String | | Try 'error' |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | |
