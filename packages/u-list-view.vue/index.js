import Base from 'u-base.vue';
import ListViewItem from 'u-list-view-item.vue';

/**
 * @class ListView
 * @extends Base
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const ListView = Base.extend({
    name: 'u-list-view',
    props: {
        data: Array,
        value: null,
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: ListViewItem, // easy for SubComponent to extend
            items: [],
            selectedItem: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            if (this.selectedItem && this.selectedItem.value === value)
                return;
            if (value === undefined)
                this.selectedItem = undefined;
            else
                this.selectedItem = this.items.find((item) => item.value === value);
        },
    },
    created() {
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick
        // otherwise items have not been pushed.
        this.$nextTick(() => ListView.options.watch.value.call(this, this.value));
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
         * @method select(item) - Select an item
         * @public
         * @param  {ListViewItem} item - Item to select
         * @return {void}
         */
        select(item) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedItem === item)
                this.selectedItem = undefined;
            else
                this.selectedItem = item;

            /**
             * @event select - Emit when selecting an item
             * @property {ListViewItem} selectedItem - The selected item
             * @property {any} value - Value of selected item
             */
            this.$emit('select', {
                selectedItem: this.selectedItem,
                value: this.selectedItem && this.selectedItem.value,
            });
        },
    },
});

export default ListView;
