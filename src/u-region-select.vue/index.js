import CascadeSelect from '../u-cascade-select.vue';
import i18n from './i18n';

export default {
    name: 'u-region-select',
    extends: CascadeSelect,
    i18n,
    props: {
        field: { type: String, default: 'value' },
        categories: { type: Array, default() {
            return [
                { label: this.$t('province') },
                { label: this.$t('city') },
                { label: this.$t('district') },
            ];
        } },
    },
    created() {
        import('./region.json').then((region) => this.currentData = region);
    },
};
