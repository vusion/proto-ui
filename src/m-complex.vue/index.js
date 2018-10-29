import { MSinglex } from '../m-singlex.vue';
import { MMultiplex } from '../m-multiplex.vue';

const MComplex = {
    name: 'm-complex',
    groupName: 'm-complex-group',
    childName: 'm-complex-item',
    mixins: [MSinglex, MMultiplex],
    props: {
        value: null,
        cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            currentMultiple: this.multiple,
        };
    },
    watch: {
        multiple(multiple) {
            this.currentMultiple = multiple;
        },
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            this.watchValue(value);
        },
        selectedVM(selectedVM, oldVM) {
            if (!this.currentMultiple)
                MSinglex.watch.selectedVM.call(this, selectedVM, oldVM);
        },
        // This method just run once after pushing many itemVMs
        itemVMs() {
            if (this.currentMultiple)
                MMultiplex.watch.itemVMs.call(this);
            else
                MSinglex.watch.itemVMs.call(this);
        },
    },
    methods: {
        watchValue(value) {
            if (this.currentMultiple)
                MMultiplex.methods.watchValue.call(this, value);
            else
                MSinglex.methods.watchValue.call(this, value);
        },
        handleSelect(itemVM, oldValue) {
            if (this.currentMultiple)
                MMultiplex.methods.handleSelect.call(this, itemVM, oldValue);
            else
                MSinglex.methods.handleSelect.call(this, itemVM, oldValue);
        },
    },
};

export * from './item.vue';
export { MComplex };
export default MComplex;
