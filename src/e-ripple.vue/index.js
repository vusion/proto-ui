import { addClass } from '../utils/dom';
import { getPosition } from '../utils/style';

export default {
    name: 'e-ripple',
    props: {
        reference: { type: [String], default: 'parent' },
    },
    data() {
        return {
            referenceEl: undefined,
        };
    },
    mounted() {
        this.referenceEl = this.$el.parentElement;

        addClass(this.referenceEl, this.$style.reference);
        this.referenceEl.addEventListener('click', this.onClick);
    },
    destroyed() {
        this.referenceEl.removeEventListener('click', this.onClick);
    },
    methods: {
        onClick(e) {
            this.$el.removeAttribute('animated');
            const pos = getPosition(this.referenceEl);
            this.$el.style.left = e.clientX - pos.left + 'px';
            this.$el.style.top = e.clientY - pos.top + 'px';
            this.$el.setAttribute('animated', 'animated');
        },
    },
};
