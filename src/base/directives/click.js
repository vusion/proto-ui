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
            // self 和 prevent 有个顺序问题，所以用 for 循环
            const modifiers = Object.keys(binding.modifiers);
            for (let i = 0; i < modifiers.length; i++) {
                const modifier = modifiers[i];
                if (modifier === 'self' && e.target !== el)
                    return;
                else if (modifier === 'stop')
                    e.stopPropagation();
                else if (modifier === 'prevent')
                    e.preventDefault();
            }

            // @TODO: 自定义指令其他相关
            if (e.button !== 0)
                return;

            event.once(document, 'mouseup', () => pressing = false);
            clearTimeout(timer);
            pressing = true;
            handler();
            timer = setTimeout(fn, wait);
        }, {
            capture: binding.modifiers.capture,
            once: binding.modifiers.once,
            passive: binding.modifiers.passive,
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
