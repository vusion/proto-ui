const UGridLayout = {
    name: 'u-grid-layout',
    props: {
        repeat: { type: Number, default: 12 },
    },
};

export * from './row.vue';
export * from './column.vue';
export { UGridLayout };
export default UGridLayout;
