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
        //
        sorting: { type: Object, default: () => ({ field: undefined, order: 'desc' }) },
        defaultOrder: { type: String, default: 'asc' },
        // filtering
        // filterOptions
    },
    data() {
        return {
            columnVMs: [],
            currentData: Array.from(this.data),
            currentSorting: this.sorting,
        };
    },
    mounted() {
        this.handleResize();
        if (this.currentSorting.field)
            this.sort(this.currentSorting.field, this.currentSorting.order);
    },
    watch: {
        data: {
            // deep: true,
            handler(data) {
                this.currentData = Array.from(data);
                // this.handleResize();
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
        handleResize() {
            // 判断是否会出现水平滚动条
            // let parentWidth = this.$el.offsetWidth;
            // let tableWidth = this.$refs.body.offsetWidth;
            // // 初始表格是隐藏的需要特殊处理，因为此时上面两个值为0
            // if (parentWidth === 0)
            //     parentWidth = tableWidth = this.$refs.root.parentNode.offsetWidth;

            // // 分别获取有百分比、具体数值、无 width 的 column 集合
            // const percentColumnVMs = [];
            // const valueColumnVMs = [];
            // const noWidthColumnVMs = [];
            // this.columnVMs.forEach((columnVM) => {
            //     if (columnVM.tempWidth && columnVM.tempWidth.endsWith('%'))
            //         percentColumnVMs.push(columnVM);
            //     else if (columnVM.tempWidth)
            //         valueColumnVMs.push(columnVM);
            //     else
            //         noWidthColumnVMs.push(columnVM);
            // });

            // let remainedWidth = 0;
            // // 全部都是百分数
            // if (percentColumnVMs.length === this.columnVMs.length) {
            //     let sumWidth = this.columnVMs.reduce((prev, curr) => prev + parseFloat(curr.tempWidth), 0);
            //     if (sumWidth !== 100) {
            //         percentColumnVMs.forEach((columnVM) => {
            //             columnVM.tempWidth = parseFloat(columnVM.tempWidth) / sumWidth * 100 + '%';
            //         });
            //     }
            // }

            // let percentWidthSum = 0;
            // percentColumnVMs.forEach((columnVM) => {
            //     const width = parseFloat(columnVM.tempWidth) / 100 * parentWidth;
            //     columnVM.currentWidth = width;
            //     percentWidthSum += width;
            // });

            // let valueWidthSum = 0;
            // valueColumns.forEach((item) => valueWidthSum += parseFloat(item.copyWidth));

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
