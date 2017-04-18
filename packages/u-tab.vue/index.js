import Base from 'u-base.vue';
import { RouterItem } from 'u-base.vue/mixins';

/**
 * @class Tab
 * @extends Base
 * @param {string}              props.title                     Tab title
 * @param {boolean=false}       props.hidden                    Hide this tab
 * @param {boolean=false}       props.disabled                  Disabled
 * @param {string|Object}       props.to                        The target location of this link
 * @param {boolean=false}       props.replace                   Setting `replace` prop will call `router.replace()` instead of `router.push()` when clicked
 * @param {boolean=false}       props.exact                     Active matching behavior is inclusive match
 */
const Tab = Base.extend({
    name: 'u-tab',
    mixins: [RouterItem],
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
