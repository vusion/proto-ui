import Checkbox from '../u-checkbox.vue';

export default {
    name: 'u-checkbox--0',
    mixins: [Checkbox],

    watch: {
        currentValue(value) {
            this.watchValue(value);
        },
    },
    created() {
        this.$nextTick(() => this.watchValue(this.value));
    },
    methods: {
        watchValue(value) {
            this.$refs.checkbox.indeterminate = value === null;
        },
    },
};
