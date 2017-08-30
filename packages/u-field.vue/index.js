import Emitter from 'u-emitter.vue';

export default {
    name: 'u-field',
    mixins: [Emitter],
    created() {
        this.dispatch('u-form-item', 'addField', this);
        this.$on('input', (value) => {
            this.$emit('update:value', value);
            this.dispatch('u-form-item', 'input', value);
        });
        this.$on('focus', () => this.dispatch('u-form-item', 'focus'));
        this.$on('blur', () => this.dispatch('u-form-item', 'blur'));
    },
    destroyed() {
        this.dispatch('u-form-item', 'removeField', this);
    },
};
