export default {
    created() {
        this.transferClassStyle();
    },
    /**
     * @TODO: beforeUpdate 有 bug，要在 vue@2.5.17-beta.0 以后支持动态 class 和 style。。
     */
    beforeUpdate() {
        this.transferClassStyle();
    },
    methods: {
        transferClassStyle() {
            const KEYS = ['staticClass', 'class', 'staticStyle', 'style', 'normalizedStyle'];
            this.$transferredClass = [this.$vnode.data.staticClass, this.$vnode.data.class];
            this.$transferredStyle = [this.$vnode.data.staticStyle, this.$vnode.data.style];
            KEYS.forEach((key) => {
                delete this.$vnode.data[key];
            });
        },
    },
};
