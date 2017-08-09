import './packages/u-base.vue/base.css';
import * as directives from './packages/u-base.vue/directives';

import Button from './packages/u-button.vue';
import Checkbox from './packages/u-checkbox.vue';
import CircularProgress from './packages/u-circular-progress.vue';
import LinearProgress from './packages/u-linear-progress.vue';
import LinearLayout from './packages/u-linear-layout.vue';
import Link from './packages/u-link.vue';
import ListView from './packages/u-list-view.vue';
import ListViewItem from './packages/u-list-view-item.vue';
import TreeView from './packages/u-tree-view.vue';
import TreeViewNode from './packages/u-tree-view-node.vue';
import Pagination from './packages/u-pagination.vue';
import RouterItem from './packages/u-router-item.vue';
import Sample from './packages/u-sample.vue';
import Switch from './packages/u-switch.vue';
import BarChart from './packages/u-bar-chart.vue';
import Tabs from './packages/u-tabs.vue';
import Tab from './packages/u-tab.vue';

const Components = {
    Button,
    Checkbox,
    CircularProgress,
    LinearProgress,
    LinearLayout,
    Link,
    ListView,
    ListViewItem,
    TreeView,
    TreeViewNode,
    Pagination,
    RouterItem,
    Sample,
    Switch,
    BarChart,
    Tabs,
    Tab,
};

export {
    Button,
    Checkbox,
    CircularProgress,
    LinearProgress,
    LinearLayout,
    Link,
    ListView,
    ListViewItem,
    TreeView,
    TreeViewNode,
    Pagination,
    RouterItem,
    Sample,
    Switch,
    BarChart,
    Tabs,
    Tab,
};

const Library = {
    install(Vue) {
        for (const key in directives)
            Vue.directive(key, directives[key]);
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    },
};

export default Library;
