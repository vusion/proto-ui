import i18n from './i18n';
import MDynamic from '../m-dynamic.vue';
import UValidator from '../u-validator.vue';

export const UFormTableView = {
    name: 'u-form-table-view',
    i18n,
    mixins: [MDynamic, UValidator],
    props: {
        border: { type: Boolean, default: false },
        dynamic: { type: Boolean, default: false },
    },
    data() {
        return {
            columnVMs: [],
        };
    },
};

export { UFormTableViewRow } from './row.vue';
export { UFormTableViewColumn } from './column.vue';

export default UFormTableView;
