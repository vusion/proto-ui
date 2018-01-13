import event from './utils/event';

export const href = {
    bind(el, binding) {
        el.bindingValue = binding.value;
        el.addEventListener('click', (e) => location.href = el.bindingValue);
    },
    componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    },
};

export const to = {
    bind(el, binding, vnode) {
        const $router = vnode.componentInstance.$router;
        if (!$router)
            return console.warn('[proto-ui] Cannot find vue router.');

        el.bindingValue = binding.value;
        el.addEventListener('click', (e) => $router.push(el.bindingValue));
    },
    componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    },
};

export const ellipsisTitle = {
    update(el, binding, vnode) {
        const mouseenterHandler = function (e) {
            // 此处如果判断已存在title属性则不添加的话，会导致在u-select中场景下value不发生变化，text发生变化的title不会更新值
            const style = getComputedStyle(el);
            const title = binding.value || el.innerText;
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis' && style.whiteSpace === 'nowrap' && el.scrollWidth > el.offsetWidth)
                el.setAttribute('title', title);
        };
        el.mouseenterHandler = mouseenterHandler;
        event.on(el, 'mouseenter', mouseenterHandler);
    },
    unbind(el, binding) {
        event.off(el, 'mouseenter', el.mouseenterHandler);
    },
};

export const repeatClick = {
    bind(el, binding, vnode) {
        const wait = +binding.arg || 400;
        const interval = 100;
        const handler = vnode.context[binding.expression];
        let pressing = false;
        let timeout;

        const fn = () => {
            if (!pressing)
                return;

            handler();
            timeout = setTimeout(fn, interval);
        };

        event.on(el, 'mousedown', (e) => {
            if (e.button !== 0)
                return;

            event.once(document, 'mouseup', () => pressing = false);
            clearTimeout(timeout);
            pressing = true;
            handler();
            timeout = setTimeout(fn, wait);
        });
    },
};
