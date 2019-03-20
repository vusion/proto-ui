export const UTableView = {
    name: 'u-table-view',
    props: {
        data: { type: Array },
        title: String,
        titleAlignment: { type: String, default: 'center' },
        border: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        loadingText: { type: String, default: '正在加载中...' },
        error: { type: Boolean, default: false },
        errorText: { type: String, default: '加载失败，请重试' },
        emptyText: { type: String, default: '暂无数据' },

        // formatter: { type: [String, Function], default: 'text' },
        //
        sorting: { type: Object, default: () => ({ field: undefined, order: 'desc' }) },
        defaultOrder: { type: String, default: 'asc' },
        // filtering
        // filterOptions
        mouseWheel: { type: String, default: 'vertical' },
    },
    data() {
        return {
            columnVMs: [],
            tableWidth: undefined,
            bodyHeight: undefined,
            currentData: this.data && Array.from(this.data),
            currentSorting: this.sorting,
            tableMetaList: [{
                position: 'static',
            }],
            scrollXStart: true,
            scrollXEnd: true,
        };
    },
    mounted() {
        if (this.currentSorting.field)
            this.sort(this.currentSorting.field, this.currentSorting.order);
        this.resize();
        window.addEventListener('resize', this.resize);
        // this.mouseWheel === 'horizontal' && window.addEventListener('mousewheel', this.onMouseWheel);
    },
    watch: {
        data: {
            // deep: true,
            handler(data) {
                this.currentData = data && Array.from(data);
                this.resize();
            },
        },
        sorting: {
            deep: true,
            handler(sorting) {
                this.currentSorting = sorting;
            },
        },
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

                this.columnVMs.forEach((columnVM, index) => {
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
                if (percentColumnVMs.length === this.columnVMs.length) {
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
                if (this.columnVMs.every((columnVM) => columnVM.currentWidth)) {
                    tableWidth = this.columnVMs.reduce((prev, columnVM) => {
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
                        width: this.columnVMs.slice(0, fixedLeftCount).reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                if (fixedRightCount) {
                    tableMetaList.push({
                        position: 'right',
                        width: this.columnVMs.slice(-fixedRightCount).reduce((prev, columnVM) => prev + columnVM.computedWidth, 0),
                    });
                }
                this.tableMetaList = tableMetaList;

                /**
                 * 根节点高度优先，头部固定，计算身体高度
                 */
                if (this.$el.style.height !== '' && this.$el.style.height !== 'auto') {
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
        onClickSort(columnVM) {
            let order;
            if (this.currentSorting.field === columnVM.field)
                order = this.currentSorting.order === 'asc' ? 'desc' : 'asc';
            else
                order = columnVM.defaultOrder || this.defaultOrder;
            this.sort(columnVM.field, order);
        },
        sort(field, order = 'asc') {
            const columnVM = this.columnVMs.find((columnVM) => columnVM.field === field);
            if (!columnVM)
                return;

            this.currentSorting = { field, order };

            // if (columnVM.sortRemote)
            const orderSign = order === 'asc' ? 1 : -1;
            this.currentData.sort((item1, item2) => {
                if (item1[field] === item2[field])
                    return 0;
                else
                    return item1[field] > item2[field] ? orderSign : -orderSign;
            });
            this.$emit('sort', this.currentSorting, this);
            this.$emit('update:sorting', this.currentSorting, this);
        },
    },
};

export * from './column.vue';

export default UTableView;
