import i18n from './i18n';

export const UComboPagination = {
    name: 'u-combo-pagination',
    i18n,
    props: {
        total: { type: Number, default: 11, validator: (value) => Number.isInteger(value) && value >= 0 },
        page: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value > 0 },
        pageSize: { type: Number, default: 20 },
        pageSizeOptions: { type: Array, default() { return [10, 20, 50]; } },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        showTotal: { type: Boolean, default: false },
        showSizer: { type: Boolean, default: false },
        showJumper: { type: Boolean, default: false },
    },
    data() {
        return {
            currentPage: this.page,
        };
    },
    watch: {
        page(page) {
            this.currentPage = page;
        },
    },
    methods: {
        onChange(page, oldPage) {
            if (page === oldPage)
                return;

            this.currentPage = page;
            this.$emit('change', { page, oldPage }, this);
        },
        onSelectPageSize($event) {
            this.$emit('update:page-size', $event.value, this);
            this.$emit('change-page-size', {
                pageSize: $event.value,
                oldPageSize: $event.oldValue,
                pageSizeOptions: this.pageSizeOptions,
            }, this);
        },
    },
};

export default UComboPagination;
