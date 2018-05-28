import Vue from 'vue';

const Modal = {
    name: 'u-modal',
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '提示' },
        content: String,
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },
        static: { type: Boolean, default: false },
        maskClosable: { type: Boolean, default: false },
    },
    data() {
        return {
            currentVisible: this.visible,
        };
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible;
        },
        currentVisible(visible) {
            visible && this.$nextTick(() => this.$refs.root.focus());
        },
    },
    mounted() {
        if (!this.static)
            document.body.appendChild(this.$el);
    },
    methods: {
        open() {
            if (!this.$el)
                this.$mount(document.createElement('div'));

            this.currentVisible = true;
            this.$emit('update:visible', true);
            this.$emit('open');
        },
        close(ok) {
            let cancel = false;
            this.$emit('before-close', {
                ok,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentVisible = false;
            this.$emit('update:visible', false);
            this.$emit('close', {
                ok,
            });
        },
        ok() {
            this.$emit('ok');
            this.close(true);
        },
        cancel() {
            this.$emit('cancel');
            this.close(false);
        },
    },
};

Modal.alert = (content, title = '提示') => {
    const Ctor = Vue.component('u-modal');
    if (!Ctor)
        return;

    new Ctor({
        propsData: { content, title, cancelButton: '' },
    }).open();
};

Modal.confirm = (content, title = '提示') => new Promise((resolve, reject) => {
    const Ctor = Vue.component('u-modal');
    if (!Ctor)
        return;

    const instance = new Ctor({
        propsData: { content, title },
    });
    instance.$on('ok', () => resolve());
    instance.$on('cancel', () => reject());
    instance.open();
});

Vue.prototype.$alert = Modal.alert;
Vue.prototype.$confirm = Modal.confirm;

export default Modal;
