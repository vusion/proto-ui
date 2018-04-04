export default {
    name: 'u-tooltip',
    props: {
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        reference: HTMLElement, // 为了方便生成指令
        disabled: { type: Boolean, default: false },
    },
    computed: {
        hasContent() {
            return this.content !== undefined || this.$slots.content !== undefined;
        },
    },
};
