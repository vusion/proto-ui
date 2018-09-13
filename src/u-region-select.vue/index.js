import CascadeSelect from '../u-cascade-select.vue';
import region from './region.json';

export default {
    name: 'u-region-select',
    extends: CascadeSelect,
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
