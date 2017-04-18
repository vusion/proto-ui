import Vue from 'vue';

Vue.directive('href', {
    bind(el, binding) {
        el.addEventListener('click', (e) => location.href = binding.value);
    },
});

Vue.directive('to', {
    bind(el, binding, vnode) {
        const $router = vnode.componentInstance.$router;
        if (!$router)
            return console.warn('[proto-ui] Cannot find vue router.');

        el.addEventListener('click', (e) => $router.push(binding.value));
    },
});
