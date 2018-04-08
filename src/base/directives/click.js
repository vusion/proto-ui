import event from '../utils/event';

export const repeatClick = {
    bind(el, binding, vnode) {
        const wait = +binding.arg || 400;
        const interval = 100;
        const handler = vnode.context[binding.expression];
        let pressing = false;
        let timer;

        const fn = () => {
            if (!pressing)
                return;

            handler();
            timer = setTimeout(fn, interval);
        };

        event.on(el, 'mousedown', (e) => {
            if (e.button !== 0)
                return;

            event.once(document, 'mouseup', () => pressing = false);
            clearTimeout(timer);
            pressing = true;
            handler();
            timer = setTimeout(fn, wait);
        });
    },
};

export const clickOutside = {
    bind(el, binding) {
        const handler = function (e) {
            if (el.contains(e.target))
                return false;
            if (binding.expression)
                binding.value(e);
        };
        el.__clickOutsideHandler__ = handler;
        document.addEventListener('click', handler);
    },
    unbind(el, binding) {
        document.removeEventListener('click', el.__clickOutsideHandler__);
        delete el.__clickOutsideHandler__;
    },
};
