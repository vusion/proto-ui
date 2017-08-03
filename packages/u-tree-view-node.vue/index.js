export default {
    name: 'u-tree-view-node',
    props: {
        data: Array,
        text: String,
        value: null,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            nodes: [],
            expanded_: this.expanded,
        };
    },
    computed: {
        selected() {
            return this.$ancestor.selectedNode === this;
        },
    },
    beforeCreate() {
        this.$ancestor = this.$parent.$ancestor;
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
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
         * @method - Select this node
         */
        select() {
            if (this.disabled || this.$ancestor.readonly || this.$ancestor.disabled)
                return;

            this.$emit('select', {
                selectedNode: this,
                value: this.value,
            });

            this.$ancestor.select(this);
        },
        enterItem(e) {
            this.$ancestor.$emit('enter-item', this.node, e);
        },
        leaveItem(e) {
            this.$ancestor.$emit('leave-item', this.node, e);
        },
        /**
         * @method - Expand or collapse this node
         * @param  {boolean?} expanded - Expanded or Collapsed. If this param is undefined, it will toggle between two states
         */
        toggle(expanded) {
            if (this.disabled || this.$ancestor.readonly || this.$ancestor.disabled)
                return;

            if (expanded === undefined)
                expanded = !this.expanded_;
            this.expanded_ = expanded;

            this.$emit('toggle', {
                expanded,
            });

            this.$ancestor.onNodeToggle(this, expanded);
        },
    },
};
