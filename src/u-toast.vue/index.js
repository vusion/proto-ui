import Vue from 'vue';

const Toast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: { type: Boolean, default: false },
        duration: { type: Number, default: 2000 },
        color: { type: String, default: 'default' },
        message: String,
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
        show(message, duration, color) {
            if (!this.$el)
                this.$mount(document.createElement('div'));

            this.open({
                message: message || this.message,
                duration: duration === undefined ? this.duration : duration,
                color,
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
        },
        close(item) {
            const index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);

            this.$emit('close', item);
        },
        /**
         * @method closeAll() 关闭所有消息
         * @return {void}
         */
        closeAll() {
            this.items = [];
        },
    },
};

Vue.nextTick(() => {
    const Ctor = Vue.component('u-toast');
    const toast = Toast.toast = new Ctor();
    Vue.prototype.$toast = toast;
});

export default Toast;
