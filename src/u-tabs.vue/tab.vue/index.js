import { MSinglexItem } from '../../m-singlex.vue';
import RouterItem from '../../m-router-item.vue';

const UTab = {
    name: 'u-tab',
    parentName: 'u-tabs',
    extends: MSinglexItem,
    mixins: [RouterItem],
    props: {
        title: String,
        /* @TODO: Remove this option */
        hidden: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
};

export { UTab };
export default UTab;
