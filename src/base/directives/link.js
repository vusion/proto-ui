/**
 * 给任意元素添加`<a>`链接效果
 * 该指令适合在某些场景下临时使用，推荐直接使用`<u-link>`或者从`<u-router-item>`继承新组件
 * @modifier blank - 是否打开新的窗口
 */
export const href = {
    bind(el, binding) {
        el.dataset = el.dataset || {};
        el.dataset.href = binding.value;
        el.__handler__ = (e) => {
            if (binding.modifiers.blank)
                window.open(el.dataset.href);
            else
                location.href = el.dataset.href;
        };
        el.addEventListener('click', el.__handler__);
    },
    update(el, binding) {
        el.dataset.href = binding.value;
    },
    unbind(el) {
        el.removeEventListener('mouseenter', el.__handler__);
        delete el.__handler__;
    },
};

/**
 * 给任意元素添加`<router-link>`的`to`效果
 * 该指令适合在某些场景下临时使用，推荐直接使用`<u-link>`或者从`<u-router-item>`继承新组件
 * @modifier replace - History 使用`push`方式还是`replace`方式
 */
export const to = {
    bind(el, binding, vnode) {
        el.dataset = el.dataset || {};
        el.dataset.to = binding.value;

        const $router = vnode.componentInstance.$router;
        if (!$router)
            return console.warn('[proto-ui] Use `v-to` but cannot find vue router.');

        el.__handler__ = (e) => {
            binding.modifiers.replace ? $router.replace(el.dataset.to) : $router.push(el.dataset.to);
        };
        el.addEventListener('click', el.__handler__);
    },
    update(el, binding) {
        el.dataset.to = binding.value;
    },
    unbind(el) {
        if (el.__handler__) {
            el.removeEventListener('mouseenter', el.__handler__);
            el.__handler__ = undefined;
        }
    },
};
