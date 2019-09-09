export const UToast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        duration: { type: Number, default: 2000 },
        color: { type: String, default: 'default' },
        text: String,
        closable: { type: Boolean, default: false },
    },
    data() {
        return {
            items: [],
            itemsQueue: new Map(),
        };
    },
    mounted() {
        if (this.position !== 'static')
            document.body.appendChild(this.$el);
    },
    methods: {
        show(text, duration, color) {
            if (!this.$el)
                this.$mount(document.createElement('div'));

            this.open({
                text: text || this.text,
                color,
                duration: duration === undefined ? this.duration : duration,
            });
        },
        open(options) {
            let item = this.items[0];
            if (this.single && item) {
                if (this.itemsQueue.has(item)) {
                    clearTimeout(this.itemsQueue.get(item));
                    this.itemsQueue.delete(item);
                }
                Object.assign(item, options);
            } else {
                item = options;
                this.items.unshift(item);
            }

            if (item.duration) {
                this.itemsQueue.set(item, setTimeout(() => {
                    this.itemsQueue.delete(item);
                    this.close(item);
                }, item.duration));
            }

            this.$emit('open', item, this);
        },
        close(item) {
            let cancel = false;
            this.$emit('before-close', Object.assign({
                preventDefault: () => cancel = true,
            }, item), this);
            if (cancel)
                return;

            const index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);

            this.$emit('close', item, this);
            this.closeAll();
        },
        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll() {
            this.itemsQueue.forEach((timer) => {
                clearTimeout(timer);
            });
            this.itemsQueue.clear();
            this.items = [];
        },
        success(message, duration) {
            this.show(message, duration, 'success');
        },
        warning(message, duration) {
            this.show(message, duration, 'warning');
        },
        info(message, duration) {
            this.show(message, duration, 'info');
        },
        error(message, duration) {
            this.show(message, duration, 'error');
        },
    },
    install(Vue, id) {
        const Ctor = Vue.component(id);
        if (!Ctor)
            return;

        const toast = Vue.prototype.$toast = this.toast = new Ctor();

        const METHODS = ['show', 'closeAll', 'success', 'warning', 'info', 'error'];
        METHODS.forEach((method) => this[method] = toast[method].bind(toast));
    },
};

export default UToast;
