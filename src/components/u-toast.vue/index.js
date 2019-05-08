const UToast = {
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
            if (this.single && this.items[0]) {
                Object.assign(this.items[0], options);
                this.items[0].counter++;
            } else {
                this.items.unshift(options);
                this.items[0].counter = 0;
            }

            const item = this.items[0];

            if (item.duration) {
                setTimeout(() => {
                    if (!item.counter)
                        this.close(item);
                    else
                        item.counter--;
                }, item.duration);
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
        },
        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll() {
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

        Vue.prototype.$toast = UToast.toast = new Ctor();

        const METHODS = ['show', 'closeAll', 'success', 'warning', 'info', 'error'];
        METHODS.forEach((method) => UToast[method] = UToast.toast[method].bind(UToast.toast));
    },
};

export { UToast };
export default UToast;
