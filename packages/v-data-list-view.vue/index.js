import Base from 'v-base.vue';

const DataListView = Base.extend({
    name: 'v-data-list-view',
    props: {
        list: Array,
        field: {
            type: String,
            default: 'text',
        },
    },
});

export default DataListView;
