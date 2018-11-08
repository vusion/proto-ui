import { MSinglex } from '../m-singlex.vue';
import { MMultiplex } from '../m-multiplex.vue';

const MComplex = {
    name: 'm-complex',
    groupName: 'm-complex-group',
    childName: 'm-complex-item',
    mixins: [MSinglex, MMultiplex],
    props: {
        // @inherit: value: null,
        // @inherit: autoSelect: { type: Boolean, default: false },
        // @inherit: cancelable: { type: Boolean, default: false },
        multiple: { type: Boolean, default: false },
        // @inherit: readonly: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            // @inherit: groupVMs: [],
            // @inherit: itemVMs: [],
            // @inherit: selectedVM: undefined,
            // @inherit: selectedVMs: undefined,
            currentMultiple: this.multiple,
        };
    },
    watch: {
        multiple(multiple) {
            this.currentMultiple = multiple;
        },
        // This method just run once after pushing many itemVMs
        itemVMs(itemVMs, oldVMs) {
            (this.currentMultiple ? MMultiplex : MSinglex).watch.itemVMs.call(this, itemVMs, oldVMs);
        },
    },
    methods: {
        watchValue(value) {
            (this.currentMultiple ? MMultiplex : MSinglex).methods.watchValue.call(this, value);
        },
        handleSelect(itemVM, oldValue) {
            (this.currentMultiple ? MMultiplex : MSinglex).methods.handleSelect.call(this, itemVM, oldValue);
        },
    },
};

export * from './item.vue';
export { MComplex };
export default MComplex;
