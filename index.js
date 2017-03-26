import Vue from 'vue';

import Base from './packages/v-base.vue';
import Button from './packages/v-button.vue';
import CircularProgress from './packages/v-circular-progress.vue';
import LinearProgress from './packages/v-linear-progress.vue';
import ListView from './packages/v-list-view.vue';
import Item from './packages/v-item.vue';
import Pagination from './packages/v-pagination.vue';
import BarChart from './packages/v-bar-chart.vue';
import Sample from './packages/v-sample.vue';

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
