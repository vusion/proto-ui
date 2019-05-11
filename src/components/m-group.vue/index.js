import MEmitter from '../m-emitter.vue';

export const MGroup = {
    name: 'm-group',
    parentName: 'm-parent',
    childName: 'm-child',
    mixins: [MEmitter],
    props: {
        title: String,
        collapsible: { type: Boolean, default: undefined },
        expanded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
            itemVMs: [],
            currentExpanded: this.expanded,
        };
    },
    computed: {
        currentCollapsible() {
            return this.collapsible === undefined && this.parentVM ? this.parentVM.collapsible : this.collapsible;
        },
    },
    watch: {
        expanded(expanded) {
            this.currentExpanded = expanded;
        },
    },
    created() {
        this.$contact(this.$options.parentName, (parentVM) => {
            this.parentVM = parentVM;
            parentVM.groupVMs.push(this);
        });
    },
    destroyed() {
        this.$contact(this.$options.parentName, (parentVM) => {
            parentVM.groupVMs.splice(parentVM.groupVMs.indexOf(this), 1);
            this.parentVM = undefined;
        });
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
            }, this);
            if (cancel)
                return;

            this.currentExpanded = expanded;
            this.$emit('update:expanded', expanded, this);

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
            }, this);

            this.parentVM.onToggle({
                expanded,
                groupVM: this,
            });
        },
    },
};

export { MGroupParent } from './parent.vue';

export default MGroup;
