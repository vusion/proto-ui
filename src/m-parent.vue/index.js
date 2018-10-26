const MParent = {
    name: 'm-parent',
    groupName: 'm-group',
    childName: 'm-child',
    data() {
        return {
            groupVMs: [],
            itemVMs: [],
        };
    },
};

export * from './m-child.vue';
export { MParent };
export default MParent;
