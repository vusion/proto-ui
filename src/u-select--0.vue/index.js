import Select from '../u-select.vue';

export default {
    name: 'u-select--0',
    childName: 'u-select--0-item',
    mixins: [Select],
    methods: {
        select($event) {
            const oldValue = this.value;
            const value = $event.target.value || undefined;
            this.watchValue(value);
            const item = this.selectedVM && this.selectedVM.item;

            this.$emit('input', value);
            this.$emit('update:value', value);
            this.$emit('select', {
                value,
                oldValue,
                item,
                itemVM: this.selectedVM,
            });
        },
    },
};
