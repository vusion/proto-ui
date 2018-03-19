export default {
    name: 'u-popup',
    props: {
        title: String,
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        placement: { type: String, default: 'bottom-start' },
        reference: HTMLElement, // 为了方便生成指令
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true },
    },
    methods: {
        toggle(open) {
            this.$refs.popper.toggle(open);
        },
    },
};
