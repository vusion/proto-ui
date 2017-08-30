import Emitter from 'u-emitter.vue';

export default {
    name: 'u-tree-view-node',
    rootName: 'u-tree-view',
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
            parent: undefined,
            root: undefined,
        };
    },
    computed: {
        selected() {
            return this.root.selectedNode === this;
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.dispatch(this.$options.name, 'addNode', this);
        if (!this.parent)
            this.dispatch(this.$options.rootName, 'addNode', this);

        this.$on('addNode', (node) => {
            node.root = this.root;
            node.parent = this;
            this.nodes.push(node);
        });
        this.$on('removeNode', (node) => {
            node.root = undefined;
            node.parent = undefined;
            this.nodes.splice(this.nodes.indexOf(node), 1);
        });
    },
    destroyed() {
        this.dispatch(this.$options.rootName, 'removeNode', this);
        this.dispatch(this.$options.name, 'removeNode', this);
    },
    methods: {
        /**
         * @method - Select this node
         */
        select() {
            if (this.disabled || this.root.readonly || this.root.disabled)
                return;

            let cancel = false;
            this.$emit('select', {
                value: this.value,
                node: this.node,
                $node: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.root.select(this);
        },
        enterItem(e) {
            this.root.$emit('enter-item', this.node, e);
        },
        leaveItem(e) {
            this.root.$emit('leave-item', this.node, e);
        },
        /**
         * @method - Expand or collapse this node
         * @param  {boolean?} expanded - Expanded or Collapsed. If this param is undefined, it will toggle between two states
         */
        toggle(expanded) {
            if (this.disabled || this.root.readonly || this.root.disabled)
                return;

            const oldExpanded = this.currentExpanded;
            if (expanded === undefined)
                expanded = !this.currentExpanded;

            let cancel = false;
            this.$emit('toggle', {
                expanded,
                oldExpanded,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentExpanded = expanded;

            this.$emit('update:expanded', expanded);
            if (expanded)
                this.$emit('expand');
            else
                this.$emit('collapse');

            this.root.toggle(this, expanded, oldExpanded);
        },
    },
};
