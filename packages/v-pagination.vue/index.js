import Base from 'v-base.vue';

/**
 * @class Pagination
 * @extends Base
 * @param {number=1}            props.current                   Current page number
 * @param {number=11}           props.total                     Total count of pages
 * @param {number=2}            props.side                      Count of pages at side position
 * @param {number=5}            props.around                    Count of pages around the current position
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Pagination = Base.extend({
    name: 'v-pagination',
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
        /**
         * @method select(page) - Select a page
         * @public
         * @param  {number} page - The page number to select
         * @return {void}
         */
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.total || page === this.current_)
                return;

            /**
             * @event select - Emit when selecting a page
             * @property {number} page - The page number to select
             * @property {number} current - The current page number
             */
            this.$emit('select', {
                page,
                current: this.current_,
            });

            this.current_ = page;

            /**
             * @event change - Emit when current page changed
             * @property {object} current - The changed current page number
             */
            this.$emit('change', {
                current: page,
            });
        },
    },
});

export default Pagination;
