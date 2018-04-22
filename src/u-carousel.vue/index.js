import Single from '../u-single.vue';

export default {
    name: 'u-carousel',
    childName: 'u-carousel-item',
    mixins: [Single],
    props: {
        autoSelect: { type: Boolean, default: true },
        value: null,
        autoPlay: { type: Boolean, default: true },
        interval: { type: Number, default: 4000, validator: (value) => Number.isInteger(value) && value >= 0 },
        direction: { type: String, default: 'right' },
        animation: String,
        // duration: { type: Number, default: 1000, validator: (value) => Number.isInteger(value) && value >= 0 },
        router: { type: Boolean, default: false },
        hideButtons: { type: Boolean, default: false },
    },
    data() {
        return {
            animating: true,
        };
    },
    computed: {
        selectedIndex: {
            get() {
                return this.itemVMs.indexOf(this.selectedVM);
            },
            set(index) {
                this.selectedVM = this.itemVMs[index];
            },
        },
    },
    created() {
        this.$on('select', ($event) => {
            this.router && $event.itemVM.navigate();
            clearTimeout(this.timer);
        });
    },
    mounted() {
        this.play();
    },
    methods: {
        prev() {
            const length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex - 1 + length) % length;
            clearTimeout(this.timer);
        },
        next() {
            const length = this.itemVMs.length;
            this.selectedIndex = (this.selectedIndex + 1) % length;
            clearTimeout(this.timer);
        },
        play() {
            if (!this.autoPlay)
                return;

            this.timer = setTimeout(() => {
                this.next();
                this.play();
            }, this.interval);
        },
    },
};
