export default {
    name: 'u-router-item',
    props: {
        href: String,
        target: { type: String, default: '_self' },
        to: [String, Object],
        replace: { type: Boolean, default: false },
        exact: { type: Boolean, default: false },
    },
    computed: {
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Use `<u-router-item>` but cannot find vue router.');

            const current = this.$route;
            const location = this.$router.resolve(this.to).location;

            return this.exact ? location.path === current.path : current.path.startsWith(location.path);
        },
    },
    methods: {
        navigate() {
            if (this.href) {
                if (this.target === '_blank')
                    return window.open(this.href, this.target);
                else
                    return location.href = this.href;
            } else {
                if (this.target === '_blank') {
                    const href = this.$router && this.$router.resolve(this.to, this.$route, this.append).href;
                    return window.open(href, this.target);
                }
            }

            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Use `<u-router-item>` but cannot find vue router.');

            let cancel = false;
            this.$emit('before-navigate', {
                to: this.to,
                replace: this.replace,
                exact: this.exact,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            const $router = this.$router;
            this.replace ? $router.replace(this.to) : $router.push(this.to);

            this.$emit('navigate', {
                to: this.to,
                replace: this.replace,
                exact: this.exact,
            });
        },
    },
};
