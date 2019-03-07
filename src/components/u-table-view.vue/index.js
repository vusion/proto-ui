import { MParent } from '../m-parent.vue';

export const UTableView = {
    name: 'u-table-view',
    mixins: [MParent],
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
    },
    data() {
        return {
            columnVMs: [],
        };
    },
    created() {
        this.$on('add-column-vm', (columnVM) => {
            columnVM.parentVM = this;
            this.columnVMs.push(columnVM);
        });
        this.$on('remove-column-vm', (columnVM) => {
            columnVM.parentVM = undefined;
            this.columnVMs.splice(this.columnVMs.indexOf(columnVM), 1);
        });
    },
    mounted() {
        this.handleResize();
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.handleResize();
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
    },
};

export default UTableView;
