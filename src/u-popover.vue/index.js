export default {
    name: 'u-popover',
    props: {
        title: String,
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        placement: { type: String, default: 'bottom-start' },
        reference: HTMLElement, // 为了方便生成指令
        disabled: { type: Boolean, default: false },
    },
};
