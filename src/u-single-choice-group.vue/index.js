import Emitter from '../u-emitter.vue';

export default {
    name: 'u-single-choice-group',
    parentName: 'u-single-choices',
    childName: 'u-single-choice',
    mixins: [Emitter],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            groupVMs: [],
            itemVMs: [],
            currentExpanded: this.expanded,
        };
    },
    computed: {
        currentCollapsible() {
            if (this.collapsible !== undefined)
                return this.collapsible;
            else if (this.parentVM)
                return this.parentVM.currentCollapsible !== undefined ? this.parentVM.currentCollapsible : this.parentVM.collapsible;
        },
        expandTrigger() {
            return this.parentVM ? this.parentVM.expandTrigger : 'click';
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.$on('add-group-vm', (groupVM) => {
            groupVM.parentVM = this;
            this.groupVMs.push(groupVM);
        });
        this.$on('remove-group-vm', (groupVM) => {
            groupVM.parentVM = undefined;
            this.groupVMs.splice(this.groupVMs.indexOf(groupVM), 1);
        });
        this.$on('add-item-vm', (itemVM) => {
            itemVM.groupVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.groupVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.dispatch(() => this.$options.parentName || this.$options.name, 'add-group-vm', this);
    },
    destroyed() {
        this.dispatch(() => this.$options.parentName || this.$options.name, 'remove-group-vm', this);
    },
    methods: {
        toggle(expanded) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            const oldExpanded = this.currentExpanded;

            if (expanded === undefined)
                expanded = !this.currentExpanded;

            if (expanded === oldExpanded)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                expanded,
                groupVM: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded);

            if (this.parentVM.accordion) {
                this.parentVM.groupVMs.forEach((groupVM) => {
                    if (groupVM !== this) {
                        groupVM.currentExpanded = false;
                        groupVM.$emit('update:expanded', false);
                    }
                });
            }

            this.$emit('toggle', {
                expanded,
                groupVM: this,
            });

            this.parentVM.onToggle({
                expanded,
                groupVM: this,
            });
        },
        onToggle($event) {
            this.parentVM.onToggle($event);
        },
    },
};
