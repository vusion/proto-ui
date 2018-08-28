import Vue from 'vue';
import Popper from '@vusion/popper.js';
import event from '../base/utils/event';

export default {
    name: 'u-popper',
    props: {
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click', validator: (value) => ['click', 'hover', 'right-click', 'double-click', 'manual'].includes(value) },
        placement: {
            type: String, default: 'bottom-start',
            validator: (value) => /^(top|bottom|left|right)(-start|-end)?$/.test(value),
        },
        reference: HTMLElement,
        offset: { type: String, default: '0' },
        hoverDelay: { type: Number, default: 0 },
        hideDelay: { type: Number, default: 0 },
        appendTo: { type: String, default: 'body', validator: (value) => ['body', 'reference'].includes(value) },
        boundariesElement: { default: 'window' },
        escapeWithReference: { type: Boolean, default: true },
        arrowElement: { type: String, default: '[u-arrow]' },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {
                        offset: {},
                    },
                };
            },
        },
        disabled: { type: Boolean, default: false },
        followCursor: { type: Boolean, default: false },
        cursorOffsetX: { type: Number, default: 0 },
        cursorOffsetY: { type: Number, default: 0 },
    },
    data() {
        return {
            currentOpen: this.open,
            popper: undefined,
            // 在出现滚动条的时候 需要特殊处理下
            mouseenterEvent: {},
        };
    },
    watch: {
        open(value) {
            this.currentOpen = value;
        },
        currentOpen(value) {
            // 不直接用样式的显隐，而用popper的create和destroy，popper有可能是从不同的地方触发的，reference对象会变
            value ? this.createPopper() : this.destroyPopper();
        },
    },
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    mounted() {
        // 虽然 Vue 中一般子组件比父组件先 mounted，
        // 但这里必须放到 mounted。不然可能在 v-if 的情况下出不来。。
        /* eslint-disable consistent-this */
        const parentVM = this;
        this.childVM = new Vue({
            name: 'u-popper-child',
            parent: parentVM,
            render(h) { return parentVM.$slots.popper && parentVM.$slots.popper[0]; },
        });
        this.childVM.parentVM = parentVM;
        this.childVM.$mount();

        const referenceEl = this.reference || this.$el;
        const popperEl = this.childVM.$el;

        if (this.followCursor)
            event.on(document.body, 'mousemove', this.onMouseMove);

        // 绑定事件
        const offEvents = this.offEvents = [];
        let timer = null;
        if (this.trigger === 'click')
            offEvents.push(event.on(referenceEl, 'click', () => this.toggle()));
        else if (this.trigger === 'hover') {
            offEvents.push(event.on(referenceEl, 'mouseenter', (e) => {
                clearTimeout(timer);
                timer = null;
                setTimeout(() => {
                    this.toggle(true);
                    // 页面有滚动条的时候 会出现滚动到reference元素上这是会触发mouseenter事件，这个时候需要重新设置reference的位置
                    this.mouseenterEvent = e;
                }, this.hoverDelay);
            }));
            if (this.hideDelay) {
                offEvents.push(event.on(popperEl, 'mouseenter', () => {
                    clearTimeout(timer);
                    timer = null;
                }));
            }
            offEvents.push(event.on(document, 'mouseover', (e) => {
                // !referenceEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
                if (this.currentOpen && !timer && !referenceEl.contains(e.target) && !popperEl.contains(e.target))
                    timer = setTimeout(() => this.toggle(false), this.hideDelay);
            }));
        } else if (this.trigger === 'double-click')
            offEvents.push(event.on(referenceEl, 'dblclick', () => this.toggle()));
        else if (this.trigger === 'right-click') {
            offEvents.push(event.on(referenceEl, 'contextmenu', (e) => {
                e.preventDefault();
                this.toggle();
            }));
        }
        // @TODO: 有没有必要搞 focus-in
        offEvents.push(event.on(document, 'mousedown', (e) => {
            !referenceEl.contains(e.target) && !popperEl.contains(e.target) && this.toggle(false);
        }));

        this.currentOpen && this.createPopper();
    },
    beforeUpdate() {
        // 先 update 子组件
        this.childVM.$forceUpdate();
    },
    beforeDestroy() {
        this.destroyPopper();
        // 先 destroy 子组件
        this.childVM = this.childVM && this.childVM.$destroy();
        // 取消绑定事件
        this.offEvents.forEach((off) => off());
        event.off(document.body, 'mousemove', this.onMouseMove);
    },
    methods: {
        getOptions() {
            const options = Object.assign({}, this.options, {
                placement: this.placement,
            });

            // 这里用户自定义options 也可能传入offset参数
            if (options.modifiers.offset && !options.modifiers.offset.offset)
                options.modifiers.offset.offset = this.offset;

            // 自定义options 传入offset值情况
            if (!options.modifiers.offset && this.offset) {
                options.modifiers.offset = {
                    offset: this.offset,
                };
            }

            options.escapeWithReference = this.escapeWithReference;

            options.modifiers.arrow = { element: this.arrowElement };
            options.modifiers.preventOverflow = { boundariesElement: this.boundariesElement };

            return options;
        },
        createPopper() {
            const referenceEl = this.reference || this.$el;
            const popperEl = this.childVM.$el;
            if (this.appendTo === 'body')
                document.body.appendChild(popperEl);
            else if (this.appendTo === 'reference')
                referenceEl.appendChild(popperEl);

            const options = this.getOptions();
            this.popper = new Popper(referenceEl, popperEl, options);
            // 特殊处理滚动条的情况
            if (this.followCursor)
                this.onMouseMove(this.mouseenterEvent);
        },
        update() {
            this.popper && this.popper.update();
        },
        destroyPopper() {
            const referenceEl = this.reference || this.$el;
            const popperEl = this.childVM.$el;
            if (this.appendTo === 'body')
                popperEl.parentElement === document.body && document.body.removeChild(popperEl);
            else if (this.appendTo === 'reference')
                popperEl.parentElement === referenceEl && referenceEl.removeChild(popperEl);

            this.popper && this.popper.destroy();
            this.popper = undefined;
        },
        toggle(open) {
            if (this.disabled)
                return;

            const oldOpen = this.currentOpen;

            if (open === undefined)
                open = !this.currentOpen;

            if (open === oldOpen)
                return;

            let cancel = false;
            this.$emit('before-toggle', {
                open,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentOpen = open;
            this.$emit('update:open', open);
            this.$emit('toggle', {
                open,
            });
        },
        onMouseMove(e) {
            const referenceEl = this.reference || this.$el;
            if (e.target === referenceEl && this.popper) {
                let top = e.clientY;
                let left = e.clientX;
                let right = e.clientX;
                let bottom = e.clientY;
                this.$nextTick(() => {
                    if (this.placement.includes('top')) {
                        top = bottom -= this.cursorOffsetY || 20;
                        left = right += this.cursorOffsetX || 0;
                    } else if (this.placement.includes('bottom')) {
                        top = bottom += this.cursorOffsetY || 20;
                        right = left += this.cursorOffsetX || 0;
                    } else if (this.placement.includes('left')) {
                        right = left -= this.cursorOffsetX || 20;
                        bottom = top += this.cursorOffsetY || 0;
                    } else if (this.placement.includes('right')) {
                        left = right += this.cursorOffsetX || 20;
                        bottom = top += this.cursorOffsetY || 0;
                    }
                    this.popper.reference = {
                        getBoundingClientRect: () => ({
                            width: 0,
                            height: 0,
                            top,
                            left,
                            right,
                            bottom,
                        }),
                        clientWidth: 0,
                        clientHeight: 0,
                    };
                    this.popper.scheduleUpdate();
                });
            }
        },
    },
};
