# 菜单 Menu

菜单组件与 ListView 组件相比，支持了路由、触发关闭、多级菜单等功能。

## 示例
### 基本形式

#### 使用 Popup 或 Popper 弹出

``` html
<u-linear-layout>
<u-popup>
    <u-button>Dropdown</u-button>
    <u-menu slot="popper" value="3" :router="false">
        <u-menu-item value="1">指南</u-menu-item>
        <u-menu-item value="2">概念</u-menu-item>
        <u-menu-item value="3">组件</u-menu-item>
    </u-menu>
</u-popup>
<u-popper>
    <u-button>Dropdown</u-button>
    <u-menu slot="popper" value="3" :router="false" style="width: 128px">
        <u-menu-item value="1">指南</u-menu-item>
        <u-menu-item value="2">概念</u-menu-item>
        <u-menu-item value="3">组件</u-menu-item>
    </u-menu>
</u-popper>
</u-linear-layout>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-menu disabled>
            <u-menu-item>指南</u-menu-item>
            <u-menu-item>概念</u-menu-item>
            <u-menu-item to="/proto-ui">组件</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-menu>
            <u-menu-item>指南</u-menu-item>
            <u-menu-item disabled>概念</u-menu-item>
            <u-menu-item to="/proto-ui">组件</u-menu-item>
        </u-menu>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-menu style="width: 200px;">
    <u-menu-item>指南</u-menu-item>
    <u-menu-item>概念</u-menu-item>
    <u-menu-item>配置</u-menu-item>
    <u-menu-divider></u-menu-divider>
    <u-menu-item to="/proto-ui">组件</u-menu-item>
    <u-menu-item to="/libraries">组件库</u-menu-item>
</u-menu>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-menu>
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/proto-ui/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form">
                    <u-menu-item>单行输入</u-menu-item>
                    <u-menu-item>多行输入</u-menu-item>
                    <u-menu-item>选择框</u-menu-item>
                    <u-menu-item>表单</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <u-menu collapsible>
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation" expanded disabled>
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/proto-ui/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form" :collapsible="false">
                    <u-menu-item>单行输入</u-menu-item>
                    <u-menu-item>多行输入</u-menu-item>
                    <u-menu-item>选择框</u-menu-item>
                    <u-menu-item>表单</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-menu collapsible accordion>
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/proto-ui/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Form">
                    <u-menu-item>单行输入</u-menu-item>
                    <u-menu-item>多行输入</u-menu-item>
                    <u-menu-item>选择框</u-menu-item>
                    <u-menu-item>表单</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <u-menu collapsible expand-trigger="click">
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/proto-ui/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <u-menu collapsible expand-trigger="click-expander">
                <u-menu-group title="Basic">
                    <u-menu-item>链接</u-menu-item>
                    <u-menu-item>按钮</u-menu-item>
                    <u-menu-item>标签</u-menu-item>
                </u-menu-group>
                <u-menu-group title="Navigation">
                    <u-menu-item>导航栏</u-menu-item>
                    <u-menu-item to="/proto-ui/u-menu">侧边栏</u-menu-item>
                    <u-menu-item>标签页</u-menu-item>
                </u-menu-group>
            </u-menu>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## Menu API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| router | Boolean | `true` | 是否根据vue-router来控制选择哪一项 |
| value.sync, v-model | Any | | 当前选择的值 |
| collapsible | Boolean | `false` | 分组是否可以折叠 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expand-trigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-menu-item>`、`<u-menu-divider>`或`<u-menu-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | MenuItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | MenuItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<MenuItem\> | 多选模式中，所有选中项子组件的数组 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MenuGroup | 分组组件 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## MenuItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String, Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | MenuItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |

## MenuGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |
| collapsible | Boolean |  | `false` | 是否可以折叠 |
| expanded.sync | Boolean | `false` | 展开/折叠状态 |
| disabled | Boolean | `false` | 是否禁用。禁用时无法展开/折叠 |

### Slots

#### (default)

插入`<u-menu-item>`或`<u-menu-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加内容。

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MenuGroup | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | MenuGroup | 分组组件 |

## MenuDivider API

无
