import { MComplex } from '../m-complex.vue';
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
        multipleAppearance: { type: String, default: 'tags' },
        tagsOverflow: { type: String, default: 'visible' },
        autoSelect: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        // @inherit: loadingText: { type: String, default: '加载中...' },
        emptyText: { type: String, default: '无匹配数据' },
        // @inherit: initialLoad: { type: Boolean, default: true },
        // @inherit: pageable: { type: Boolean, default: false },
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
            focusedVM: undefined,
            // @inherit: currentMultiple: this.multiple,
            // @inherit: currentData: this.data,
            // @inherit: loading: false,
            currentText: '', // 显示文本
            filterText: '', // 过滤文本，只有 input 时会改变它
            preventBlur: false,
        };
    },
    computed: {
        // @TODO: 只能再过滤一遍数组，暂时没有好的解决方案
        // matchedVMs() {
        //     return this.itemVMs.filter((item) => item.matched);
        // },
    },
    watch: {
        value(value) {
            // 无需剪枝
            this.watchValue(value);
        },
    },
    created() {
        this.$watch('selectedVM', (selectedVM) => {
            this.currentText = this.selectedVM ? this.selectedVM.currentText : '';
        });
        this.$watch('selectedVMs', (selectedVMs) => {
            this.currentText = selectedVMs.map((itemVM) => itemVM.currentText).join(', ');
            this.$refs.popper.currentOpened && this.$refs.popper.scheduleUpdate();
        });
        this.$on('select', ($event) => {
            if (!this.multiple)
                this.close();
            if (this.filterable) {
                this.filterText = this.selectedVM ? this.selectedVM.currentText : '';
                setTimeout(() => {
                    this.$refs.input.focus();
                    setTimeout(() => {
                        const inputEl = this.$refs.input.$refs.input;
                        inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
                    });
                });
            }
        });
    },
    // mounted() {
    //     this.$refs.popper.addTrigger(this.$refs.root, 'click');
    // },
    methods: {
        shift(count) {
            if (this.multiple)
                return;

            let focusedIndex = this.itemVMs.indexOf(this.focusedVM || this.selectedVM);
            if (count > 0) {
                for (let i = focusedIndex + count; i < this.itemVMs.length; i++) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit('shift', {
                            focusedIndex,
                            focusedVM: itemVM,
                            value: itemVM.value,
                        }, this);
                        this.ensureFocusedInView();
                        break;
                    }
                }
            } else if (count < 0) {
                if (focusedIndex === -1)
                    focusedIndex = this.itemVMs.length;
                for (let i = focusedIndex + count; i >= 0; i--) {
                    const itemVM = this.itemVMs[i];
                    if (!itemVM.disabled) {
                        this.focusedVM = itemVM;
                        this.$emit('shift', {
                            focusedIndex,
                            focusedVM: itemVM,
                            value: itemVM.value,
                        }, this);
                        this.ensureFocusedInView();
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
            // if (this.$refs.popper)
            //     this.filterText = '';
            if (this.filterable && !this.currentDataSource.initialLoaded) {
                this.fetchData().then(() => {
                    this.ensureFocusedInView(true);
                    this.$refs.input.focus();
                });
            } else
                setTimeout(() => this.ensureFocusedInView(true));

            this.$emit('open', $event, this);
        },
        onClose($event) {
            this.focusedVM = undefined;
            this.$emit('close', $event, this);
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        // match(item) {
        //     if (!this.filterText || this.currentDataSource)
        //         return true;

        //     let matchMethod;
        //     if (typeof this.matchMethod === 'function')
        //         matchMethod = this.matchMethod;
        //     else {
        //         matchMethod = (itemValue, filterText) => {
        //             if (!this.caseSensitive) {
        //                 itemValue = itemValue.toLowerCase();
        //                 filterText = filterText.toLowerCase();
        //             }
        //             return itemValue[this.matchMethod](filterText);
        //         };
        //     }
        //     return !!matchMethod(item.currentText, this.filterText);
        // },
        _fetchData(more) {
            // this.currentDataSource.filter({
            //     text: {
            //         operator: this.matchMethod,
            //         value: this.filterText,
            //         caseInsensitive: !this.caseSensitive,
            //     },
            // });
            return this.currentDataSource.shouldRemote() ? this.debouncedFetchData(more) : this.fetchData(more);
        },
        fetchData(more) {
            const dataSource = this.currentDataSource;
            if (!dataSource)
                return;

            // if (!more)
            // this.currentData = [];

            this.loading = true;
            const offset = more ? this.currentData.length : 0;
            const limit = this.pageable ? +this.pageSize : Infinity;

            // dataSource 的多次 promise 必须串行
            return this.promiseSequence = this.promiseSequence.then(() => {
                if (this.filterable) {
                    dataSource.filter({
                        text: {
                            operator: this.matchMethod,
                            value: this.filterText,
                            caseInsensitive: !this.caseSensitive,
                        },
                    });
                }
                return dataSource.fetch(offset, limit).then((data) => {
                    this.loading = false;
                    return this.currentData = dataSource.slice(0, offset + limit);
                }).then(() => {
                    MComplex.watch.itemVMs.call(this, this.itemVMs);
                    this.$refs.popper.currentOpened && this.$refs.popper.scheduleUpdate();
                }).catch(() => this.loading = false);
            });
        },
        onFocus() {
            // @disabled
        },
        onInput(value) {
            if (!this.filterable)
                return;
            this.currentText = value;
            // value.split(',')
            this.filterText = value;

            if (this.$emitPrevent('before-filter', { filterText: value }, this))
                return;

            this._fetchData();
            this.open();
        },
        onBlur() {
            if (!this.filterable)
                return;
            if (this.multiple) // @TODO: 需要理清一下需求
                return;

            // 这边必须要用 setTimeout，$nextTick 也不行，需要保证在 @select 之后完成
            setTimeout(() => {
                if (this.preventBlur)
                    return this.preventBlur = false;

                const oldVM = this.selectedVM;

                const filterText = this.filterText || this.currentText;
                if ((oldVM && filterText === oldVM.currentText) || (!oldVM && !filterText))
                    return;

                let selectedVM = this.itemVMs.find((itemVM) => itemVM.currentText === filterText);

                // 如果没有匹配项则恢复到上一个状态
                if (!selectedVM && filterText) {
                    selectedVM = oldVM;
                    this.filterText = this.currentText = '';
                    this._fetchData();
                    return;
                }

                this.selectedVM = selectedVM;
                const value = selectedVM ? selectedVM.value : undefined;

                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }, 200);
        },
        onEnter() {
            if (this.focusedVM)
                this.select(this.focusedVM);
            this.close();
        },
        onInputEnter() {
            if (this.focusedVM)
                this.select(this.focusedVM);
            this.close();
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
            this.preventBlur = true;

            if (this.multiple) {
                const oldValues = this.values;
                const values = [];

                if (this.$emitPrevent('before-clear', { oldValues, values }, this))
                    return;

                this.selectedVMs.forEach((itemVM) => itemVM.currentSelected = false);
                this.selectedVMs = [];
                this.filterText = this.currentText = '';
                this._fetchData();
                this.$emit('update:values', values, this);

                this.$emit('clear', {
                    oldValues,
                    values,
                }, this);
            } else {
                const oldValue = this.value;
                const value = undefined;

                if (this.$emitPrevent('before-clear', { oldValue, value }, this))
                    return;

                this.selectedVM = undefined;
                this.filterText = this.currentText = '';
                this._fetchData();
                this.$emit('input', value, this);
                this.$emit('update:value', value, this);

                this.$emit('clear', {
                    oldValue,
                    value,
                }, this);
            }

            this.focus();
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
