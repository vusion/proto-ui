import Vue from 'vue';

/**
 * 给任意元素添加`<u-tooltip>`工具提示效果
 * @value 需要绑定的内容

 */
export const tooltip = {
    bind(el, binding) {
        if (!el.dataset)
            el.dataset = {};
        el.dataset.tooltip = binding.value;

        const propsData = {
            reference: el,
            content: binding.value,
        };

        Object.keys(binding.modifiers).forEach((key) => {
            if (['click', 'hover', 'right-click', 'double-click', 'manual'].includes(key))
                propsData.trigger = key;
            if (/^(top|bottom|left|right)(-start|-end)?$/.test(key))
                propsData.placement = key;
        });

        const Tooltip = Vue.component('u-tooltip');
        el.tooltip = new Tooltip({
            propsData,
        }).$mount();
    },
    update(el, binding) {
        el.dataset.tooltip = binding.value;
        if (el.tooltip)
            el.tooltip.content = binding.value;
    },
    unbind(el, binding) {
        el.tooltip && el.tooltip.$destroy();
    },
};
