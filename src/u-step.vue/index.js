import Tab from '../u-tab.vue';

export default {
    name: 'u-step',
    parentName: 'u-steps',
    extends: Tab,
    props: {
        value: { type: Number, default: 0 },
    },
    computed: {
        index() {
            return this.parentVM && this.parentVM.itemVMs.indexOf(this);
        },
    },
};
