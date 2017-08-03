export default {
    name: 'u-tabs',
    props: {
        selectedIndex: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            tabs: [],
            selectedIndex_: this.selectedIndex,
        };
    },
    computed: {
        selectedTab() {
            return this.tabs[this.selectedIndex_];
        },
    },
    methods: {
        add(tab) {
            this.tabs.push(tab);
        },
        remove(tab) {
            const index = this.tabs.indexOf(tab);
            ~index && this.tabs.splice(index, 1);
        },
        select(index) {
            if (this.readonly || this.disabled || this.tabs[index].disabled)
                return;

            const tab = this.tabs[index];
            this.selectedIndex_ = index;

            this.$emit('select', {
                selectedTab: tab,
                selectedIndex: index,
            });

            this.router && tab.navigate();
        },
    },
};
