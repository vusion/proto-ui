import Vue from 'vue';

import Base from './packages/vi-base.vue';
import Button from './packages/vi-button.vue';
import CircularProgress from './packages/vi-circular-progress.vue';
import LinearProgress from './packages/vi-linear-progress.vue';
import ListView from './packages/vi-list-view.vue';
import Item from './packages/vi-item.vue';
import Pagination from './packages/vi-pagination.vue';
import BarChart from './packages/vi-bar-chart.vue';
import Sample from './packages/vi-sample.vue';

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
