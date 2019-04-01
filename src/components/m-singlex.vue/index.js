import MEmitter from '../m-emitter.vue';
import { MParent } from '../m-parent.vue';

export const MSinglex = {
    name: 'm-singlex',
    groupName: 'm-singlex-group',
    childName: 'm-singlex-item',
    mixins: [MEmitter, MParent],
    model: 'value',
    props: {
        value: null,
        autoSelect: { type: Boolean, default: false },
        cancelable: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            selectedVM: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            // 无需剪枝
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            const value = selectedVM ? selectedVM.value : undefined;
            const oldValue = oldVM ? oldVM.value : undefined;
            if (value === oldValue)
                return;

            this.$emit('change', {
                value,
                oldValue,
                selectedVM,
                selectedItem: selectedVM ? selectedVM.item : undefined,
                oldVM,
                oldItem: oldVM && oldVM.item,
            }, this);
        },
        // This method just run once after pushing many itemVMs
        itemVMs(itemVMs) {
            if (!itemVMs.includes(this.selectedVM)) {
                // 更新列表之后，原来的选择可能已不存在，这里暂存然后重新查找一遍
                const value = this.selectedVM ? this.selectedVM.value : this.value;
                this.selectedVM = undefined;
                this.watchValue(value);
            }
        },
    },
    // mounted() {
    // Don't need trigger `value` watcher at mounted hook.
    // Because there's a watcher for itemVMs.
    // this.watchValue(this.value);
    // },
    methods: {
        watchValue(value) {
            if (this.selectedVM && this.selectedVM.value === value) // 下面需要走 value === undefined
                return;
            if (value === undefined) {
                if (this.autoSelect && !this.placeholder) // this.placeholder for select...
                    this.selectedVM = this.itemVMs.find((itemVM) => !itemVM.disabled) || undefined;
                else
                    this.selectedVM = undefined;
            } else {
                this.selectedVM = this.itemVMs.find((itemVM) => itemVM.value === value);
                this.selectedVM && this.selectedVM.groupVM && this.selectedVM.groupVM.toggle(true);
            }
        },
        select(itemVM, cancelable) {
            // Check if enabled
            if (this.readonly || this.disabled || (itemVM && itemVM.disabled))
                return;

            // Prevent replication
            const oldValue = this.value;
            const oldVM = this.selectedVM;
            if (cancelable === undefined)
                cancelable = this.cancelable;
            if (!cancelable && itemVM === oldVM)
                return;

            // Emit a `before-` event with preventDefault()
            if (this.$emitPrevent('before-select', {
                value: itemVM && itemVM.value,
                oldValue,
                itemVM,
                item: itemVM && itemVM.item,
                oldVM,
                oldItem: oldVM && oldVM.item,
            }, this))
                return;

            if (cancelable && itemVM === oldVM)
                this.selectedVM = undefined;
            else
                this.selectedVM = itemVM;

            // Assign and sync `value`
            const value = this.selectedVM && this.selectedVM.value;
            const selectedItem = this.selectedVM && this.selectedVM.item;
            this.$emit('input', value, this);
            this.$emit('update:value', value, this);

            // Emit `after-` events
            this.$emit('select', {
                value,
                oldValue,
                selectedVM: this.selectedVM,
                selectedItem,
                itemVM,
                item: itemVM && itemVM.item,
            }, this);
        },
    },
};

export * from './item.vue';

export default MSinglex;
