import Vue from 'vue';

import Base from './packages/u-base.vue';
import Button from './packages/u-button.vue';
import CircularProgress from './packages/u-circular-progress.vue';
import LinearProgress from './packages/u-linear-progress.vue';
import ListView from './packages/u-list-view.vue';
import Item from './packages/u-item.vue';
import Pagination from './packages/u-pagination.vue';
import BarChart from './packages/u-bar-chart.vue';
import Sample from './packages/u-sample.vue';

const Components = {
    Base,
    Button,
    CircularProgress,
    LinearProgress,
    ListView,
    Item,
    Pagination,
    BarChart,
    Sample,
};

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));

export {
    Base,
    Button,
    CircularProgress,
    LinearProgress,
    ListView,
    Pagination,
    BarChart,
    Sample,
};
