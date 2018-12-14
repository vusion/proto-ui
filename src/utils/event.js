const event = {
    on(element, type, listener, options) {
        element.addEventListener(type, listener, options);
        return () => event.off(element, type, listener, options);
    },
    off(element, type, listener, options) {
        element.removeEventListener(type, listener, options);
    },
    once(el, type, listener) {
        const fn = function (...args) {
            listener.apply(this, args);
            event.off(el, type, fn);
        };
        event.on(el, type, fn);
    },
};

export default event;
