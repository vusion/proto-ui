/**
 * @class ListViewItem
 * @extends Base
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
export default {
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
    beforeCreate() {
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
    methods: {
        /**
         * @method select() - Select this item
         * @public
         * @return {void}
         */
        select() {
            if (this.disabled || this.$parent.readonly || this.$parent.disabled)
                return;

            /**
             * @event select - Emit when selecting this item
             * @property {ListViewItem} selectedItem - This item
             * @property {any} value - Value of this item
             */
            this.$emit('select', {
                selectedItem: this,
                value: this.value,
            });

            this.$parent.select(this);
        },
    },
};
