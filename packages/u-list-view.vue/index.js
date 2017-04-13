import Base from 'u-base.vue';

const ListView = Base.extend({
    name: 'u-list-view',
    data() {
        return {
            value: undefined,
            selectedItem: undefined,
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
