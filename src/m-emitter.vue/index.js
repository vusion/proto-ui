const broadcast = function (condition, eventName, ...params) {
    this.$children.forEach(($child) => {
        if (condition($child))
            $child.$emit(eventName, ...params);
        else
            broadcast.apply($child, [condition, eventName].concat(params));
    });
};

const MEmitter = {
    name: 'm-emitter',
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
        $dispatch(...args) {
            this.dispatch(...args);
        },
        $broadcast(...args) {
            this.broadcast(...args);
        },
        $contact(condition, callback) {
            if (typeof condition === 'string') {
                const name = condition;
                condition = ($parent) => $parent.$options.name === name;
            }

            let $parent = this.$parent || this.$root;
            while ($parent && !condition($parent))
                $parent = $parent.$parent;

            $parent && callback($parent);
        },
    },
};

export { MEmitter };
export default MEmitter;
