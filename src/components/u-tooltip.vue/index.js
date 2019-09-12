import MPopper from '../m-popper.vue';

export const UTooltip = {
    name: 'u-tooltip',
    extends: MPopper,
    props: {
        content: String,
        // @inherit: opened
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        // @inherit: reference
        // @inhreit: hideDelay
        // @inherit: boundariesElement
        // @inherit: followCursor
        // @inherit: offset
        // @inherit: disabled
    },
    watch: {
        content() {
            // 内容变化时，需要更新一下 tooltip 长度
            this.update();
        },
    },
};

export default UTooltip;
