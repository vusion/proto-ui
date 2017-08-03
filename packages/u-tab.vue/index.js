import RouterItem from 'u-router-item.vue';

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
