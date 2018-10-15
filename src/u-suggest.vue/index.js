import ListView from '../u-list-view.vue';
import DataSource from '../base/utils/DataSource';

export default {
    name: 'u-suggest',
    childName: 'u-suggest-item',
    extends: ListView,
    props: {
        value: { type: String, default: '' },
        color: String,
        size: String,
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        strict: { type: Boolean, default: false },
        emptyText: { type: String, default: '无匹配数据' },
    },
    data() {
        return {
            currentValue: this.value,
            filterValue: '', // 与 currentValue 分开，只有 input 时会改变它
        };
    },
    computed: {
        // @TODO: 只能再过滤一遍数组，暂时没有好的解决方案
        matchedVMs() {
            return this.itemVMs.filter((item) => item.matched);
        },
    },
    watch: {
        currentValue(value, oldValue) {
            this.$emit('change', { value, oldValue });
        },
    },
    created() {
        this.$on('select', ($event) => {
            this.currentValue = $event.value;
            this.toggle(false);

            this.$emit('input', $event.value);
            this.$emit('update:value', $event.value);
        });
        this.$on('shift', ($event) => {
            this.currentValue = $event.value;

            this.$emit('input', $event.value);
            this.$emit('update:value', $event.value);
        });
    },
    methods: {
        shift(count) {
            let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (let i = selectedIndex + count; i < this.itemVMs.length; i++) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled && itemVM.matched) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1)
                    selectedIndex = this.itemVMs.length;
                for (let i = selectedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        });
                        this.ensureSelectedInView();
                        break;
                    }
                }
            }
        },
        toggle(open) {
            this.$refs.popper && this.$refs.popper.toggle(open);
        },
        onToggle($event) {
            // 刚打开时不 filterValue
            if ($event.open)
                this.filterValue = '';
            this.$emit('toggle', $event);
            setTimeout(() => this.ensureSelectedInView(true));
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        match(item) {
            if (!this.filterValue || this.dataSource)
                return true;

            let matchMethod;
            if (typeof this.matchMethod === 'function')
                matchMethod = this.matchMethod;
            else {
                matchMethod = (itemValue, filterValue) => {
                    if (!this.caseSensitive) {
                        itemValue = itemValue.toLowerCase();
                        filterValue = filterValue.toLowerCase();
                    }
                    return itemValue[this.matchMethod](filterValue);
                };
            }
            return !!matchMethod(item.value, this.filterValue);
        },
        fetchData(clear) {
            if (!this.dataSource)
                return;
            const dataSource = this.dataSource instanceof DataSource ? this.dataSource : {
                fetch: this.dataSource,
                promise: Promise.resolve(),
                clear() { /* nothing */ },
            };

            // dataSource 的多次 promise 必须串行
            dataSource.promise = dataSource.promise.then(() => {
                this.loading = true;
                if (clear) {
                    this.currentData = [];
                    dataSource.clear();
                }

                const result = dataSource.fetch({
                    // @TODO: 要不要设置 limit 属性
                    offset: this.currentData ? this.currentData.length : 0,
                    filter: {
                        value: this.filterValue,
                    },
                    clear,
                });
                const then = (data) => {
                    this.currentData = data;
                    this.loading = false;
                };

                if (result instanceof Promise)
                    return result.then(then).catch(() => this.loading = false);
                else if (result instanceof Array)
                    return then(result);
                else
                    throw new TypeError('Wrong type of `dataSource.fetch` result!');
            });
        },
        onInput(value) {
            this.filterValue = value;
            this.currentValue = value;
            this.dataSource && this.debouncedFetchData(true);
            this.toggle(true);

            this.$emit('input', value);
            this.$emit('update:value', value);
        },
        onBlur() {
            this.$nextTick(() => {
                const value = this.currentValue;
                const selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
                if (this.strict && !selectedVM) {
                    if (this.selectedVM) { // 使用上一次正确的选项
                        this.currentValue = this.selectedVM.value;
                    } else { // 或者为空
                        this.currentValue = '';
                        this.selectedVM = selectedVM;
                    }
                } else
                    this.selectedVM = selectedVM;

                this.$emit('input', this.currentValue);
                this.$emit('update:value', this.currentValue);
            });
        },
    },
};
