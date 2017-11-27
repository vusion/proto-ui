import Field from '../u-field.vue';

export default {
    name: 'u-radio',
    parentName: 'u-radios',
    mixins: [Field],
    props: {
        label: null,
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.focus;
            delete listeners.blur;
            return listeners;
        },
        selected() {
            return this.parentVM.selectedVM === this;
        },
        currentDisabled() {
            return this.disabled || this.parentVM && this.parentVM.disabled;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        select() {
            if (this.readonly || this.disabled)
                return;
            if (this.parentVM && (this.parentVM.readonly || this.parentVM.disabled))
                return;

            let cancel = false;
            this.$emit('before-select', {
                label: this.label,
                itemVM: this,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.parentVM && this.parentVM.select(this);
        },
    },
};
