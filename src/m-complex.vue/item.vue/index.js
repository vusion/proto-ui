import { MSinglexItem } from '../../m-singlex.vue';
// import { MMultiplexItem } from '../../m-multiplex.vue';
import { ellipsisTitle } from '../../directives';

const MComplexItem = {
    name: 'm-complex-item',
    parentName: 'm-complex',
    groupName: 'm-complex-group',
    mixins: [MSinglexItem],
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
};

export { MComplexItem };
export default MComplexItem;
