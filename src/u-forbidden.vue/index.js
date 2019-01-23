export default {
    name: 'u-forbidden',
    template: '<div></div>',
    props: {
        contextmenu: { type: Boolean, default: false },
        select: { type: Boolean, default: false },
        copy: { type: Boolean, default: false },
        saveKey: { type: Boolean, default: false },
        devtoolsKey: { type: Boolean, default: false },
    },
    created() {
        window.addEventListener('contextmenu', this.onContextMenu);
        window.addEventListener('selectstart', this.onSelectStart);
        window.addEventListener('copy', this.onCopy);
        window.addEventListener('keydown', this.onKeyDown);
        // this.save && this.addNoScript();
    },
    destroyed() {
        window.removeEventListener('contextmenu', this.onContextMenu);
        window.removeEventListener('selectstart', this.onSelectStart);
        window.removeEventListener('copy', this.onCopy);
        window.removeEventListener('keydown', this.onKeyDown);
        // this.save && this.removeNoScript();
    },
    methods: {
        onContextMenu(e) {
            if (!this.contextmenu)
                return;
            e.preventDefault();
            this.$emit('contextmenu', e);
        },
        onSelectStart(e) {
            if (!this.select)
                return;
            e.preventDefault();
            this.$emit('select', e);
        },
        onCopy(e) {
            if (!this.copy)
                return;
            e.preventDefault();
            this.$emit('copy', e);
        },
        onKeyDown(e) {
            const isMac = navigator.platform.includes('Mac');
            if (this.saveKey) {
                // isMac ? Cmd + S : Ctrl + S
                if ((isMac ? e.metaKey : e.ctrlKey) && e.keyCode === 83) {
                    e.preventDefault();
                    this.$emit('save-key', e);
                }
            }

            if (this.devtoolsKey) {
                // (isMac ? Cmd + Option : Ctrl + Shift) + (I || J)
                if ((isMac ? e.metaKey && e.altKey : e.ctrlKey && e.shiftKey) && (e.keyCode === 73 || e.keyCode === 74)) {
                    e.preventDefault();
                    this.$emit('devtools-key', e);
                }
                // F12
                if (e.keyCode === 123) {
                    e.preventDefault();
                    this.$emit('devtools-key', e);
                }
            }
        },
        addNoScript() {
            const noScript = document.createElement('noscript');
            const iframe = document.createElement('iframe');
            iframe.src = '*.htm';
            noScript.appendChild(iframe);
            document.body.appendChild(noScript);
            this.noScript = noScript;
        },
        removeNoScript() {
            document.body.removeChild(this.noScript);
        },
    },
};
