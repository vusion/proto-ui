import cloneDeep from 'lodash/cloneDeep';
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
            comparedModel: null,
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
            this.$emit('validate', {
                valid: this.state === 'success',
            });
        });
    },
    watch: {
        model: {
            handler(val) {
                if (this.comparedModel)
                    this.$emit('modified', {
                        isModified: this.deepCompare(val, this.comparedModel),
                    });
            },
            deep: true,
        },
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
                '': 4,
                focus: 3,
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
        save() {
            this.comparedModel = cloneDeep(this.model);
        },
        deepCompare(o = {}, compare) {
            if (!compare)
                return false;
            if (typeof o === 'object' && o !== null) {
                if (Array.isArray(o))
                    return o.length !== compare.length || o.some((m, i) => this.deepCompare(m, compare[i]));
                else
                    return Object.keys(o).some((key) => this.deepCompare(o[key], compare[key]));
            } else
                return o !== compare;
        },
    },
};
