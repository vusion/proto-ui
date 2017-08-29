import Vue from 'vue';

export const createElement = () => {
    const elem = document.createElement('div');
    document.body.appendChild(elem);
    return elem;
};

const ctorMap = new Map();
export const createVM = (Component, propsData) => {
    let Ctor = ctorMap.get(Component);
    if (!Ctor) {
        Ctor = Vue.extend(Component);
        ctorMap.set(Component, Ctor);
    }

    return new Ctor({ propsData });
};

export const createWrapVM = (Component, propsData) => {
    const vm = new Vue({
        data() { return propsData; },
        destroyed() {
            this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
        },
        render(h) {
            return h(Component, { props: this.$data, ref: 'child' });
        },
    });

    const elem = createElement();
    vm.$mount(elem);

    return vm;
};
