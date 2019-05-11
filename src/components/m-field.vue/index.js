import MEmitter from '../m-emitter.vue';

export const MField = {
    name: 'm-field',
    isField: true,
    mixins: [MEmitter],
    data() {
        return {
            formItemVM: undefined,
        };
    },
    created() {
        this.dispatch(($parent) => $parent.$options.name && $parent.$options.name.startsWith('u-form-item') || $parent.$options.isField, 'add-field-vm', this);
        this.$on('input', (value) => this.formItemVM && this.formItemVM.$emit('input', value));
        this.$on('change', ($event) => this.formItemVM && this.formItemVM.$emit('change', $event));
        this.$on('focus', () => this.formItemVM && this.formItemVM.$emit('focus'));
        this.$on('blur', () => this.formItemVM && this.formItemVM.$emit('blur'));
    },
    destroyed() {
        this.formItemVM && this.formItemVM.$emit('remove-field-vm', this);
    },
};

export default MField;
