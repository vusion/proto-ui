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
        tagsOverflow: { type: String, default: 'hidden' },
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
    created() {
        this.$watch('selectedVM', (selectedVM) => {
            this.filterText = this.currentText = this.selectedVM ? this.selectedVM.currentText : '';
        });
        this.$watch('selectedVMs', (selectedVMs) => {
            this.filterText = this.currentText = selectedVMs.map((itemVM) => itemVM.currentText).join(', ');
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
            // if (this.multiple)
            //     return;
            // let selectedIndex = this.itemVMs.indexOf(this.selectedVM);
            // if (count > 0) {
            //     for (let i = selectedIndex + count; i < this.itemVMs.length; i++) {
            //         const itemVM = this.itemVMs[i];
            //         if (!itemVM.disabled) {
            //             this.selectedVM = itemVM;
            //             this.$emit('shift', {
            //                 selectedIndex,
            //                 selectedVM: itemVM,
            //                 value: itemVM.value,
            //             }, this);
            //             this.ensureSelectedInView();
            //             break;
            //         }
            //     }
            // } else if (count < 0) {
            //     if (selectedIndex === -1)
            //         selectedIndex = this.itemVMs.length;
            //     for (let i = selectedIndex + count; i >= 0; i--) {
            //         const itemVM = this.itemVMs[i];
            //         if (!itemVM.disabled) {
            //             this.selectedVM = itemVM;
            //             this.$emit('shift', {
            //                 selectedIndex,
            //                 selectedVM: itemVM,
            //                 value: itemVM.value,
            //             }, this);
            //             this.ensureSelectedInView();
            //             break;
            //         }
            //     }
            // }
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
            if (this.filterable) {
                this.fetchData().then(() => this.ensureSelectedInView(true));
                this.$refs.input.focus();
            } else
                setTimeout(() => this.ensureSelectedInView(true));

            this.$emit('open', $event, this);
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
                dataSource.filter(this.filterText ? { text: [this.matchMethod, this.filterText] } : undefined)
                    .fetch(offset, limit).then((data) => {
                        this.loading = false;
                        return this.currentData = dataSource.slice(0, offset + limit);
                    }).then(() => {
                        this.$refs.popper.currentOpened && this.$refs.popper.scheduleUpdate();
                    }).catch(() => this.loading = false));
        },
        onFocus() {
            // @disabled
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

            if (this.$emitPrevent('before-filter', { filterText: value }, this))
                return;

            this.dataSource ? this.debouncedFetchData() : this.fetchData();
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
                    this.currentText = selectedVM ? selectedVM.currentText : undefined;
                    return;
                }

                this.selectedVM = selectedVM;
                const value = selectedVM ? selectedVM.value : undefined;

                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
            }, 200);
        },
        onInputEnter() {
            // @TODO: Use focusItemVM
            const firstItemVM = this.itemVMs[0];
            if (!firstItemVM)
                return;
            this.select(firstItemVM);
            this.close();
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
            this.preventBlur = true;

            if (this.multiple) {
                const oldValues = this.values;
                const values = [];

                if (this.$emitPrevent('before-clear', { oldValues, values }, this))
                    return;

                this.selectedVMs.forEach((itemVM) => itemVM.currentSelected = false);
                this.selectedVMs = [];
                this.filterText = this.currentText = '';
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
