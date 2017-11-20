export default {
    name: 'u-list-view-group',
    props: {
        text: String,
        expanded: { type: Boolean, default: true },
    },
    data() {
        return {
            currentExpanded: this.expanded,
        };
    },
};
