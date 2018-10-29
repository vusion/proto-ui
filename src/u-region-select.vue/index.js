import UCascadeSelect from '../u-cascade-select.vue';

const URegionSelect = {
    name: 'u-region-select',
    extends: UCascadeSelect,
    props: {
        field: { type: String, default: 'value' },
        categories: { type: Array, default() {
            return [
                { label: '省' },
                { label: '市' },
                { label: '区' },
            ];
        } },
    },
    created() {
        import('./region.json').then((region) => this.currentData = region);
    },
};

export { URegionSelect };
export default URegionSelect;
