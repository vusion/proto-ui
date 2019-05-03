import pubsub from './pubsub';

export const MPublisher = {
    created() {
        const pubs = this.$options.publish;
        if (pubs) {
            Object.keys(pubs).forEach((topic) => {
                let pub = pubs[topic];
                if (typeof pub === 'string' || typeof pub === 'function')
                    pub = { expOrFn: pub };

                this.$watch(pub.expOrFn, (value) => {
                    pubsub.publish(topic, value);
                }, { deep: pub.deep, immediate: pub.immediate });
            });
        }
    },
    beforeDestroy() {
        const pubs = this.$options.publish;
        if (pubs) {
            Object.keys(pubs.forEach((topic) => {
                pubsub.unpublish(topic);
            }));
        }
    },
};

export const MSubscriber = {
    created() {
        const subs = this.$options.subscribe;
        if (subs) {
            this.$options.subscriptions = {};
            Object.keys(subs).forEach((topic) => {
                let sub = subs[topic];
                if (typeof sub === 'function')
                    sub = { handler: sub.bind(this) };
                else if (typeof sub === 'string')
                    sub = { handler: this[sub] };
                else
                    sub.handler = sub.handler.bind(this);

                let handler;
                if (sub.once) {
                    handler = () => {
                        pubsub.unsubscribe(topic, handler);
                        return sub.handler();
                    };
                } else
                    handler = sub.handler;

                this.$options.subscriptions[topic] = handler;

                pubsub.subscribe(topic, handler);
            });
        }
    },
    beforeDestroy() {
        const subs = this.$options.subscribe;
        if (subs) {
            Object.keys(subs).forEach((topic) => {
                pubsub.unsubscribe(topic, this.$options.subscriptions[topic]);
            });
        }
    },
};

export const MPubSub = {
    mixins: [MSubscriber, MPublisher],
};

export default MPubSub;