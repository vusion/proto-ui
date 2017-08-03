export default {
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11 },
        current: { type: Number, default: 1 },
        side: { type: Number, default: 2 },
        around: { type: Number, default: 5 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            current_: this.current,
        };
    },
    computed: {
        pages() {
            const pages = [];

            const part = this.around >> 1;
            let start = this.current_ - part;
            let end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.total) {
                start -= end - this.total;
                end = this.total;
            }

            start = Math.max(1, Math.min(start, this.total - this.side + 1));
            end = Math.min(this.total, Math.max(end, this.side));

            let page = 1;
            while (page <= this.total) {
                if (page <= this.side || (page >= start && page <= end) || page > this.total - this.side)
                    pages.push(page);
                else {
                    pages.push(undefined);

                    if (page < start)
                        page = start - 1;
                    if (page > end)
                        page = this.total - this.side;
                }

                page++;
            }

            return pages;
        },
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.total || page === this.current_)
                return;

            this.current_ = page;

            this.$emit('select', {
                current: page,
            });
        },
    },
};
