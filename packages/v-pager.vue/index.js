import Base from 'v-base.vue';

const Pager = Base.extend({
    name: 'v-pager',
    props: {
        total: { type: Number, default: 11 },
        current: { type: Number, default: 1 },
        middle: { type: Number, default: 5 },
        side: { type: Number, default: 2 },
    },
    data() {
        return {
            radius: 45,
        };
    },
    computed: {

    },
    methods: {
        select(page) {

        },
    }
});

export default Pager;
