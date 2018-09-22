import MParent from '../m-parent.vue';

export default {
    name: 'u-collapse',
    childName: 'u-collapse-item',
    mixins: [MParent],
    props: {
        accordion: { type: Boolean, default: false },
        expandTrigger: { type: String, default: 'click' },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: itemVMs: [],
        };
    },
    methods: {
        onToggle(itemVM, expanded) {
            this.$emit('toggle', {
                expanded,
                itemVM,
            }, this);
        },
        toggleAll(expanded) {
            this.itemVMs.forEach((itemVM) => itemVM.toggle(expanded));
        },
    },
};
