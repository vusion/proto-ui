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
            this.dispatch('u-form-item', 'input', value);
        });
        this.$on('change', ($event) => this.dispatch('u-form-item', 'change', $event.value));
        this.$on('focus', () => this.dispatch('u-form-item', 'focus'));
        this.$on('blur', () => this.dispatch('u-form-item', 'blur'));
    },
    destroyed() {
        this.dispatch(($parent) => $parent.$options.name === 'u-form-item' || $parent.$options.isField, 'remove-field-vm', this);
    },
};
