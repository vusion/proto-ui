export default {
    name: 'u-form',
    props: {
        model: Object,
    },
    data() {
        return {
            // @TODO: Optimize
            state: '',
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
        this.$on('validateItem', () => {
            this.state = this.getState();
            this.$emit('validate', this.state === 'success');
        });
    },
    methods: {
        validate(silent = false) {
            return Promise.all(this.items.map((item) => item.validate('submit', silent)
                .catch((errors) => errors)
            )).then((results) => {
                if (results.some((result) => !!result))
                    throw new Error(results);
            });
        },
        getState() {
            const STATE_LEVEL = {
                '': 3,
                validating: 2,
                error: 1,
                success: 0,
            };

            let state = 'success';
            this.items.forEach((item) => {
                if (item.rules && STATE_LEVEL[item.state] > STATE_LEVEL[state])
                    state = item.state;
            });

            return state;
        },
    },
};
