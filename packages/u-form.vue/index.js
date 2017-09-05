export default {
    name: 'u-form',
    props: {
        model: Object,
        rules: Object,
        layout: { type: String, default: 'block' },
        labelSize: { type: String, default: 'normal' },
    },
    data() {
        return {
            // @TODO: Optimize
            state: '',
            itemVMs: [],
        };
    },
    created() {
        this.$on('add-item-vm', (itemVM) => {
            itemVM.parentVM = this;
            this.itemVMs.push(itemVM);
        });
        this.$on('remove-item-vm', (itemVM) => {
            itemVM.parentVM = undefined;
            this.itemVMs.splice(this.itemVMs.indexOf(itemVM), 1);
        });
        this.$on('validate-item-vm', () => {
            this.state = this.getState();
            this.$emit('validate', this.state === 'success');
        });
    },
    methods: {
        validate(silent = false) {
            return Promise.all(this.itemVMs.map((itemVM) => itemVM.validate('submit', silent)
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
            this.itemVMs.forEach((itemVM) => {
                if (itemVM.currentRules && STATE_LEVEL[itemVM.state] > STATE_LEVEL[state])
                    state = itemVM.state;
            });

            return state;
        },
    },
};
