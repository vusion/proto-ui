import Base from 'u-base.vue';

/**
 * @class Tabs
 * @extends Base
 * @param {number=0}            props.selectedIndex             Index of selected tab
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 * @param {boolean=false}       props.router                    Use vue router to activate
 */
const Tabs = Base.extend({
    name: 'u-tabs',
    props: {
        selectedIndex: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            tabs: [],
            selectedIndex_: this.selectedIndex,
        };
    },
    computed: {
        selectedTab() {
            return this.tabs[this.selectedIndex_];
        },
    },
    methods: {
        add(tab) {
            this.tabs.push(tab);
        },
        remove(tab) {
            const index = this.tabs.indexOf(tab);
            ~index && this.tabs.splice(index, 1);
        },
        /**
         * @method select(index) - Select a tab
         * @public
         * @param  {number} index - Index of tab to select
         * @return {void}
         */
        select(index) {
            if (this.readonly || this.disabled || this.tabs[index].disabled)
                return;

            const tab = this.tabs[index];
            this.selectedIndex_ = index;

            /**
             * @event select - Emit when selecting a tab
             * @property {number} selectedTab - The selected tab
             * @property {number} selectedIndex - Index of selected tab
             */
            this.$emit('select', {
                selectedTab: tab,
                selectedIndex: index,
            });

            this.router && tab.navigate();
        },
    },
});

export default Tabs;
