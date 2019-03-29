import { MComplex } from '../m-complex.vue';
import { MGroupParent } from '../m-group.vue';
import MField from '../m-field.vue';
import DataSource from '../../utils/DataSource';
import debounce from 'lodash/debounce';

export const UListView = {
    name: 'u-list-view',
    groupName: 'u-list-view-group',
    childName: 'u-list-view-item',
    mixins: [MComplex, MGroupParent, MField],
    model: 'value',
    props: {
        // @inherit: value: null,
        // @inherit: values: Array,
        field: { type: String, default: 'text' },
        data: Array,
        dataSource: [DataSource, Function, Object],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: collapsible: { type: Boolean, default: false },
        // @inherit: accordion: { type: Boolean, default: false },
        // @inherit: expandTrigger: { type: String, default: 'click' },
        // @inherit: readonly: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
        loadingText: { type: String, default: '加载中...' },
        initialLoad: { type: Boolean, default: true },
        pageable: { type: Boolean, default: false },
        pageSize: { type: Number, default: 50 },
        remotePaging: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            // @inherit: currentMultiple: this.multiple,
            currentData: undefined,
            currentDataSource: undefined,
            loading: false,
            promiseSequence: Promise.resolve(),
        };
    },
    watch: {
        data(data) {
            this.handleData();
        },
        dataSource(dataSource) {
            this.handleData();
        },
        itemVMs(itemVMs, oldVMs) {
            if (this.data || this.dataSource)
                return;

            MComplex.watch.itemVMs.call(this, itemVMs, oldVMs);
        },
    },
    created() {
        this.debouncedFetchData = debounce(this.fetchData, 300);
        this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
        this.initialLoad && this.load();
    },
    methods: {
        getExtraParams() {
            return { // For convenience
                filterText: this.filterText,
            };
        },
        handleData() {
            // @TODO: undefined or null
            this.currentDataSource = this.normalizeDataSource(this.dataSource || this.data);
            this.fetchData().then(() => {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                MComplex.watch.itemVMs.call(this, this.itemVMs);
            });
        },
        normalizeDataSource(dataSource) {
            const options = {
                paging: this.pageable && { size: +this.pageSize, number: 1 },
                remotePaging: this.remotePaging,
                remoteFiltering: this.remoteFiltering,
                getExtraParams: this.getExtraParams,
            };

            if (dataSource instanceof DataSource)
                return dataSource;
            else if (dataSource instanceof Array) {
                options.data = dataSource;
                return new DataSource(options);
            } else if (dataSource instanceof Function) {
                options.load = function load(params) {
                    const result = dataSource(params);

                    if (result instanceof Promise)
                        return result.catch(() => this.loading = false);
                    else if (result instanceof Array)
                        return Promise.resolve(result);
                    else
                        throw new TypeError('Wrong type of `dataSource.fetch` result!');
                };
                return new DataSource(options);
            } else if (dataSource instanceof Object) {
                return new DataSource(Object.assign(options, dataSource));
            } else
                return undefined;
        },
        shift(count) {
            let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            if (count > 0) {
                for (let i = selectedIndex + count; i < this.itemVMs.length; i++) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        }, this);
                        this.ensureFocusedInView();
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
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            }
        },
        ensureFocusedInView(natural) {
            const focusedVM = this.focusedVM || this.selectedVM;
            if (!focusedVM)
                return;
            const focusedEl = focusedVM.$el;
            if (!focusedEl)
                return;
            const parentEl = focusedEl.parentElement;
            if (!parentEl)
                return;

            const selectedIndex = this.itemVMs.indexOf(focusedVM);
            if (parentEl.scrollTop < focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight) {
                if (natural)
                    parentEl.scrollTop = focusedEl.offsetTop - focusedEl.offsetHeight;
                else
                    parentEl.scrollTop = focusedEl.offsetTop + focusedEl.offsetHeight - parentEl.clientHeight;
                if (selectedIndex === this.itemVMs.length - 1) {
                    this.pageable && this.currentDataSource && this.fetchData(true);
                    // 保证显示加载中，但又不是全部数据
                    this.$nextTick(() => parentEl.scrollTop = parentEl.scrollHeight - parentEl.clientHeight);
                }
            }
            if (parentEl.scrollTop > focusedEl.offsetTop)
                parentEl.scrollTop = focusedEl.offsetTop;
        },
        fetchData(more) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;

            if (!more)
                this.currentData = [];

            this.loading = true;
            const offset = this.currentData ? this.currentData.length : 0;
            const limit = this.pageable ? +this.pageSize : Infinity;
            // dataSource 的多次 promise 必须串行
            return this.promiseSequence = this.promiseSequence.then(() =>
                dataSource.fetch(offset, limit).then((data) => {
                    // @TODO: 防止加载顺序不对
                    this.loading = false;
                    return this.currentData = dataSource.slice(0, offset + limit);
                }).then(() => MComplex.watch.itemVMs.call(this, this.itemVMs))
                    .catch(() => this.loading = false));
        },
        load() {
            return this.fetchData();
        },
        reload() {
            this.currentDataSource.clear();
            return this.fetchData();
        },
        onScroll(e) {
            if (!this.pageable)
                return;

            const el = e.target;
            const offset = this.currentData ? this.currentData.length : 0;
            if (el.scrollHeight === el.scrollTop + el.clientHeight
                && this.currentDataSource && this.currentDataSource.hasMore(offset))
                this.debouncedFetchData(true);
        },
    },
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';

export default UListView;
