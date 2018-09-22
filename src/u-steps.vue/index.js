import MParent from '../m-parent.vue';

export default {
    name: 'u-steps',
    childName: 'u-step',
    mixins: [MParent],
    props: {
        value: { type: Number, default: 0 },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            // inherit: itemVMs: [],
            selectedVM: undefined,
            // currentValue: this.value,
        };
    },
    watch: {
        value(value, oldValue) {
            // this.currentValue = +value;
            this.watchValue(value, oldValue);
            this.$emit('change', { value, oldValue }, this);
        },
        itemVMs() {
            this.watchValue(this.value);
        },
        // currentValue(value, oldValue) {
        //     value = Math.max(0, Math.min(value, this.itemVMs.length));
        //     if (value === oldValue)
        //         return;

        //     this.watchValue(value, oldValue);
        //     this.$emit('change', {
        //         value,
        //         oldValue,
        //     }, this);
        // },
    },
    mounted() {
        this.watchValue(this.value);
    },
    methods: {
        watchValue(value) {
            this.selectedVM = this.itemVMs[value];
        },
    },
};
