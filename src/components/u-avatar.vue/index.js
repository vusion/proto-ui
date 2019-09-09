export const UAvatar = {
    name: 'u-avatar',
    props: {
        size: { type: Number, default: 64 }, // 头像大小
        shape: { type: String, default: 'circle', validator: (value) => ['circle', 'square'].includes(value) }, // 形状
        backgroundColor: { type: String, default: '#f2f3f8' }, // 头像背景色
        src: { type: String }, // 图片类头像地址
        alt: { type: String }, // 图片类头像获取失败时展示文案
        icon: { type: String }, // 参考 `icon` 组件
        fontSize: { type: Number, default() { return this.size / 2; } }, // 用于 `icon` 类型头像以及 `slot` 的默认插入
    },
    data() {
        const size = `${this.size}px`;
        const style = {
            width: size,
            height: size,
            'background-color': this.backgroundColor,
            'line-height': size,
        };
        if (this.shape === 'square') {
            Object.assign(style, {
                'border-radius': '4px',
            });
        }
        let type = '';
        if (this.src) {
            type = 'img';
        } else if (this.icon) {
            type = 'icon';
        } else {
            type = 'slot';
        }
        if (type !== 'img') {
            Object.assign(style, {
                'font-size': `${this.fontSize}px`,
            });
        }
        return {
            type,
            style,
        };
    },
};

export default UAvatar;
