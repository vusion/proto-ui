import UCascadeSelect from '../u-cascade-select.vue';
import region from './region.json';

const URegionSelect = {
    name: 'u-region-select',
    extends: UCascadeSelect,
    props: {
        data: { type: Array, default() { return region; } },
        field: { type: String, default: 'value' },
        categories: { type: Array, default() {
            return [
                { label: '省' },
                { label: '市' },
                { label: '区' },
            ];
        } },
    },
};

export { URegionSelect };
export default URegionSelect;
