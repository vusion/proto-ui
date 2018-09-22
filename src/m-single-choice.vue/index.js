import MEmitter from '../m-emitter.vue';
import ULink from '../u-link.vue';
import { ellipsisTitle } from '../directives';

export default {
    name: 'm-single-choice',
    parentName: 'm-single-choices',
    groupName: 'm-single-choice-group',
    mixins: [MEmitter, ULink],
    directives: { ellipsisTitle },
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
        item: Object,
    },
    data() {
        return {
            currentSelected: false,
            parentVM: undefined,
        };
    },
    computed: {
        selected() {
            return this.parentVM.selectedVM === this;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
        this.dispatch(this.$options.groupName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
        this.dispatch(this.$options.groupName, 'remove-item-vm', this);
    },
    methods: {
        select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            this.$emit('click', e, this);

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.parentVM.select(this);
        },
    },
};
