import Emitter from '../u-emitter.vue';

export default {
    name: 'u-collapse-item',
    parentName: 'u-collapse',
    mixins: [Emitter],
    props: {
        title: String,
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            currentExpanded: this.expanded,
        };
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        toggle(expanded) {
            if (this.disabled || this.parentVM.disabled)
                return;

            // const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                itemVM: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', this.currentExpanded);

            if (this.parentVM.accordion) {
                this.parentVM.itemVMs.forEach((itemVM) => {
                    if (itemVM !== this) {
                        itemVM.currentExpanded = false;
                        itemVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded,
                itemVM: this,
            });

            this.parentVM.onToggle({
                expanded,
                itemVM: this,
            });
        },
    },
};

