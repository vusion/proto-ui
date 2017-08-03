export default {
    name: 'u-router-item',
    props: {
        to: [String, Object],
        replace: { type: Boolean, default: false },
        exact: { type: Boolean, default: false },
    },
    computed: {
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const current = this.$route;
            const location = this.$router.resolve(this.to).location;

            return this.exact ? location.path === current.path : current.path.startsWith(location.path);
        },
    },
    methods: {
        navigate() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const router = this.$router;
            this.replace ? router.replace(this.to) : router.push(this.to);

            this.$emit('navigate', {
                to: this.to,
                exact: this.exact,
                replace: this.replace,
            });
        },
    },
};
