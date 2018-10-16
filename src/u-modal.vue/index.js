import Vue from 'vue';

const UModal = {
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
            this.$emit('update:visible', true, this);
            this.$emit('open', this);
        },
        close(ok) {
            let cancel = false;
            this.$emit('before-close', {
                ok,
                preventDefault: () => cancel = true,
            }, this);
            if (cancel)
                return;

            this.currentVisible = false;
            this.$emit('update:visible', false, this);
            this.$emit('close', {
                ok,
            }, this);
        },
        ok() {
            this.$emit('ok', undefined, this);
            this.close(true);
        },
        cancel() {
            this.$emit('cancel', undefined, this);
            this.close(false);
        },
    },
};

UModal.alert = (content, title = '提示') => {
    const Ctor = Vue.component('u-modal');
    if (!Ctor)
        return;

    new Ctor({
        propsData: { content, title, cancelButton: '' },
    }).open();
};

UModal.confirm = (content, title = '提示') => new Promise((resolve, reject) => {
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

Vue.prototype.$alert = UModal.alert;
Vue.prototype.$confirm = UModal.confirm;

export { UModal };
export default UModal;
