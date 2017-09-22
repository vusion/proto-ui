const broadcast = function (condition, eventName, ...params) {
    this.$children.forEach(($child) => {
        if (condition($child))
            $child.$emit(eventName, ...params);
        else
            broadcast.apply($child, [condition, eventName].concat(params));
    });
};

export default {
    name: 'u-emitter',
    methods: {
        dispatch(condition, eventName, ...params) {
            if (typeof condition === 'string') {
                const name = condition;
                condition = ($parent) => $parent.$options.name === name;
            }

            let $parent = this.$parent || this.$root;
            while ($parent && !condition($parent))
                $parent = $parent.$parent;

            $parent && $parent.$emit(eventName, ...params);
        },
        broadcast(condition, eventName, ...params) {
            if (typeof condition === 'string') {
                const name = condition;
                condition = ($child) => $child.$options.name === name;
            }

            broadcast.apply(this, [condition, eventName].concat(params));
        },
    },
};
