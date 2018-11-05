import { UListView } from '../u-list-view.vue';
import { ellipsisTitle } from '../directives';

const USelect = {
    name: 'u-select',
    childName: 'u-select-item',
    groupName: 'u-select-group',
    extends: UListView,
    directives: { ellipsisTitle },
    props: {
        // @inherit: value: { type: String, default: '' },
        filterable: { type: Boolean, default: false },
        matchMethod: { type: [String, Function], default: 'includes' },
        caseSensitive: { type: Boolean, default: false },
        strict: { type: Boolean, default: false },
        emptyText: { type: String, default: '无匹配数据' },
    },
    data() {
        return {
            currentText: '',
            filterText: '', // 与 currentText 分开，只有 input 时会改变它
        };
    },
    computed: {
        // @TODO: 只能再过滤一遍数组，暂时没有好的解决方案
        matchedVMs() {
            return this.itemVMs.filter((item) => item.matched);
        },
    },
    watch: {
        selectedVM(selectedVM, oldVM) {
            if (selectedVM === oldVM)
                return;
            this.currentText = selectedVM ? selectedVM.currentLabel : '';
            this.$emit('change', {
                value: selectedVM ? selectedVM.value : undefined,
                oldValue: oldVM ? oldVM.value : undefined,
                item: selectedVM ? selectedVM.item : undefined,
                itemVM: selectedVM,
            }, this);
        },
    },
    created() {
        this.$on('select', () => {
            this.toggle(false);
        });
    },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value)
                return;
            if (value === undefined)
                this.selectedVM = this.itemVMs[0];
            else
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
        },
        toggle(open) {
            this.$refs.popper && this.$refs.popper.toggle(open);
        },
        onToggle($event) {
            // 刚打开时不 filterText
            if ($event.open)
                this.filterText = '';
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
            return !!matchMethod(item.innerText, this.filterText);
        },
        onInput(value) {
            if (!this.filterable)
                return;
            this.filterText = value;
            this.currentText = value;
            this.dataSource && this.debouncedFetchData(true);
            this.toggle(true);
        },
        onBlur() {
            if (!this.filterable)
                return;
            this.$nextTick(() => {
                const oldVM = this.selectedVM;
                let selectedVM = this.itemVMs.find((itemVM) => itemVM.currentLabel === this.currentText);

                if (!selectedVM && this.currentText)
                    selectedVM = oldVM;
                this.selectedVM = selectedVM;
                this.currentText = selectedVM ? selectedVM.currentLabel : '';

                const value = selectedVM ? selectedVM.value : undefined;

                this.$emit('input', value, this);
                this.$emit('update:value', value, this);
                this.$emit('change', {
                    value,
                    oldValue: oldVM ? oldVM.value : undefined,
                }, this);
            });
        },
    },
};

export * from './item.vue';
export * from './group.vue';
export * from './divider.vue';
export { USelect };
export default USelect;
