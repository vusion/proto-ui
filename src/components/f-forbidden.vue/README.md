# FForbidden 禁用

禁用浏览器的一些默认功能和快捷键。

## 示例
### 基本形式

下面的例子中，禁用了右键菜单、选择文本、复制功能、另存为键和开发者工具键。

``` html
<f-forbidden contextmenu select copy save-key devtools-key></f-forbidden>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| contextmenu | Boolean | `false` | 是否禁止弹出右键菜单 |
| select | Boolean | `false` | 是否禁止选择文本 |
| copy | Boolean | `false` | 是否禁止复制 |
| save-key | Boolean | `false` | 是否禁止另存为键 |
| devtools-key | Boolean | `false` | 是否禁止开发者工具键 |
| senderVM | FForbidden | 发送事件实例 |

### Events

#### @contextmenu

弹出右键菜单时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | FForbidden | 发送事件实例 |

#### @select

选择文本时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | FocusEvent | 聚焦事件对象 |
| senderVM | FForbidden | 发送事件实例 |

#### @copy

复制时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | ClipboardEvent | 剪贴板事件对象 |
| senderVM | FForbidden | 发送事件实例 |

#### @save-key

按保存键时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | KeyboardEvent | 键盘事件对象 |
| senderVM | FForbidden | 发送事件实例 |

#### @devtools-key

按开发人员工具键时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | KeyboardEvent | 键盘事件对象 |
| senderVM | FForbidden | 发送事件实例 |
