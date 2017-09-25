import Emitter from 'u-emitter.vue';

export default {
    name: 'u-field',
    isField: true,
    mixins: [Emitter],
    data() {
        return {
            formItemVM: undefined,
        };
    },
    created() {
        this.dispatch(($parent) => $parent.$options.name === 'u-form-item' || $parent.$options.isField, 'add-field-vm', this);
        this.$on('input', (value) => {
            this.$emit('update:value', value);
            this.formItemVM && this.formItemVM.$emit('input', value);
        });
        this.$on('change', ($event) => this.formItemVM && this.formItemVM.$emit('change', $event.value));
        this.$on('focus', () => this.formItemVM && this.formItemVM.$emit('focus'));
        this.$on('blur', () => this.formItemVM && this.formItemVM.$emit('blur'));
    },
    destroyed() {
        this.formItemVM && this.formItemVM.$emit('remove-field-vm', this);
    },
};
