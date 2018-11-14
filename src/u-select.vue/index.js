import { UListView } from '../u-list-view.vue';
import DataSource from '../utils/DataSource';
import { ellipsisTitle } from '../directives';

const USelect = {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    extends: UListView,
    directives: { ellipsisTitle },
    props: {
        // @inherit: value: { type: String, default: '' },
        // @inherit: field: { type: String, default: 'text' },
        // @inherit: data: Array,
        // @inherit: dataSource: [DataSource, Function],
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: multiple: { type: Boolean, default: false },
        // @inherit: keepOrder: { type: Boolean, default: false },
        multipleAppear: { type: String, default: 'text' },
        tagsOverflow: { type: String, default: 'hidden' },
        autoSelect: { type: Boolean, default: true },
        placeholder: { type: String, default: '请选择' },
        clearable: { type: Boolean, default: false },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        emptyText: { type: String, default: '无匹配数据' },
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
            currentText: '',
            filterText: '', // 只有 input 时会改变它
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
        });
        this.$on('select', () => {
            if (!this.multiple)
                this.toggle(false);
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
        toggle(opened) {
            this.$refs.popper && this.$refs.popper.toggle(opened);
        },
        onToggle($event) {
            // 刚打开时不 filterText
            if ($event.opened) {
                this.filterText = '';
                if (this.filterable)
                    this.$refs.input.focus();
            }
            this.$emit('toggle', $event, this);
            setTimeout(() => this.ensureSelectedInView(true));
        },
        /**
         * 判断某一项是否匹配
         * @param {*} item
         */
        match(item) {
            if (!this.filterText || this.dataSource)
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
                        value: this.filterText, // @compat
                        text: this.filterText,
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

            this.dataSource && this.debouncedFetchData(true);
            this.toggle(true);
            this.$refs.popper.update();
        },
        onBlur() {
            if (!this.filterable)
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
            const firstItemVM = this.matchedVMs[0];
            if (!firstItemVM)
                return;
            this.select(firstItemVM);
            if (firstItemVM.currentSelected)
                this.filterText = '';
        },
        onInputDelete() {
            if (this.filterable && this.filterText === '') {
                const lastItemVM = this.selectedVMs.pop();
                if (!lastItemVM)
                    return;
                lastItemVM.currentSelected = false;
            }
        },
        remove(itemVM) {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value;

            let cancel = false;
            this.$emit('before-remove', {
                value: itemVM && itemVM.value,
                oldValue,
                item: itemVM && itemVM.item,
                itemVM,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            itemVM.currentSelected = false;
            itemVM.$emit('update:selected', false);
            this.watchSelectedChange(itemVM);

            // let cancel = false;

            this.$emit('input');
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
            // this.focus();

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
export { USelect };
export default USelect;
