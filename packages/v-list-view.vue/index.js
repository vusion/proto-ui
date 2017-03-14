import Base from 'v-base.vue';

const ListView = Base.extend({
    name: 'v-list-view',
    props: {
        list: Array,
        field: {
            type: String,
            default: 'text',
        }
    }
});

export default ListView;
