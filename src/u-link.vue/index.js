export default {
    name: 'u-link',
    props: {
        href: { type: String },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        append: { type: Boolean, default: false },
        disabled: { type: Boolean },
    },
    computed: {
        listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
    },
    methods: {
        onClick(e) {
            if (this.disabled)
                return e.preventDefault();

            this.$emit('click', e);
            // 先执行事件，再执行to，最后判断href
            this.navigate();
        },
        navigate() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui]', 'Cannot find vue-router.');

            let cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            const $router = this.$router;
            const { location } = $router.resolve(this.to, this.$route, this.append);
            this.replace ? $router.replace(location) : $router.push(location);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                append: this.append,
            });
        },
    },
};
