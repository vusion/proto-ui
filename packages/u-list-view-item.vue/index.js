import Base from 'u-base.vue';

/**
 * @class ListViewItem
 * @extends Base
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
const ListViewItem = Base.extend({
    name: 'u-list-view-item',
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            return this.$parent.selectedItem === this;
        },
    },
    created() {
        this.$parent.add(this);
    },
    destroy() {
        this.$parent.remove(this);
    },
    methods: {
        /**
         * @method select() - Select this item
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
