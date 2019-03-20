import { UTabs } from '../u-tabs.vue';

export const USteps = {
    name: 'u-steps',
    childName: 'u-step',
    extends: UTabs,
    props: {
        value: { type: Number, default: 0 },
        readonly: { type: Boolean, default: true },
        layout: { type: String, default: 'block' },
        size: String,
    },
    watch: {
        // This method just run once after pushing many itemVMs
        itemVMs: {
            overwrite: true,
            handler() {
                // 更新列表之后，原来的选择可以已不存在，这里暂存然后重新查找一遍
                const value = this.selectedVM ? this.selectedVM.index : this.value;
                this.selectedVM = undefined;
                this.watchValue(value);
            },
        },
    },
    computed: {
        itemWidth() {
            if (this.size === 'auto')
                return (1 / this.itemVMs.length) * 100 + '%';
            else
                return undefined;
        },
    },
};

export * from './step.vue';

export default USteps;
