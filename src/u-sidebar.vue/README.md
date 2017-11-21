# 侧边栏 Sidebar

## 示例
### 基本形式

#### 路由模式

``` html
<div style="width: 200px; background: #f0f6fa;">
    <u-sidebar>
        <u-sidebar-item>指南</u-sidebar-item>
        <u-sidebar-item>概念</u-sidebar-item>
        <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
    </u-sidebar>
</div>
```

#### value模式

``` html
<div style="width: 200px; background: #f0f6fa;">
    <u-sidebar value="3" :router="false">
        <u-sidebar-item value="1">指南</u-sidebar-item>
        <u-sidebar-item value="2">概念</u-sidebar-item>
        <u-sidebar-item value="3">组件</u-sidebar-item>
    </u-sidebar>
</div>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item>指南</u-sidebar-item>
            <u-sidebar-item disabled>概念</u-sidebar-item>
            <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<div style="width: 200px;">
    <u-sidebar>
        <u-sidebar-item>指南</u-sidebar-item>
        <u-sidebar-item>概念</u-sidebar-item>
        <u-sidebar-item>配置</u-sidebar-item>
        <u-sidebar-divider></u-sidebar-divider>
        <u-sidebar-item to="/proto-ui">组件</u-sidebar-item>
        <u-sidebar-item to="/libraries">组件库</u-sidebar-item>
    </u-sidebar>
</div>
```

### 分组

``` html
<div style="width: 200px; background: #f0f6fa;">
    <u-sidebar accordion>
        <u-sidebar-group text="Basic">
            <u-sidebar-item>链接</u-sidebar-item>
            <u-sidebar-item>按钮</u-sidebar-item>
            <u-sidebar-item>标签</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group text="Navigation">
            <u-sidebar-item>导航栏</u-sidebar-item>
            <u-sidebar-item to="/proto-ui/u-sidebar">侧边栏</u-sidebar-item>
            <u-sidebar-item>标签页</u-sidebar-item>
        </u-sidebar-group>
        <u-sidebar-group text="Form">
            <u-sidebar-item>单行输入</u-sidebar-item>
            <u-sidebar-item>多行输入</u-sidebar-item>
            <u-sidebar-item>选择框</u-sidebar-item>
            <u-sidebar-item>表单</u-sidebar-item>
        </u-sidebar-group>
    </u-sidebar>
</div>
```
