import Base from 'u-base.vue';

const TreeViewNode = Base.extend({
    name: 'u-tree-view-node',
    props: {
        text: String,
        value: null,
        data: Array,
        disabled: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            return this.$ancestor.selectedNode === this;
        },
    },
    created() {
        this.$ancestor = this.$parent.$ancestor;
    },
    methods: {
        /**
         * @method select() - Select this node
         * @public
         * @return {void}
         */
        select() {
            if (this.disabled)
                return;

            this.$ancestor.select(this);
        },
        enterItem(e) {
            this.$ancestor.$emit('enter-item', this.node, e);
        },
        leaveItem(e) {
            this.$ancestor.$emit('leave-item', this.node, e);
        },
    },
});

export default TreeViewNode;
