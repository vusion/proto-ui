import Base from 'vi-base.vue';

const ListView = Base.extend({
    name: 'vi-list-view',
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
