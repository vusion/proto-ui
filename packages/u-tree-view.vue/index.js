import TreeViewNode from 'u-tree-view-node.vue';

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
            ChildComponent: TreeViewNode, // easy for SubComponent to extend
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
                    let node = this.selectedNode.$parent;
                    while (node !== this.$ancestor) {
                        node.expanded_ = true;
                        node = node.$parent;
                    }
                }
            }
        },
    },
    beforeCreate() {
        this.$ancestor = this;
    },
    created() {
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, nodes have not been pushed.
        this.$nextTick(() => TreeView.options.watch.value.call(this, this.value));
    },
    methods: {
        add(node) {
            this.nodes.push(node);
        },
        remove(node) {
            const index = this.nodes.indexOf(node);
            ~index && this.nodes.splice(index, 1);
        },
        select(node) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedNode === node)
                this.selectedNode = undefined;
            else
                this.selectedNode = node;

            this.$emit('select', {
                selectedNode: this.selectedNode,
                value: this.selectedNode && this.selectedNode.value,
            });
        },
        onNodeToggle(node, expanded) {
            this.$emit('toggle', {
                node,
                expanded,
            });
        },
    },
};

export default TreeView;
