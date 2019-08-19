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
        /**
         * @deprecated
         */
        dispatch(condition, eventName, ...args) {
            if (typeof condition === 'string') {
                const name = condition;
                condition = ($parent) => $parent.$options.name === name;
            }

            let $parent = this.$parent || this.$root;
            while ($parent && !condition($parent))
                $parent = $parent.$parent;

            $parent && $parent.$emit(eventName, ...args);
        },
        /**
         * @deprecated
         */
        broadcast(condition, eventName, ...args) {
            if (typeof condition === 'string') {
                const name = condition;
                condition = ($child) => $child.$options.name === name;
            }

            broadcast.apply(this, [condition, eventName].concat(args));
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
        $emitPrevent(name, $event, senderVM, ...args) {
            let cancel = false;
            this.$emit(name, Object.assign({
                preventDefault: () => cancel = true,
            }, $event), senderVM, ...args);
            return cancel;
        },
    },
};
