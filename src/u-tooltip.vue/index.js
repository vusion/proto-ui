export default {
    name: 'u-tooltip',
    props: {
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        reference: HTMLElement, // 为了方便生成指令
        disabled: { type: Boolean, default: false },
        hideDelay: { type: Number, default: 0 },
    },
    computed: {
        hasContent() {
            return this.content !== undefined && this.content !== '' || this.$slots.content !== undefined;
        },
    },
    methods: {
        update() {
            this.$refs.popper.update();
        },
        toggle(open) {
            this.$refs.popper.toggle(open);
        },
    },
};
