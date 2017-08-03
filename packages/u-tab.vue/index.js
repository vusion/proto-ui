import RouterItem from 'u-router-item.vue';

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
export default {
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
    beforeCreate() {
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
};
