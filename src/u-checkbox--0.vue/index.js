import Checkbox from '../u-checkbox.vue';

export default {
    name: 'u-checkbox--0',
    mixins: [Checkbox],

    watch: {
        currentValue(value) {
            this.watchCurrentValue(value);
        },
    },
    created() {
        this.$nextTick(() => this.watchCurrentValue(this.currentValue));
    },
    methods: {
        watchCurrentValue(value) {
            this.$refs.checkbox.indeterminate = value === null;
        },
    },
};
