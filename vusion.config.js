const pkg = require('./package.json');

module.exports = {
    version: '>=0.10.0',
    type: 'library',
    name: 'proto-ui',
    CamelName: 'ProtoUI',
    docs: {
        title: 'Proto UI 组件库',
        logo: '原型组件',
        mode: 'history',
        base: '/proto-ui/',
        github: 'https://github.com/vusion/proto-ui#next',
        package: pkg,
        navbar: [
            { text: '组件', to: '/components' },
            { text: '指令和工具', to: '/misc' },
            { text: '布局', to: '/layouts' },
        ],
        components: [
            { group: 'Guide', name: 'quickstart', title: '快速开始', path: './docs/views/guide/quickstart.md' },
            { group: 'Guide', name: 'pattern', title: '设计模式', path: './docs/views/guide/pattern.md' },
            { group: 'Guide', name: 'changelog', title: '更新日志', href: 'https://github.com/vusion/proto-ui/releases', target: '_blank' },
            { group: 'Guide', name: 'theme', title: '主题', path: 'library/styles/theme.md' },
            { group: 'Basic', name: 'typography', title: '排版', path: 'library/styles/typography.md' },
            { group: 'Basic', name: 'u-text', title: '文本' },
            { group: 'Basic', name: 'u-link', title: '链接' },
            { group: 'Basic', name: 'u-button', title: '按钮' },
            { group: 'Basic', name: 'u-label', title: '标签' },
            { group: 'Basic', name: 'u-badge', title: '徽章' },
            { group: 'Basic', name: 'u-avatar', title: '头像' },
            { group: 'Basic', name: 'i-icon', title: '图标' },
            { group: 'Basic', name: 'u-logo', title: '标识' },
            { group: 'Layout', name: 'u-linear-layout', title: '线性布局' },
            { group: 'Layout', name: 'u-grid-layout', title: '栅格布局' },
            { group: 'Layout', name: 'u-list', title: '列表' },
            // { group: 'Layout', name: 'u-desc-list', title: '描述列表' },
            // { group: 'Layout', name: 'u-info-list', title: '信息列表' },
            { group: 'Layout', name: 'u-table', title: '表格' },
            { group: 'Layout', name: 'u-form-table', title: '表单表格' },
            { group: 'Layout', name: 'u-article', title: '文章' },
            { group: 'Layout', name: 'u-collapse', title: '折叠面板' },
            { group: 'Navigation', name: 'u-navbar', title: '导航栏' },
            { group: 'Navigation', name: 'u-sidebar', title: '侧边栏' },
            { group: 'Navigation', name: 'u-menu', title: '菜单' },
            { group: 'Navigation', name: 'u-tabs', title: '标签页' },
            { group: 'Navigation', name: 'u-steps', title: '步骤条' },
            { group: 'Navigation', name: 'u-crumb', title: '面包屑' },
            { group: 'Navigation', name: 'u-pagination', title: '翻页器' },
            { group: 'Navigation', name: 'u-combo-pagination', title: '复合翻页器' },
            { group: 'Form', name: 'u-form', title: '表单' },
            { group: 'Form', name: 'u-validator', title: '验证器' },
            { group: 'Form', name: 'u-input', title: '单行输入' },
            { group: 'Form', name: 'u-number-input', title: '数字输入' },
            { group: 'Form', name: 'u-textarea', title: '多行输入' },
            { group: 'Form', name: 'u-radios', title: '单选组' },
            { group: 'Form', name: 'u-checkboxes', title: '多选组' },
            { group: 'Form', name: 'u-switch', title: '开关' },
            { group: 'Form', name: 'u-select', title: '选择框' },
            { group: 'Form', name: 'u-cascade-select', title: '级联选择' },
            { group: 'Form', name: 'u-region-select', title: '地区选择' },
            { group: 'Form', name: 'u-slider', title: '滑块' },
            { group: 'Form', name: 'u-combo-slider', title: '复合滑块' },
            { group: 'Form', name: 'u-uploader', title: '文件上传' },
            { group: 'Form', name: 'u-form-table-view', title: '表单表格视图' },
            { group: 'Data', name: 'u-list-view', title: '列表选择' },
            { group: 'Data', name: 'u-tree-view', title: '树型选择' },
            { group: 'Data', name: 'u-table-view', title: '表格视图' },
            { group: 'Data', name: 'u-transfer', title: '穿梭框' },
            // { group: 'DateTime', name: 'u-calendar', title: '日历' },
            // { group: 'DateTime', name: 'u-date-picker', title: '日期选择' },
            // { group: 'DateTime', name: 'u-time-picker', title: '时间选择' },
            // { group: 'DateTime', name: 'u-date-time-picker', title: '日期时间' },
            { group: 'Popper', name: 'm-popper', title: '弹出层' },
            { group: 'Popper', name: 'u-popup', title: '弹出框' },
            { group: 'Popper', name: 'u-tooltip', title: '工具提示' },
            { group: 'Popper', name: 'u-icon-tooltip', title: '图标提示' },
            { group: 'Feedback', name: 'u-spinner', title: '加载图标' },
            { group: 'Feedback', name: 'u-loading', title: '加载中' },
            { group: 'Feedback', name: 'u-toast', title: '吐司提示' },
            { group: 'Feedback', name: 'u-modal', title: '弹窗' },
            { group: 'Feedback', name: 'u-drawer', title: '抽屉' },
            // { group: 'Feedback', name: 'u-lightbox', title: '灯箱' },
            { group: 'Effects', name: 'u-carousel', title: '走马灯' },
            { group: 'Effects', name: 'e-ripple', title: '波纹' },
            { group: 'Effects', name: 'e-watermark', title: '水印' },
            { group: 'Progress & Charts', name: 'u-linear-progress', title: '线型进度条' },
            { group: 'Progress & Charts', name: 'u-circular-progress', title: '圆型进度条' },
            { group: 'Mixins & Functional', name: 'm-dynamic', title: '动态列表' },
            { group: 'Mixins & Functional', name: 'm-emitter', title: '发送器' },
            { group: 'Mixins & Functional', name: 'm-pub-sub', title: '发布订阅模式' },
            { group: 'Mixins & Functional', name: 'm-parent', title: '父子模式' },
            { group: 'Mixins & Functional', name: 'm-group', title: '分组模式' },
            { group: 'Mixins & Functional', name: 'm-root', title: '根节点模式' },
            { group: 'Mixins & Functional', name: 'm-singlex', title: '单选模式' },
            { group: 'Mixins & Functional', name: 'm-multiplex', title: '多选模式' },
            { group: 'Mixins & Functional', name: 'm-complex', title: '复合模式' },
            { group: 'Mixins & Functional', name: 'f-collapse-transition', title: '折叠过渡' },
            { group: 'Mixins & Functional', name: 'f-draggable', title: '拖拽' },
            { group: 'Mixins & Functional', name: 'f-droppable', title: '拖放' },
            { group: 'Mixins & Functional', name: 'f-dragger', title: '拖拽器' },
            { group: 'Mixins & Functional', name: 'f-render', title: '渲染器' },
            { group: 'Mixins & Functional', name: 'f-slot', title: '快捷插槽' },
            { group: 'Mixins & Functional', name: 'f-forbidden', title: '禁用' },
        ],
        blocks: [],
        directives: [
            { group: 'Directives', name: 'v-repeat-click', title: '重复点击' },
            // { group: 'Directives', name: 'v-click-outside' },
            { group: 'Directives', name: 'v-ellipsis-title', title: '文字省略提示' },
            { group: 'Directives', name: 'v-focus', title: '自动获取焦点' },
        ],
        filters: [],
        utils: [
            // { group: 'Utils', name: 'DataSource', title: '数据源' },
            // { group: 'Utils', name: 'Formatters', title: '格式器' },
            { group: 'Utils', name: 'dom', title: 'DOM 相关' },
            { group: 'Utils', name: 'edit', title: '编辑相关' },
        ],
        layouts: [
            { group: 'Scene', name: 'l-dashboard', title: '仪表盘布局' },
            { group: 'Scene', name: 'l-document', title: '文档布局' },
            { group: 'Scene', name: 'l-page', title: '通用页面布局' },
            { group: 'Scene', name: 'l-side-main', title: '左侧栏固定布局' },
            { group: 'Router', name: 'l-wrapper', title: '透传页' },
        ],
    },
};
