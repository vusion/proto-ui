import Base from 'u-base.vue';

/**
 * @class ListViewItem
 * @extends Base
 * @param {string}              attrs.title                  Title Tooltip
 */
const ListViewItem = Base.extend({
    name: 'u-list-view-item',
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        selected_() {
            return this.$parent.selectedItem === this;
        },
    },
    created() {
        if (!this.$parent.selectedItem === null && this.selected)
            this.$parent.selectedItem = this;
    },
    methods: {
        /**
         * @method select() Select this item
         * @public
         * @return {void}
         */
        select() {
            if (this.disabled)
                return;

            this.$parent.select(this);
        },
    },
});

export default ListViewItem;
