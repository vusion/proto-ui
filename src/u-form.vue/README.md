# 表单 Form

表单及表单控件的设计思路请参阅[设计思路——表单系列](/ui-design/form)。

## 示例
### 基本形式

``` html
<u-form>
    <u-form-item label="性别">
        <u-radios value="男">
            <u-radio label="男">男</u-radio>
            <u-radio label="女">女</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="昵称" required>
        <u-input maxlength="20" placeholder="不得超过20个字符"></u-input>
    </u-form-item>
    <u-form-item label="手机" required>
        <u-input maxlength="11" placeholder="请输入手机号"></u-input>
    </u-form-item>
    <u-form-item label="自我介绍">
        <u-textarea></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">提交</u-button>
    </u-form-item>
</u-form>
```

### 行内

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="状态">
        <u-select>
            <u-select-item>创建中</u-select-item>
            <u-select-item>成功</u-select-item>
            <u-select-item>失败</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item label="用户名">
        <u-input maxlength="20" placeholder="请输入用户名"></u-input>
    </u-form-item>
    <u-form-item label="手机">
        <u-input maxlength="11" placeholder="请输入手机"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item>
</u-form>
```

## 表单验证
### 规则列表

每个表单项的验证行为用一个有序列表`rules`来声明，列表中包含若干条验证规则。结构如下：

``` javascript
[{ type: 'string', required: true, ... }, { type: 'email', ... }, { type: 'string', pattern: ... }, ...]
```

每条规则至少包含以下几个参数：
- `type`：数据类型
- `trigger`：触发方式
- `message`：验证不通过时的消息提示
- ...

下面举个例子，一个用户名输入框的验证包含以下规则：

1. 必须输入用户名，失焦验证
2. 以字母开头，实时验证
3. 字母、数字或中划线组成，实时验证
4. 以字母或数字结尾，失焦验证
5. 4~12个字符，失焦验证

``` vue
<template>
<u-form-item label="用户名" :rules="rules">
    <u-input maxlength="112" placeholder="4~12位字母、数字或中划线组成"></u-input>
</u-form-item>
</template>

<script>
export default {
    data() {
        return {
            rules: [
                { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
                { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
                { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
                { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },
            ],
        };
    },
};
</script>
```

#### 多字段的规则列表

如果一个表单多个字段有规则列表，可以在`u-form`中汇总传入。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
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

### 数据类型

- `string`: Must be of type string. This is the default type.
- `number`: Must be of type number.
- `boolean`: Must be of type boolean.
- `method`: Must be of type function.
- `regexp`: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
- `integer`: Must be of type number and an integer.
- `float`: Must be of type number and a floating point number.
- `array`: Must be an array as determined by Array.isArray.
- `object`: Must be of type object and not Array.isArray.
- `enum`: Value must exist in the enum.
- `date`: Value must be valid as determined by Date
- `url`: Must be of type url.
- `hex`: Must be of type hex.
- `email`: Must be of type email.

其它请参见[async-validator](https://github.com/yiminghe/async-validator)。

### 触发方式

表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则`trigger`的三种触发方式：`submit`, `blur`, `input`，规则中默认为`submit`。

另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。

#### 提交验证

点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的`click`事件。示例如下：

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, message: '请输入邮箱' },
                    { type: 'email', message: '邮箱格式不正确' },
                ],
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

#### 失焦验证

在表单控件失去焦点时对该控件进行验证，通常对应表单控件的`blur`事件。示例如下：

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
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

#### 实时验证

在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的`input`事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式`input+blur`。

下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input', message: '邮箱格式不正确' },
                ],
            },
        };
    },
};
</script>
```

#### 表单限制

在表单控件的值改变时，对该值限制在规定的长度或范围内，如`<input>`控件的部分`type`和`maxlength`的限制行为等：

``` html
<u-form>
    <u-form-item label="用户名">
        <u-input maxlength="4" placeholder="不超过4个字符"></u-input>
    </u-form-item>
</u-form>
```

### 验证提示

`<u-form-item>`的`message`属性用于设置默认提示，规则中的`message`字段用于设置验证不通过时提示。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username" message="用户名是唯一的">
        <u-input maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
            },
        };
    },
};
</script>
```

## 案例

前面的示例只是局部展示组件库表单验证体系的使用方法，达到的效果不一定符合实际情况。下面举几种比较合理的案例：

按照表单提交按钮在什么情况下可点击，可以分为以下几种常见且比较合理的情况：始终可点、必填项有内容可点、所有项内容正确时才可点。

### 始终可点

表单提交按钮始终可点。

表现为表单中所有控件的所有行为必须进行提交验证，适当采用失焦和实时验证加以帮助。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

### 必填项有内容可点

当表单中所有必填项有内容时，表单提交按钮才可点。

表现为根据表单中必填项是否为空，使用计算属性来实时判断提交按钮是否可点。并且在这种情况下，通常采用三种验证相结合的方式。

``` vue
<template>
<u-form ref="form" :rules="rules">
    <u-form-item label="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    computed: {
        canSubmit() {
            return this.model.username && this.model.email;
        },
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

### 所有项内容正确可点

当表单中所有项内容均符合要求时，表单提交按钮才可点。

表现为根据每个表单控件的验证结果，使用计算属性来实时判断提交按钮是否可点。这种情况下，一般就不需要进行提交验证了。

``` vue
<template>
<u-form ref="form" :rules="rules" @validate="canSubmit = $event.valid">
    <u-form-item label="用户名" name="username">
        <u-input v-model="model.username" maxlength="12" placeholder="4~12个字符"></u-input>
    </u-form-item>
    <u-form-item label="邮箱" name="email">
        <u-input v-model="model.email" maxlength="24" placeholder="请输入邮箱"></u-input>
    </u-form-item>
    <u-form-item label="手机号码" name="phone">
        <u-input v-model="model.phone" maxlength="11" placeholder="请输入手机号码"></u-input>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" :disabled="!canSubmit" @click="submit()">提交</u-button>
    </u-form-item>
</u-form>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                username: '',
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' },
                ],
            },
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => {});
        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => {});
    },
    methods: {
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => {});
        },
    },
};
</script>
```

## Form API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| model | Object | | 表单数据模型 |
| rules | Object | | 表单所有域的验证规则 |
| layout | String | `block` | 表单布局方式。可选值：`block`、`inline`。 |
| label-size | String | `normal` | 标签大小。可选值：`small`、`normal`、`large`。 |

### Slots

#### (default)

插入`<u-form-item>`子组件。

### Events

#### @validate

表单验证时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.valid | Boolean | 验证是否通过 |

### Methods

#### validate(slient)

验证此表单。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| silent | Boolean | `false` | 是否仅验证无提示。 |


## FormItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| name | String | | 表单项名称，用于选择表单的模型数据和验证规则 |
| label | String | | 标签 |
| label-size | String | `normal` | 单独设置表单项的标签大小 |
| rules | Array | | 表单项的验证规则。如果没有则会根据`name`属性从表单的`rules`中获取。 |
| message | String | | 默认提示信息 |
| required | Boolean | | 是否必填。仅显示样式，如果要验证必填项，需要在`rules`中添加必填规则。 |

### Slots

#### (default)

插入`<u-form-item>`子组件。

### Methods

#### validate(trigger, slient)

验证此表单项。

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| trigger | String | `submit` | 触发方式，可选值：`submit`、`blur`和`input`之一，或者它们的任意组合。 |
| silent | Boolean | `false` | 是否仅验证无提示。 |
