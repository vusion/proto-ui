export default {
    name: 'u-form',
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.$on('addItem', (item) => {
            this.items.push(item);
        });
        this.$on('removeItem', (item) => {
            const index = this.items.indexOf(item);
            this.items.splice(index, 1);
        });
    },
    methods: {
        validate() {
            return Promise.all(this.items.map((item) => item.validate()
                .catch((errors) => errors)
            )).then((results) => {
                if (results.some((result) => !!result))
                    throw new Error(results);
            });
        },
    },
};
