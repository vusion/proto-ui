import DataSource, { solveCondition } from '../../utils/DataSource';

export const UTableView = {
    name: 'u-table-view',
    props: {
        data: { type: Array },
        dataSource: [DataSource, Function, Object],
        title: String,
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        loadingText: { type: String, default: '正在加载中...' },
        error: { type: Boolean, default: false },
        errorText: { type: String, default: '加载失败，请重试' },
        emptyText: { type: String, default: '暂无数据' },

        // formatter: { type: [String, Function], default: 'text' },
        initialLoad: { type: Boolean, default: true },
        paging: { type: Object, default: () => ({ size: 20, number: 1 }) },
        sorting: Object,
        defaultOrder: { type: String, default: 'desc' },
        filtering: Object,
        remotePaging: { type: Boolean, default: false },
        remoteSorting: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        mouseWheel: { type: String, default: 'vertical' },
    },
    data() {
        if (!this.paging.number)
            this.paging.number = 1;

        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined,
            currentData: this.data && Array.from(this.data),
            currentDataSource: this.normalizeDataSource(this.dataSource),
            currentSorting: this.sorting,
            currentFiltering: this.filtering,
            tableMetaList: [{
                position: 'static',
            }],
            scrollXStart: true,
            scrollXEnd: true,
        };
    },
    watch: {
        data(data) {
            this.arrangeData();
            this.resize();
        },
        dataSource(dataSource) {
            this.currentDataSource = this.normalizeDataSource(dataSource);
        },
        paging: {
            deep: true,
            handler(paging, oldPaging) {
                if (paging.size === oldPaging.size && paging.number === oldPaging.number)
                    return;

                this.page(paging);
            },
        },
        sorting: {
            deep: true,
            handler(sorting, oldSorting) {
                if (sorting.field === oldSorting.field && sorting.order === oldSorting.order)
                    return;

                this.sort(sorting);
            },
        },
        filtering: {
            deep: true,
            handler(filtering, oldFiltering) {
                if (filtering === oldFiltering)
                    return;
                this.filter(filtering);
            },
        },
    },
    computed: {
        visibleColumnVMs() {
            return this.columnVMs.filter((columnVM) => !columnVM.hidden);
        },
        totalPage() {
            return this.currentDataSource ? this.currentDataSource.totalPage : 1;
        },
    },
    created() {
        if (this.currentDataSource && this.initialLoad)
            this.fetchData();
        else
            this.arrangeData();
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
        // this.mouseWheel === 'horizontal' && window.addEventListener('mousewheel', this.onMouseWheel);
    },
    methods: {
        resize() {
            // 判断是否会出现水平滚动条
            // let parentWidth = this.$el.offsetWidth;
            // let tableWidth = this.$refs.body.offsetWidth;
            // // 初始表格是隐藏的需要特殊处理，因为此时上面两个值为0
            // if (parentWidth === 0)
            //     parentWidth = tableWidth = this.$refs.root.parentNode.offsetWidth;

            // let percentWidthSum = 0;
            // percentColumnVMs.forEach((columnVM) => {
            //     const width = parseFloat(columnVM.currentWidth) / 100 * parentWidth;
            //     columnVM.computedWidth = width;
            //     percentWidthSum += width;
            // });

            // let valueWidthSum = 0;
            // valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

            setTimeout(() => {
                const rootWidth = this.$el.offsetWidth;

                // 分别获取有百分比、具体数值和无 width 的列
                const percentColumnVMs = [];
                const valueColumnVMs = [];
                const noWidthColumnVMs = [];
                // 统计固定列的数量
                let fixedLeftCount = 0;
                let fixedRightCount = 0;
                let lastIsFixed = false;

                this.visibleColumnVMs.forEach((columnVM, index) => {
                    if (!columnVM.currentWidth)
                        noWidthColumnVMs.push(columnVM);
                    else if (columnVM.currentWidth.endsWith('%'))
                        percentColumnVMs.push(columnVM);
                    else
                        valueColumnVMs.push(columnVM);

                    if (columnVM.fixed) {
                        if (index === 0)
                            fixedLeftCount = 1;
                        else if (!fixedRightCount && lastIsFixed)
                            fixedLeftCount++;
                        else if (!lastIsFixed)
                            fixedRightCount = 1;
                        else
                            fixedRightCount++;
                    }
                    lastIsFixed = columnVM.fixed;
                });

                // 全部都是百分数的情况，按比例缩小
                if (percentColumnVMs.length === this.visibleColumnVMs.length) {
                    const sumWidth = percentColumnVMs.reduce((prev, columnVM) => prev + parseFloat(columnVM.currentWidth), 0);
                    if (sumWidth !== 100) {
                        percentColumnVMs.forEach((columnVM) => {
                            columnVM.currentWidth = parseFloat(columnVM.currentWidth) / sumWidth * 100 + '%';
                        });
                    }
                }
                // 全部都是数值的情况，按实际大小

                const percentWidthSum = percentColumnVMs.reduce((prev, columnVM) => {
                    columnVM.computedWidth = parseFloat(columnVM.currentWidth) * rootWidth / 100;
                    return prev + columnVM.computedWidth;
                }, 0);
                const valueWidthSum = valueColumnVMs.reduce((prev, columnVM) => {
                    columnVM.computedWidth = parseFloat(columnVM.currentWidth);
                    return prev + columnVM.computedWidth;
                }, 0);
                const remainedWidth = rootWidth - percentWidthSum - valueWidthSum;

                if (remainedWidth > 0 && noWidthColumnVMs.length) {
                    const averageWidth = remainedWidth / noWidthColumnVMs.length;
                    noWidthColumnVMs.forEach((columnVM) => columnVM.computedWidth = averageWidth);
                }

                // 如果所有列均有值，则总宽度有超出的可能。否则总宽度为根节点的宽度。
                let tableWidth = '';
                if (this.visibleColumnVMs.every((columnVM) => columnVM.currentWidth)) {
                    tableWidth = this.visibleColumnVMs.reduce((prev, columnVM) => {
                        if (columnVM.currentWidth.endsWith('%'))
                            return prev + parseFloat(columnVM.currentWidth) * rootWidth / 100;
                        else
                            return prev + columnVM.computedWidth;
                    }, 0);

                    this.tableWidth = tableWidth;
                }

                const tableMetaList = [this.tableMetaList[0]];
                if (fixedLeftCount) {
                    tableMetaList.push({
                        position: 'left',
                        width: this.visibleColumnVMs.slice(0, fixedLeftCount).reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                if (fixedRightCount) {
                    tableMetaList.push({
                        position: 'right',
                        width: this.visibleColumnVMs.slice(-fixedRightCount).reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                this.tableMetaList = tableMetaList;

                /**
                 * 根节点高度优先，头部固定，计算身体高度
                 */
                if (this.$el.style.height !== '' && this.$el.style.height !== 'auto'
                    || this.$el.style.maxHeight !== '' && this.$el.style.maxHeight !== 'auto') {
                    const rootHeight = this.$el.offsetHeight;
                    const titleHeight = this.$refs.title ? this.$refs.title.offsetHeight : 0;
                    const headHeight = this.$refs.head[0] ? this.$refs.head[0].offsetHeight : 0;
                    this.bodyHeight = rootHeight - titleHeight - headHeight;
                }
            });
        },
        onTableScroll(e) {
            this.scrollXStart = e.target.scrollLeft === 0;
            this.scrollXEnd = e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth;
        },
        syncBodyScroll(scrollTop) {
            this.$refs.body[0] && (this.$refs.body[0].scrollTop = scrollTop);
            this.$refs.body[1] && (this.$refs.body[1].scrollTop = scrollTop);
            this.$refs.body[2] && (this.$refs.body[2].scrollTop = scrollTop);
        },
        onBodyScroll(e) {
            this.syncBodyScroll(e.target.scrollTop);
            setTimeout(() => this.syncBodyScroll(e.target.scrollTop));
        },
        onMouseWheel(e) {
            // const direction = e.wheelDelta > 0 ? -1 : 1;
            // const rootWidth = this.$refs.root.offsetWidth;
            // const scrollWidth = this.$refs.table[0].scrollWidth;
            // const diffWidth = scrollWidth - rootWidth;
            // console.log(e);
            // if (tableWidth > parentWidth && this.over) {
            //     e.preventDefault();
            //     if (this.$refs.body.parentNode.scrollLeft >= diffWidth && direction === 1)
            //         this.$refs.body.parentNode.scrollLeft = diffWidth;
            //     else if (this.$refs.body.parentNode.scrollLeft < 0 && direction === -1)
            //         this.$refs.body.parentNode.scrollLeft = 0;
            //     else if (direction === -1)
            //         this.$refs.body.parentNode.scrollLeft += -50;
            //     else
            //         this.$refs.body.parentNode.scrollLeft += 50;
            // }
        },
        normalizeDataSource(dataSource) {
            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Function) {
                return new DataSource({
                    paging: this.paging,
                    sorting: this.sorting,
                    filtering: this.filtering,
                    remotePaging: this.remotePaging,
                    remoteSorting: this.remoteSorting,
                    remoteFiltering: this.remoteFiltering,
                    load(params) {
                        const result = dataSource(params);

                        if (result instanceof Promise)
                            return result.catch(() => this.loading = false);
                        else if (result instanceof Array)
                            return Promise.resolve(result);
                        else
                            throw new TypeError('Wrong type of `dataSource.load` result!');
                    },
                });
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign({
                    paging: this.paging,
                    sorting: this.sorting,
                    filtering: this.filtering,
                    remotePaging: this.remotePaging,
                    remoteSorting: this.remoteSorting,
                    remoteFiltering: this.remoteFiltering,
                }, dataSource));
            } else
                return undefined;
        },
        fetchData(page) {
            if (!this.currentDataSource)
                return;

            page = page || this.currentPage;
            if (this.remotePaging || this.remoteSorting || this.remoteFiltering)
                this.currentData = undefined;
            this.currentDataSource.view().then((data) => {
                // 防止同步数据使页面抖动
                setTimeout(() => this.currentData = data);
            }).catch(() => this.currentData = null);
        },
        page(number, size) {
            if (typeof number === 'object') {
                size = number.size;
                number = number.number;
            }

            if (this.currentDataSource) {
                this.currentDataSource.page(number, size);
                this.fetchData();
            } else
                return console.error(`[proto-ui] Paging only works with dataSource!`);

            this.$emit('page', this.currentDataSource.paging, this);
            this.$emit('update:paging', this.currentDataSource.paging, this);
        },
        onClickSort(columnVM) {
            let order;
            if (!this.currentSorting)
                this.currentSorting = { field: undefined, order: columnVM.defaultOrder || this.defaultOrder };
            if (this.currentSorting.field === columnVM.field)
                order = this.currentSorting.order === 'asc' ? 'desc' : 'asc';
            else
                order = columnVM.defaultOrder || this.defaultOrder;
            this.sort(columnVM.field, order, columnVM.sortCompare);
        },
        sort(field, order = 'asc', compare) {
            this.currentSorting = { field, order, compare };

            if (this.currentDataSource) {
                this.currentDataSource.sort(this.currentSorting);
                this.fetchData();
            } else
                this.arrangeData();
            this.$emit('sort', this.currentSorting, this);
            this.$emit('update:sorting', this.currentSorting, this);
        },
        onSelectFilters(field, $event) {
            const filtering = $event.value || $event.value === 0 ? { [field]: $event.value } : undefined;
            this.filter(filtering);
        },
        getFiltersValue(field) {
            if (!this.currentFiltering)
                return undefined;

            const filterField = Object.keys(this.currentFiltering)[0];
            if (filterField !== field)
                return undefined;
            else
                return this.currentFiltering[field];
        },
        filter(filtering) {
            if (this.currentDataSource) {
                this.currentDataSource.filter(filtering);
                this.fetchData();
            } else
                this.arrangeData();
            this.$emit('filter', this.currentFiltering, this);
            this.$emit('update:filtering', this.currentFiltering, this);
        },
        arrangeData() {
            let arrangedData = this.data && Array.from(this.data);
            if (!arrangedData)
                return;

            const filtering = this.currentFiltering;
            if (filtering && Object.keys(filtering).length)
                arrangedData = arrangedData.filter((item) => solveCondition(filtering, item));

            const sorting = this.currentSorting;
            if (sorting && sorting.field) {
                const field = sorting.field;
                const orderSign = sorting.order === 'asc' ? 1 : -1;
                if (sorting.compare)
                    arrangedData.sort((item1, item2) => sorting.compare(item1[field], item2[field], orderSign));
                else
                    arrangedData.sort((item1, item2) => this.defaultCompare(item1[field], item2[field], orderSign));
            }

            this.currentData = arrangedData;
        },
    },
};

export * from './column.vue';
export * from './filters.vue';

export default UTableView;
