const FRender = {
    name: 'f-render',
    functional: true,
    props: {
        vnode: null,
    },
    render(h, context) {
        return context.props.vnode || context.children;
    },
};

export { FRender };
export default FRender;
