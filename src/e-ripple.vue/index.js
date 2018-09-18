import { addClass } from '../utils/dom';
import { getPosition } from '../utils/style';

export default {
    name: 'e-ripple',
    render() {
        return this.$slots.default && this.$slots.default[0];
    },
    mounted() {
        addClass(this.$el, this.$style.root);
        this.rippleEl = document.createElement('div');
        addClass(this.rippleEl, this.$style.ripple);
        this.$el.appendChild(this.rippleEl);
        this.$el.addEventListener('click', this.onClick);
    },
    methods: {
        onClick(e) {
            this.rippleEl.removeAttribute('animated');
            const pos = getPosition(this.$el);
            this.rippleEl.style.left = e.clientX - pos.left + 'px';
            this.rippleEl.style.top = e.clientY - pos.top + 'px';
            this.rippleEl.setAttribute('animated', 'animated');
        },
    },
};
