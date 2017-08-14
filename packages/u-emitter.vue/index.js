const broadcast = function (name, eventName, ...params) {
    this.$children.forEach(($child) => {
        if ($child.$options.name)
            $child.$emit(eventName, ...params);
        else
            broadcast.apply($child, [name, eventName].concat(params));
    });
};

export default {
    name: 'u-emitter',
    methods: {
        dispatch(name, eventName, ...params) {
            let $parent = this.$parent || this.$root;
            while ($parent && $parent.$options.name !== name)
                $parent = $parent.$parent;

            $parent && $parent.$emit(eventName, ...params);
        },
        broadcast(name, eventName, ...params) {
            broadcast.apply(this, [name, eventName].concat(params));
        },
    },
};
