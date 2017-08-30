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
    childName: 'u-tree-view-node',
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
            ChildComponent: this.$options.childName, // easy for SubComponent inheriting
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
                    let node = this.selectedNode.parent;
                    while (node !== this.root) {
                        node.currentExpanded = true;
                        node = node.parent;
                    }
                }
            }
        },
    },
    created() {
        this.$on('addNode', (node) => {
            node.root = this;
            node.parent = this;
            this.nodes.push(node);
        });
        this.$on('removeNode', (node) => {
            node.root = undefined;
            node.parent = undefined;
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

            const oldValue = this.value;

            let cancel = false;
            this.$emit('select', {
                value: $node && $node.value,
                oldValue,
                node: $node && $node.node,
                $node,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            if (this.cancelable && this.selectedNode === $node)
                this.selectedNode = undefined;
            else
                this.selectedNode = $node;

            const value = this.selectedNode && this.selectedNode.value;
            const node = this.selectedNode && this.selectedNode.node;

            this.$emit('input', value);
            this.$emit('change', {
                value,
                oldValue,
                node,
                $node: this.selectedNode,
            });
        },
        toggle($node, expanded, oldExpanded) {
            this.$emit('toggle', { expanded, oldExpanded, $node });

            if (expanded)
                this.$emit('expand', { $node });
            else
                this.$emit('collapse', { $node });
        },
    },
};

export default TreeView;
