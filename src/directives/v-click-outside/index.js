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
