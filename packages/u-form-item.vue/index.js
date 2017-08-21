import Emitter from 'u-emitter.vue';
import Validator from 'async-validator';

export default {
    name: 'u-form-item',
    mixins: [Emitter],
    props: {
        name: String,
        title: String,
        rules: Array,
        message: String,
    },
    data() {
        return {
            value: undefined,
            state: '',
            color: '',
            currentMessage: '',
        };
    },
    computed: {
        currentRules() {
            return this.rules || (this.form && this.form.rules && this.form.rules[this.name]);
        },
        required() {
            return this.currentRules && this.currentRules.some((rule) => rule.required);
        },
    },
    created() {
        this.dispatch('u-form', 'addItem', this);
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
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
        onFocus(value) {
            this.color = this.state = '';
            this.currentMessage = this.message;
        },
        onBlur(value) {
            this.value = value;
            this.validate('blur').catch((errors) => errors);
        },
        validate(trigger = 'submit', silent = false) {
            let rules = this.currentRules;
            rules = rules && rules.filter((rule) => (rule.trigger + '+submit').includes(trigger));
            if (!rules || !rules.length)
                return Promise.resolve();

            this.state = 'validating';
            if (!silent)
                this.color = this.state;

            const name = this.name || 'field';
            const validator = new Validator({
                [name]: rules,
            });

            return new Promise((resolve, reject) => {
                validator.validate({ [name]: this.value }, { firstFields: true }, (errors, fields) => {
                    this.state = errors ? 'error' : 'success';
                    if (!silent) {
                        this.color = this.state;
                        this.currentMessage = errors ? errors[0].message : this.message;
                    }

                    this.dispatch('u-form', 'validateItem', !errors);
                    errors ? reject(errors) : resolve();
                });
            });
        },
    },
};
