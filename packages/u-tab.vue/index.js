import Base from 'u-base.vue';

/**
 * @class Tab
 * @extends Base
 * @param {string}              props.title                     Tab title
 * @param {boolean=false}       props.hidden                    Hide this tab
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Tab = Base.extend({
    name: 'u-tab',
    props: {
        title: String,
        hidden: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    computed: {
        visible() {
            return this.$parent.selectedTab === this;
        },
    },
    created() {
        this.$parent.add(this);
    },
    destroy() {
        this.$parent.remove(this);
    },
});

export default Tab;
