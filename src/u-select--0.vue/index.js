import Select from '../u-select.vue';

export default {
    name: 'u-select--0',
    childName: 'u-select--0-item',
    extends: Select,
    methods: {
        select($event) {
            const oldValue = this.value;
            let value = $event.target.value;
            // @TODO: 原生<select>只能储存字符串
            if (value === '' || value === undefined)
                value = undefined;
            else if (!isNaN(value))
                value = +value;

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
