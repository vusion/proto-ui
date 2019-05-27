# 验证器

``` vue
<template>
<m-validator>
    <m-validator :rules="rules.username" muted="message">
        <u-input></u-input>
    </m-validator>
    <m-validator :rules="rules.email" muted="message">
        <u-input></u-input>
    </m-validator>
</m-validator>
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
                    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
                    { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
            },
        };
    },
};
</script>
```
