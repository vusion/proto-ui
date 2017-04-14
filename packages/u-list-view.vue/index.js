import Base from 'u-base.vue';

/**
 * @class ListView
 * @extends Base
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const ListView = Base.extend({
    name: 'u-list-view',
    props: {
        value: { type: null },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            items: [],
            value_: this.value,
            selectedItem_: undefined,
        };
    },
    computed: {
        selectedItem: {
            get() {
                if (this.value_ === undefined)
                    return this.selectedItem_;
                else
                    return this.items.find((item) => item.value === this.value_);
            },
            set(item) {
                if (item) {
                    this.selectedItem_ = item;
                    this.value_ = item.value;
                } else {
                    this.selectedItem_ = undefined;
                    this.value_ = undefined;
                }
            },
        },
    },
    methods: {
        add(item) {
            this.items.push(item);
        },
        remove(item) {
            const index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);
        },
        /**
         * @method select(item) - Select a item
         * @public
         * @param  {number} item - Item to select
         * @return {void}
         */
        select(item) {
            if (this.readonly || this.disabled)
                return;

            let selectedItem;
            if (this.cancelable && this.selectedItem === item)
                selectedItem = undefined;
            else
                selectedItem = item;
            this.selectedItem = selectedItem;

            /**
             * @event select - Emit when selecting an item
             * @property {number} selectedItem - The selected item
             */
            this.$emit('select', {
                selectedItem,
                value: selectedItem && selectedItem.value,
            });
        },
    },
});

export default ListView;
