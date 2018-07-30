import ListView from 'proto-ui.vusion/src/u-list-view.vue';
import DataSource from '../base/utils/DataSource';

export default {
    name: 'u-suggest',
    childName: 'u-suggest-item',
    extends: ListView,
    props: {
        value: { type: String, default: '' },
        size: String,
        matchMethod: { type: [String, Function], default: 'includes' },
        caseInsensitive: { type: Boolean, default: false },
        strict: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
            matching: false, // 如果不是正在配置，则全部显示
        };
    },
    created() {
        this.$on('select', ($event) => {
            this.currentValue = $event.value;
            this.dataSource && this.debouncedFetchData(true);
            this.$refs.popper && this.$refs.popper.toggle(false);
        });
    },
    methods: {
        onToggle($event) {
            // 刚打开时不 matching
            if ($event.open)
                this.matching = false;
            this.$emit('toggle', $event);
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        match(item) {
            if (!this.matching || this.dataSource)
                return true;

            let matchMethod;
            if (typeof this.matchMethod === 'function')
                matchMethod = this.matchMethod;
            else {
                matchMethod = (itemValue, currentValue) => {
                    if (this.caseInsensitive) {
                        itemValue = itemValue.toLowerCase();
                        currentValue = currentValue.toLowerCase();
                    }
                    return itemValue[this.matchMethod](currentValue);
                };
            }
            return matchMethod(item.value, this.currentValue);
        },
        fetchData(clear) {
            if (!this.dataSource)
                return;
            const dataSource = this.dataSource instanceof DataSource ? this.dataSource : {
                fetch: this.dataSource,
                promise: Promise.resolve(),
                clear() { /* nothing */ },
            };

            this.loading = true;

            // dataSource 的多次 promise 必须串行
            dataSource.promise = dataSource.promise.then(() => {
                if (clear) {
                    this.currentData = [];
                    dataSource.clear();
                }

                const result = dataSource.fetch({
                    // @TODO: 要不要设置 limit 属性
                    offset: this.currentData ? this.currentData.length : 0,
                    filter: {
                        value: this.currentValue,
                    },
                    clear,
                });
                const then = (data) => this.currentData = data;

                if (result instanceof Promise)
                    return result.then(then).finally(() => this.loading = false);
                else if (result instanceof Array)
                    return then(result);
                else
                    throw new TypeError('Wrong type of `dataSource.fetch` result!');
            });
        },
        onInput(value) {
            this.matching = true;
            this.currentValue = value;
            this.dataSource && this.debouncedFetchData(true);
            this.$refs.popper && this.$refs.popper.toggle(true);
        },
        onFocus(e) {
            this.$refs.input.$refs.input.select();
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

                this.$emit('input', value);
                this.$emit('update:value', value);
            });
        },
    },
};
