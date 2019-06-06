import Emitter from '../u-emitter.vue';

export default {
    name: 'm-field',
    isField: true,
    mixins: [Emitter],
    data() {
        return {
            validatorVM: undefined,
            formItemVM: undefined, // @compat
        };
    },
    created() {
        this.dispatch(($parent) => $parent.$options.name && $parent.$options.name.startsWith('u-form-item')
            || $parent.$options.isField || $parent.$options.isValidator, 'add-field-vm', this);

        this.$on('update', (value) => this.validatorVM && this.validatorVM.$emit('update', value));
        this.$on('input', (value) => this.validatorVM && this.validatorVM.$emit('input', value));
        this.$on('change', ($event) => this.validatorVM && this.validatorVM.$emit('change', $event));
        this.$on('focus', () => this.validatorVM && this.validatorVM.$emit('focus'));
        this.$on('blur', () => this.validatorVM && this.validatorVM.$emit('blur'));
    },
    destroyed() {
        this.validatorVM && this.validatorVM.$emit('remove-field-vm', this);
    },
};
