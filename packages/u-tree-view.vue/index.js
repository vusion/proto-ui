import Base from 'u-base.vue';
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

/**
 * @class TreeView
 * @extends Base
 * @param {Array}               props.data                      Pass a data tree and don't need to loop tags manually
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const TreeView = Base.extend({
    name: 'u-tree-view',
    props: {
        data: Array,
        value: null,
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
        /**
         * @method select(node) - Select a node
         * @public
         * @param  {TreeViewNode} node - Node to select
         * @return {void}
         */
        select(node) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedNode === node)
                this.selectedNode = undefined;
            else
                this.selectedNode = node;

            /**
             * @event select - Emit when selecting a node
             * @property {TreeViewNode} selectedNode - The selected node
             * @property {any} value - Value of this node
             */
            this.$emit('select', {
                selectedNode: this.selectedNode,
                value: this.selectedNode && this.selectedNode.value,
            });
        },
        onNodeToggle(node, expanded) {
            /**
             * @event toggle - Emit when expanding or collapsing this node
             * @property {TreeViewNode} node - Node to toggle
             * @property {boolean} expanded - Expanded or Collapsed
             */
            this.$emit('toggle', {
                node,
                expanded,
            });
        },
    },
});

export default TreeView;
