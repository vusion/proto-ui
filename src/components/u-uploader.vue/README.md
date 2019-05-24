# UUploader 文件上传

## 示例
### 基本形式-单文件上传

``` html
<u-uploader url="/upload" isPreviewFile>
    <u-button slot="uploadStyle">upload</u-button>
</u-uploader>
```

> 注意：在IE中实现上传功能时，需要将响应头的`Content-Type`设置为`text/plain`或`text/html`，而不能是`application/json`，否则IE会提示用户下载返回的数据。

### 基本形式-单文件上传-自定义上传样式

``` html
<u-uploader url="/upload" isPreviewFile>
    <i-icon name="github"  slot="uploadStyle"></i-icon>点击图标上传
    <u-loading display="full" slot="loadingStyle">上传中</u-loading>
</u-uploader>
```

### 基本形式-多文件上传

``` html
<u-uploader url="/upload" multiple isPreviewFile>
    <u-button slot="uploadStyle">upload</u-button>
</u-uploader>
```

### 文件类型限制

``` html
<u-uploader url="/upload" extensions="jpg,gif,png">
    <u-button slot="uploadStyle">upload</u-button>
</u-uploader>
```

### 文件大小限制

``` html
<u-uploader url="/upload" max-size="10kB">
    <u-button slot="uploadStyle">upload</u-button>
</u-uploader>
```

### 禁用

``` html
<u-uploader url="/upload" disabled>
    <u-button slot="uploadStyle" disabled>upload</u-button>
</u-uploader>
```

### 拖拽上传-默认样式

``` html
<u-uploader url="/upload" drag dragDefaulted isPreviewFile></u-uploader>
```


### 拖拽上传-自定义样式

``` html
<u-uploader url="/upload" drag isPreviewFile>
    <u-logo color="inverse" slot="dragStyle">文件拖拽</u-logo>
</u-uploader>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| url | String | | 上传文件路径 |
| data-type | String | `'json'` | 接收数据类型。可选值：`text`、`xml`、`json` |
| data | Object | `{}` | 附加数据 |
| name | String | `'file'` | 上传文件的名称，后端一般需要这个字段 |
| extensions | String, Array | `''` | 可上传的扩展名。默认为空，表示可上传任意文件类型的文件。可以为字符串，多个扩展名用`,`隔开，如：`'png,jpg,gif'`；也可以为数组，如：`['png', 'jpg', 'gif']` |
| max-size | String, Number | `Infinity` | 可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`kB`、`MB`、`GB` |
| disabled | Boolean | `false` | 是否禁用 |
| multiple | Boolean | `false` | 是否多文件上传 |
| isPreviewFile | Boolean | `false` | 是否展示上传缩略图 |
| drag | Boolean | `false` | 是否支持拖拽上传 |
| dragDefaulted | Boolean | `false` | 拖拽上传默认样式 |

### Slots

#### (default)

插入文本或HTML。

#### uploadStyle

上传样式可以附加组件。

#### loadingStyle

上传的加载样式可以附加组件。

#### dragStyle

拖拽空白区域里可以附加组件。

### Events

#### @before-send

发送前触发

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.data | Object | 进度相关信息 |
| $event.xhr | XMLHttpRequest | 发送前的 XMLHttpRequest 对象 |
| $event.formData | FormData | 用于发送的数据对象 |
| $event.preventDefault | Function | 阻止上传流程 |
| senderVM | UUploader | 发送事件对象 |

#### @send

刚发送时触发

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.data | Object | 进度相关信息 |
| $event.preventDefault | Function | 阻止上传流程 |
| senderVM | UUploader | 发送事件对象 |

#### @progress

发送进度改变时触发，在上传进度条时使用

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.data | Object | 进度相关信息 |
| senderVM | UUploader | 发送事件对象 |

#### @complete

上传完成时触发

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.xml | String | 服务器回传信息 |
| senderVM | UUploader | 发送事件对象 |

#### @success

上传成功时触发

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.data | Object | 服务器回传信息对象 |
| $event.file | Object | 上传文件信息，不包含文件主体内容 |
| senderVM | UUploader | 发送事件对象 |

#### @error

上传报错时触发

| Param | Type |  Description |
| --------- | ---- | ----------- |
| $event.name | String | 错误名 |
| $event.message | String | 错误描述 |
| $event.extensions | String | 限制类型 |
| $event.$event.maxSize | Number | 限制大小 |
| $event.size | Number | 当前大小 |
| senderVM | UUploader | 发送事件对象 |
