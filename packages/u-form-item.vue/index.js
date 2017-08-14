import Emitter from 'u-emitter.vue';
import Validator from 'async-validator';

export default {
    name: 'u-form-item',
    mixins: [Emitter],
    props: {
        name: String,
        label: String,
        rules: Array,
    },
    data() {
        return {
            value: undefined,
            state: '',
            message: '',
        };
    },
    computed: {
        required() {
            return this.rules && this.rules.some((rule) => rule.required);
        },
    },
    created() {
        this.dispatch('u-form', 'addItem', this);
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('blur', this.onBlur);
    },
    destroyed() {
        this.dispatch('u-form', 'removeItem', this);
    },
    methods: {
        onInput(value) {
            this.value = value;
            this.validate('input').catch((errors) => errors);
        },
        onChange(value) {
            this.value = value;
        },
        onBlur(value) {
            this.value = value;
            this.validate('blur').catch((errors) => errors);
        },
        validate(trigger = 'submit') {
            let rules = this.rules;
            rules = rules && rules.filter((rule) => (rule.trigger + '+submit').includes(trigger));
            if (!rules || !rules.length)
                return Promise.resolve();

            this.state = 'validating';
            const name = this.name || 'field';
            const validator = new Validator({
                [name]: rules,
            });

            return new Promise((resolve, reject) => {
                validator.validate({ [name]: this.value }, { firstFields: true }, (errors, fields) => {
                    this.state = errors ? 'error' : 'success';
                    this.message = errors ? errors[0].message : '';

                    errors ? reject(errors) : resolve();
                });
            });
        },
    },
};
