import './packages/u-base.vue/base.css';
import * as directives from './packages/u-base.vue/directives';

import Button from './packages/u-button.vue';
import CircularProgress from './packages/u-circular-progress.vue';
import Link from './packages/u-link.vue';
import LinearProgress from './packages/u-linear-progress.vue';
import LinearLayout from './packages/u-linear-layout.vue';
import ListView from './packages/u-list-view.vue';
import ListViewItem from './packages/u-list-view-item.vue';
import TreeView from './packages/u-tree-view.vue';
import TreeViewNode from './packages/u-tree-view-node.vue';
import RouterItem from './packages/u-router-item.vue';
import Pagination from './packages/u-pagination.vue';
import BarChart from './packages/u-bar-chart.vue';
import Sample from './packages/u-sample.vue';
import Tabs from './packages/u-tabs.vue';
import Tab from './packages/u-tab.vue';

const Components = {
    Button,
    CircularProgress,
    Link,
    LinearProgress,
    LinearLayout,
    ListView,
    ListViewItem,
    TreeView,
    TreeViewNode,
    RouterItem,
    Pagination,
    BarChart,
    Sample,
    Tabs,
    Tab,
};

export {
    Button,
    CircularProgress,
    Link,
    LinearProgress,
    LinearLayout,
    ListView,
    ListViewItem,
    TreeView,
    TreeViewNode,
    RouterItem,
    Pagination,
    BarChart,
    Sample,
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
