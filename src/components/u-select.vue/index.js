import { UListView } from '../u-list-view.vue';
import { ellipsisTitle } from '../../directives';

export const USelect = {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    extends: UListView,
    directives: { ellipsisTitle },
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: values: Array,
        // @inherit: field: { type: String, default: 'text' },
        // @inherit: data: Array,
        // @inherit: dataSource: [DataSource, Function],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        multipleAppearance: { type: String, default: 'text' },
        tagsOverflow: { type: String, default: 'hidden' },
        autoSelect: { type: Boolean, default: true },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        // @inherit: loadingText: { type: String, default: '加载中...' },
        emptyText: { type: String, default: '无匹配数据' },
        // @inherit: initialLoad: { type: Boolean, default: true },
        // @inherit: pageSize: { type: Number, default: 50 },
        // @inherit: remotePaging: { type: Boolean, default: false },
        remoteFiltering: { type: Boolean, default: false },
        opened: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: ChildComponent: this.$options.childName,
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            // @inherit: currentMultiple: this.multiple,
            // @inherit: currentData: this.data,
            // @inherit: loading: false,
            currentText: '', // 显示文本
            filterText: '', // 过滤文本，只有 input 时会改变它
        };
    },
    computed: {
        // @TODO: 只能再过滤一遍数组，暂时没有好的解决方案
        matchedVMs() {
            return this.itemVMs.filter((item) => item.matched);
        },
    },
    created() {
        this.$watch('selectedVM', (selectedVM) => {
            this.currentText = this.selectedVM ? this.selectedVM.currentLabel : '';
        });
        this.$watch('selectedVMs', (selectedVMs) => {
            this.currentText = selectedVMs.map((itemVM) => itemVM.currentLabel).join(', ');
            this.$refs.popper.currentOpened && this.$refs.popper.scheduleUpdate();
        });
        this.$on('select', () => {
            if (!this.multiple)
                this.close();
            else if (this.filterable)
                this.$refs.input.focus();
        });
    },
    methods: {
        shift(count) {
            if (this.multiple)
                return;
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
                        }, this);
                        this.ensureSelectedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (selectedIndex === -1)
                    selectedIndex = this.itemVMs.length;
                for (let i = selectedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled && itemVM.matched) {
                        this.selectedVM = itemVM;
                        this.$emit('shift', {
                            selectedIndex,
                            selectedVM: itemVM,
                            value: itemVM.value,
                        }, this);
                        this.ensureSelectedInView();
                        break;
                    }
                }
            }
        },
        open() {
            this.$refs.popper && this.$refs.popper.open();
        },
        close() {
            this.$refs.popper && this.$refs.popper.close();
        },
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onOpen($event) {
            // 刚打开时不 filterText
            if (this.$refs.popper)
                this.currentText = this.filterText = '';
            if (this.filterable)
                this.$refs.input.focus();
            setTimeout(() => this.ensureSelectedInView(true));

            this.$emit('open', $event, this);
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        match(item) {
            if (!this.filterText || this.currentDataSource)
                return true;

            let matchMethod;
            if (typeof this.matchMethod === 'function')
                matchMethod = this.matchMethod;
            else {
                matchMethod = (itemValue, filterText) => {
                    if (!this.caseSensitive) {
                        itemValue = itemValue.toLowerCase();
                        filterText = filterText.toLowerCase();
                    }
                    return itemValue[this.matchMethod](filterText);
                };
            }
            return !!matchMethod(item.currentLabel, this.filterText);
        },
        fetchData(clear) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;

            // dataSource 的多次 promise 必须串行
            // dataSource.promise = dataSource.promise.then(() => {
            if (clear) {
                this.currentData = [];
                dataSource.clear();
            }

            this.loading = true;
            const offset = this.currentData ? this.currentData.length : 0;
            const limit = +this.pageSize;

            console.log(this.filterText);
            dataSource.filter(this.filterText ? { text: [this.matchMethod, this.filterText] } : undefined)
                .fetch(offset, limit).then((data) => {
                    this.currentData = dataSource.slice(0, offset + limit);
                    this.loading = false;
                }).catch(() => this.loading = false);
            // });
        },
        onFocus() {
            // const inputEl = this.$refs.input;
            // if (inputEl.selectionStart === inputEl.selectionEnd === 0)
            //     inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
        },
        onInput(value) {
            if (!this.filterable)
                return;
            this.currentText = value;
            // value.split(',')
            this.filterText = value;

            let cancel = false;
            this.$emit('before-filter', {
                filterText: value,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentDataSource && this.debouncedFetchData(true);
            this.open();
            // this.$refs.popper.scheduleUpdate();
        },
        onBlur() {
            if (!this.filterable)
                return;
            if (this.multiple) // @TODO: 需要理清一下需求
                return;

            // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            setTimeout(() => {
                const oldVM = this.selectedVM;

                const filterText = this.filterText || this.currentText;
                if ((oldVM && filterText === oldVM.currentLabel) || (!oldVM && !filterText))
                    return;

                let selectedVM = this.itemVMs.find((itemVM) => itemVM.currentLabel === filterText);

                // 如果没有匹配项则恢复到上一个状态
                if (!selectedVM && filterText) {
                    selectedVM = oldVM;
                    this.currentText = selectedVM ? selectedVM.currentLabel : undefined;
                    return;
                }

                this.selectedVM = selectedVM;
                const value = selectedVM ? selectedVM.value : undefined;

                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            });
        },
        onInputEnter() {
            // @TODO: Use focusItemVM
            // const firstItemVM = this.matchedVMs[0];
            // if (!firstItemVM)
            //     return;
            // this.select(firstItemVM);
            // if (firstItemVM.currentSelected)
            //     this.filterText = '';
        },
        onInputDelete() {
            if (this.filterable && this.filterText === '') {
                if (!this.selectedVMs.length)
                    return;
                const lastItemVM = this.selectedVMs[this.selectedVMs.length - 1];
                this.select(lastItemVM, false);
            }
        },
        clear() {
            let cancel = false;

            const oldValue = this.value;
            const value = this.multiple ? [] : undefined;

            this.$emit('before-clear', {
                oldValue,
                value,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            if (this.multiple) {
                this.selectedVMs.forEach((itemVM) => itemVM.currentSelected = false);
                this.selectedVMs = [];
            } else
                this.selectedVM = undefined;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);
            this.focus();

            this.$emit('clear', {
                oldValue,
                value,
            }, this);
        },
        focus() {
            if (this.filterable)
                this.$refs.input.focus();
        },
        blur() {
            if (this.filterable)
                this.$refs.input.blur();
        },
    },
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';

export default USelect;
