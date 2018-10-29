import { MSinglexItem } from '../../m-singlex.vue';
import { MMultiplexItem } from '../../m-multiplex.vue';
import { ellipsisTitle } from '../../directives';

const MComplexItem = {
    name: 'm-complex-item',
    parentName: 'm-complex',
    groupName: 'm-complex-group',
    mixins: [MSinglexItem, MMultiplexItem],
    directives: { ellipsisTitle },
    props: {
        // @inherit: value: null,
        // @inherit: autoSelect: { type: Boolean, default: false },
        // @inherit: cancelable: { type: Boolean, default: false },
        // @inherit: disabled: { type: Boolean, default: false },
        item: Object,
    },
    data() {
        return {
            currentSelected: false,
            // @inherit: parentVM: undefined,
        };
    },
    methods: {
        select(e) {
            if (this.disabled || this.parentVM.readonly || this.parentVM.disabled)
                return;

            this.$emit('click', e, this);

            let cancel = false;
            this.$emit('before-select', {
                value: this.value,
                item: this.item,
                itemVM: this,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.parentVM.select(this);
        },
    },
};

export { MComplexItem };
export default MComplexItem;
