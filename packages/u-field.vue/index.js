import Emitter from 'u-emitter.vue';

export default {
    name: 'u-field',
    mixins: [Emitter],
    created() {
        this.dispatch('u-form-item', 'addField', this);
        this.$on('input', () => {
            this.$emit('update:value', this.currentValue);
            this.dispatch('u-form-item', 'input', this.currentValue);
        });
        this.$on('focus', () => this.dispatch('u-form-item', 'focus', this.currentValue));
        this.$on('blur', () => this.dispatch('u-form-item', 'blur', this.currentValue));
    },
    destroyed() {
        this.dispatch('u-form-item', 'removeField', this);
    },
};
