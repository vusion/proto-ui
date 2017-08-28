import Emitter from 'u-emitter.vue';

export default {
    name: 'u-tree-view-node',
    mixins: [Emitter],
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        node: Object,
    },
    data() {
        return {
            nodes: [],
            currentExpanded: this.expanded,
            treeViewParent: undefined,
            treeView: undefined,
        };
    },
    computed: {
        selected() {
            return this.treeView.selectedNode === this;
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.dispatch('u-tree-view-node', 'addNode', this);
        if (!this.treeViewParent)
            this.dispatch('u-tree-view', 'addNode', this);

        this.$on('addNode', (node) => {
            node.treeView = this.treeView;
            node.treeViewParent = this;
            this.nodes.push(node);
        });
        this.$on('removeNode', (node) => {
            node.treeView = undefined;
            node.treeViewParent = undefined;
            this.nodes.splice(this.nodes.indexOf(node), 1);
        });
    },
    destroyed() {
        this.dispatch('u-tree-view-node', 'removeNode', this);
        this.dispatch('u-tree-view', 'removeNode', this);
    },
    methods: {
        /**
         * @method - Select this node
         */
        select() {
            if (this.disabled || this.treeView.readonly || this.treeView.disabled)
                return;

            this.$emit('select', {
                value: this.value,
                node: this.node,
                $node: this,
            });

            this.treeView.select(this);
        },
        enterItem(e) {
            this.treeView.$emit('enter-item', this.node, e);
        },
        leaveItem(e) {
            this.treeView.$emit('leave-item', this.node, e);
        },
        /**
         * @method - Expand or collapse this node
         * @param  {boolean?} expanded - Expanded or Collapsed. If this param is undefined, it will toggle between two states
         */
        toggle(expanded) {
            if (this.disabled || this.treeView.readonly || this.treeView.disabled)
                return;

            if (expanded === undefined)
                expanded = !this.currentExpanded;
            this.currentExpanded = expanded;

            this.$emit('toggle', expanded);
            this.$emit('update:expanded', expanded);

            this.treeView.onNodeToggle(this, expanded);
        },
    },
};
