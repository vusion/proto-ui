import Field from 'u-field.vue';

const walk = (root, func) => {
    let queue = [];
    queue = queue.concat(root.nodes);
    let node;
    while ((node = queue.shift())) {
        queue = queue.concat(node.nodes);
        const result = func(node);
        if (result !== undefined)
            return result;
    }
};

const find = (root, func) => walk(root, (node) => {
    if (func(node))
        return node;
});

const TreeView = {
    name: 'u-tree-view',
    mixins: [Field],
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: 'u-tree-view-node', // easy for SubComponent to extend
            nodes: [],
            selectedNode: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            if (this.selectedNode && this.selectedNode.value === value)
                return;
            if (value === undefined)
                this.selectedNode = undefined;
            else {
                this.selectedNode = find(this, (node) => node.value === value);
                if (this.selectedNode) {
                    let node = this.selectedNode.treeViewParent;
                    while (node !== this.treeView) {
                        node.currentExpanded = true;
                        node = node.treeViewParent;
                    }
                }
            }
        },
    },
    created() {
        this.$on('addNode', (node) => {
            node.treeView = this;
            node.treeViewParent = this;
            this.nodes.push(node);
        });
        this.$on('removeNode', (node) => {
            node.treeView = undefined;
            node.treeViewParent = undefined;
            this.nodes.splice(this.nodes.indexOf(node), 1);
        });
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, nodes have not been pushed.
        this.$nextTick(() => TreeView.watch.value.call(this, this.value));
    },
    methods: {
        select($node) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedNode === $node)
                this.selectedNode = undefined;
            else
                this.selectedNode = $node;

            const value = this.selectedNode && this.selectedNode.value;
            const node = this.selectedNode && this.selectedNode.node;
            this.$emit('select', {
                value,
                node,
                $node: this.selectedNode,
            });
            this.$emit('input', value);
        },
        onNodeToggle($node, expanded) {
            this.$emit('toggle', {
                expanded,
                $node,
            });
        },
    },
};

export default TreeView;
