import Emitter from 'u-emitter.vue';

export default {
    name: 'u-field',
    mixins: [Emitter],
    created() {
        this.$on('input', () => this.dispatch('u-form-item', 'input', this.currentValue));
        this.$on('focus', () => this.dispatch('u-form-item', 'focus', this.currentValue));
        this.$on('blur', () => this.dispatch('u-form-item', 'blur', this.currentValue));
    },
};
