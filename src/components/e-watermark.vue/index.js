import throttle from 'lodash/throttle';
export const EWatermark = {
    name: 'e-watermark',
    props: {
        text: { type: String, default: 'text' },
        markSize: { type: Number, default: 120 },
        opacity: { type: Number, default: 0.1 },
        image: { type: [
            HTMLImageElement,
            HTMLVideoElement,
            HTMLCanvasElement,
            window.SVGImageElement,
            window.ImageBitmap,
            window.OffscreenCanvas,
        ] },
    },
    watch: {
        text() {
            setTimeout(() => {
                this.redrawMark();
                this.redraw();
            }, 100);
        },
    },
    computed: {
        markWidth() {
            return this.markSize * Math.sqrt(3) * 2;
        },
        markHeight() {
            return this.markSize * 2;
        },
    },
    created() {
        this.redraw = throttle(this.redraw, 250);
    },
    mounted() {
        this.drawMark();
        this.redraw();
        window.addEventListener('resize', this.redraw);
    },
    destroyed() {
        window.removeEventListener('resize', this.redraw);
    },
    methods: {
        drawMark() {
            const markEl = this.$refs.mark;
            const width = markEl.width;
            const height = markEl.height;
            const ctx = markEl.getContext('2d');

            ctx.translate(width / 2, height / 2);
            ctx.scale(2, 2);
            ctx.rotate(-Math.PI / 6);
            ctx.fillStyle = 'black';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(this.text, 0, 0);

            return markEl;
        },
        redrawMark() {
            const markEl = this.$refs.mark;
            const ctx = markEl.getContext('2d');
            const width = markEl.width;
            const height = markEl.height;
            ctx.clearRect(-width, -height, width * 2, height * 2);
            ctx.fillText(this.text, 0, 0);
        },
        draw(image) {
            const canvasEl = this.$refs.canvas;
            const wh = window.innerHeight;
            const ww = window.innerWidth;
            const isFirstPaint = !this.lastRectangle;
            this.lastRectangle = isFirstPaint ? {
                ww: 0,
                wh: 0,
            } : this.lastRectangle;
            if (wh > this.lastRectangle.wh || ww > this.lastRectangle.ww) {
                this.lastRectangle = {
                    ww: Math.max(ww, this.lastRectangle.ww),
                    wh: Math.max(wh, this.lastRectangle.wh),
                };
            } else if (!isFirstPaint) {
                return;
            }
            canvasEl.style.width = ww + 'px';
            canvasEl.style.height = wh + 'px';
            const width = canvasEl.width = ww * 2;
            const height = canvasEl.height = wh * 2;

            const ctx = canvasEl.getContext('2d');

            const markHeight = this.markHeight;
            const markWidth = this.markWidth;
            for (let i = 0; i < width; i += markWidth) {
                for (let j = 0; j < height; j += markHeight)
                    ctx.drawImage(image, i, j, markWidth, markHeight);
            }
        },
        redraw() {
            const image = this.image || this.$refs.mark;
            this.draw(image);
        },
    },
};

export default EWatermark;
