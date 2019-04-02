import DataSource from '../../utils/DataSource';

export const UTableView = {
    name: 'u-table-view',
    props: {
        data: Array,
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
        pageable: { type: Boolean, default: false },
        pageSize: { type: Number, default: 20 },
        pageNumber: { type: Number, default: 1 },
        sorting: Object,
        defaultOrder: { type: String, default: 'desc' },
        filtering: Object,
        remotePaging: { type: Boolean, default: false },
        remoteSorting: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        mouseWheel: { type: String, default: 'vertical' },
    },
    data() {
        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined,
            // currentData: this.data && Array.from(this.data),
            currentDataSource: undefined,
            currentLoading: this.loading,
            tableMetaList: [{
                position: 'static',
            }],
            scrollXStart: true,
            scrollXEnd: true,
        };
    },
    computed: {
        currentData() {
            return this.currentDataSource && this.currentDataSource.viewData;
        },
        visibleColumnVMs() {
            return this.columnVMs.filter((columnVM) => !columnVM.hidden);
        },
        paging() {
            if (this.pageable) {
                const paging = {};
                paging.size = this.pageSize;
                paging.number = paging.number || 1;
                return paging;
            } else
                return undefined;
        },
        currentSorting() {
            return this.currentDataSource.sorting;
        },
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource) {
            this.handleData();
        },
        loading(loading) {
            this.currentLoading = loading;
        },
        sorting: {
            deep: true,
            handler(sorting, oldSorting) {
                this.sort(sorting);
            },
        },
        filtering: {
            deep: true,
            handler(filtering, oldFiltering) {
                this.filter(filtering);
            },
        },
    },
    created() {
        // @TODO: this.pageNumber
        this.$watch('pageNumber', (number) => {
            this.page(number);
        });

        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        this.initialLoad && this.load();
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
        // this.mouseWheel === 'horizontal' && window.addEventListener('mousewheel', this.onMouseWheel);
    },
    methods: {
        handleData() {
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.resize();
        },
        getExtraParams() {
            return undefined;
        },
        getDataSourceOptions() {
            return {
                viewMode: 'page',
                paging: this.paging,
                sorting: this.sorting,
                filtering: this.filtering,
                remotePaging: this.remotePaging,
                remoteSorting: this.remoteSorting,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
            };
        },
        normalizeDataSource(dataSource) {
            const options = this.getDataSourceOptions();

            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Array) {
                options.data = Array.from(dataSource);
                return new DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    const result = dataSource(params);

                    if (result instanceof Promise)
                        return result.catch(() => this.currentLoading = false);
                    else if (result instanceof Array)
                        return Promise.resolve(result);
                    else
                        throw new TypeError('Wrong type of `dataSource.load` result!');
                };
                return new DataSource(options);
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign(options, dataSource));
            } else
                return undefined;
        },
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
                if (fixedRightCount && tableWidth > rootWidth) { // 表格太短时，不固定右侧列
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

                this.$emit('resize', undefined, this);
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
        load() {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;
            if (this.$emitPrevent('before-load', undefined, this))
                return;

            this.currentLoading = true;
            dataSource.load().then((data) => {
                // 防止同步数据使页面抖动
                // setTimeout(() => this.currentData = data);
                this.currentLoading = false;
                if (this.currentDataSource.paging.number > this.currentDataSource.totalPage)
                    this.page(1);

                this.$emit('load', undefined, this);
                return data;
            }).catch(() => this.currentLoading = false);
        },
        reload() {
            this.currentDataSource.clearLocalData();
            this.load();
        },
        page(number) {
            const paging = {
                size: this.pageSize,
                number,
                oldNumber: this.currentDataSource.paging.number,
            };
            if (this.$emitPrevent('before-page', paging, this))
                return;

            this.currentDataSource.page(paging);
            this.load();
            this.$emit('page', paging, this);
            this.$emit('update:page-number', number, this);
        },
        onClickSort(columnVM) {
            let order;
            let sorting = this.currentSorting;
            if (!sorting)
                sorting = { field: undefined, order: columnVM.defaultOrder || this.defaultOrder };
            if (sorting.field === columnVM.field)
                order = sorting.order === 'asc' ? 'desc' : 'asc';
            else
                order = columnVM.defaultOrder || this.defaultOrder;
            this.sort(columnVM.field, order, columnVM.sortCompare);
        },
        sort(field, order = 'asc', compare) {
            const sorting = { field, order, compare };
            if (this.$emitPrevent('before-sort', sorting, this))
                return;

            this.currentDataSource.sort(sorting);
            this.load();
            this.$emit('sort', sorting, this);
            this.$emit('update:sorting', sorting, this);
        },
        onSelectFilters(field, $event) {
            const filtering = $event.value || $event.value === 0 ? { [field]: $event.value } : undefined;
            this.filter(filtering);
        },
        getFiltersValue(field) {
            const filtering = this.currentDataSource.filtering;
            if (!filtering)
                return undefined;

            const filterField = Object.keys(filtering)[0];
            if (filterField !== field)
                return undefined;
            else
                return filtering[field];
        },
        filter(filtering) {
            if (this.$emitPrevent('before-filter', filtering, this))
                return;

            this.currentDataSource.filter(filtering);
            this.load();
            this.$emit('filter', filtering, this);
            this.$emit('update:filtering', filtering, this);
        },
    },
};

export * from './column.vue';
export * from './filters.vue';

export default UTableView;
