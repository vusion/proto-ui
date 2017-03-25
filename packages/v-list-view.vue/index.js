import Base from 'v-base.vue';

const ListView = Base.extend({
    name: 'v-list-view',
    data() {
        return {
            value: undefined,
            selectedItem: null,
        };
    },
    methods: {
        /**
         * @method select(item) Select this item
         * @public
         * @return {void}
         */
        select(item) {
            this.selectedItem = item;
        },
    },
});

export default ListView;
