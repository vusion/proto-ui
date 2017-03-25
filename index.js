import Vue from 'vue';

import Base from 'v-base.vue';
import Button from 'v-button.vue';
import CircularProgress from 'v-circular-progress.vue';
import LinearProgress from 'v-linear-progress.vue';
import ListView from 'v-list-view.vue';
import Item from 'v-item.vue';
import Pagination from 'v-pagination.vue';
import BarChart from 'v-bar-chart.vue';
import Sample from 'v-sample.vue';

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
