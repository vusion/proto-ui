export const UPagination = {
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11, validator: (value) => Number.isInteger(value) && value >= 0 },
        page: { type: Number, default: 1, validator: (value) => Number.isInteger(value) && value > 0 },
        side: { type: Number, default: 2, validator: (value) => Number.isInteger(value) && value > 0 },
        around: { type: Number, default: 5, validator: (value) => Number.isInteger(value) && value > 0 && value % 2 === 1 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
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
        currentPage(page, oldPage) {
            this.$emit('change', { page, oldPage }, this);
        },
    },
    computed: {
        pages() {
            const { around, total, side, currentPage } = this;
            const pages = [];
            const getAroundRange = function (currentPage, around, total) {
                let start = currentPage - (around >> 1);
                let end = start + around - 1;
                if (start <= 0) {
                    start = 1;
                    end = Math.min(total, start + around - 1);
                } else if (end > total) {
                    start = Math.max(total - around + 1, 1);
                    end = total;
                }
                return [start, end];
            };
            const getPages = function (start, end) {
                const prev = pages[pages.length - 1] || 0;
                if (start - 1 > prev) {
                    pages.push(undefined);
                }
                for (let i = start; i <= end; i++) {
                    pages.push(i);
                }
            };
            getPages(1, side);
            const [start, end] = getAroundRange(currentPage, around, total);
            getPages(Math.max(start, side + 1), Math.min(end, total - side));
            getPages(total - side + 1, total);
            return pages;
        },
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.total || page === this.currentPage)
                return;

            const oldPage = this.currentPage;

            let cancel = false;
            this.$emit('before-select', {
                page,
                oldPage,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentPage = page;

            this.$emit('update:page', page, this);
            this.$emit('select', {
                page,
                oldPage,
            }, this);
        },
    },
};

export default UPagination;
