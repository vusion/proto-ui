import Base from 'u-base.vue';
import TreeViewNode from 'u-tree-view-node.vue';

/**
 * @class TreeView
 * @extends Base
 * @param {Array}               props.data                      Data of tree
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const TreeView = Base.extend({
    name: 'u-tree-view',
    components: { [TreeViewNode.options.name]: TreeViewNode },
    props: {
        data: Array,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            selectedNode: undefined,
        };
    },
    created() {
        this.$ancestor = this;
    },
    methods: {
        /**
         * @method select(node) - Select a node
         * @public
         * @param  {number} node - Node to select
         * @return {void}
         */
        select(node) {
            if (this.readonly || this.disabled)
                return;

            let selectedNode = node;
            if (this.cancelable && this.selectedNode === node)
                selectedNode = undefined;
            else
                selectedNode = node;
            this.selectedNode = selectedNode;

            /**
             * @event select - Emit when selecting a node
             * @property {number} selectedNode - The selected node
             */
            this.$emit('select', {
                selectedNode,
                value: selectedNode && selectedNode.value,
            });
        },
    },
});

export default TreeView;
