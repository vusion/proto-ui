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
        labelSize: String,
    },
    data() {
        return {
            value: undefined,
            state: '',
            color: '',
            currentMessage: '',
            form: undefined,
        };
    },
    computed: {
        currentRules() {
            return this.rules || (this.form && this.form.rules && this.form.rules[this.name]);
        },
        required() {
            return this.currentRules && this.currentRules.some((rule) => rule.required);
        },
        currentLabelSize() {
            return this.labelSize || (this.form && this.form.labelSize) || 'auto';
        },
    },
    created() {
        this.dispatch('u-form', 'add-item', this);
        this.$on('add-field', (field) => {
            field.formItem = this;
            this.value = field.value;
        });
        this.$on('remove-field', (field) => field.formItem = undefined);
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed() {
        this.dispatch('u-form', 'remove-item', this);
    },
    methods: {
        onInput(value) {
            this.value = value;
            this.validate('input').catch((errors) => errors);
        },
        onChange(value) {
            this.value = value;
            this.validate('submit', true).catch((errors) => errors);
        },
        onFocus() {
            this.color = this.state = '';
            this.currentMessage = this.message;
        },
        onBlur() {
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

                    this.dispatch('u-form', 'validate-item', !errors);
                    errors ? reject(errors) : resolve();
                });
            });
        },
    },
};
