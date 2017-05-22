import Vue from 'vue';

Vue.directive('href', {
    bind(el, binding) {
        el.bindingValue = binding.value;
        el.addEventListener('click', (e) => location.href = el.bindingValue);
    },
    componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    },
});

Vue.directive('to', {
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
});
