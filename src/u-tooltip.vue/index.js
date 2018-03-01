export default {
    name: 'u-tooltip',
    props: {
        content: { type: String, default: '提示内容' },
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        reference: HTMLElement, // 为了方便生成指令
    },
};
