import Base from 'u-base.vue';

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
