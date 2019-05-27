import MEmitter from '../m-emitter.vue';
import Validator from 'vusion-async-validator';
import debounce from 'lodash/debounce';

export const MValidator = {
    name: 'm-validator',
    isValidator: true,
    mixins: [MEmitter],
    props: {
        name: String,
        label: String,
        rules: [Array, Object],
        target: { type: String, default: 'auto' },
        ignoreRules: { type: Boolean, default: false },
        message: String,
        muted: String,
    },
    data() {
        return {
            value: undefined,
            oldValue: undefined,
            inputing: false,
            pending: false,
            // touched: false,
            // dirty: false,
            // valid: false,
            fieldTouched: false,
            realValid: false,
            triggerValid: false,
            validatorVMs: [],
            fieldVM: undefined,
            parentVM: undefined,
            rootVM: undefined,

            state: '',
            color: '',
            currentMessage: this.message,
            firstErrorMessage: '',
        };
    },
    computed: {
        currentRules() {
            return this.rules || (this.rootVM && this.rootVM.rules && this.rootVM.rules[this.name]);
        },
        currentTarget() {
            if (this.target === 'auto')
                return this.validatorVMs.length ? 'validatorVMs' : 'fieldVM';
            else
                return this.target;
        },
        touched() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.some((validatorVM) => validatorVM.touched);
            else
                return this.fieldTouched;
        },
        dirty() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.some((validatorVM) => validatorVM.dirty);
            else
                return this.value !== this.oldValue;
        },
        valid() {
            if (this.currentTarget === 'validatorVMs')
                return this.validatorVMs.every((validatorVM) => validatorVM.valid);
            else
                return this.realValid;
        },
        firstError() {
            if (this.currentTarget === 'validatorVMs') {
                const validatorVM = this.validatorVMs.find((validatorVM) => validatorVM.firstError);
                return validatorVM ? validatorVM.firstError : undefined;
            } else
                return this.firstErrorMessage;
        },
        mutedMessage() {
            return this.muted === 'all' || this.muted === 'message';
        },
    },
    created() {
        this.debouncedOnValidate = debounce(this.onValidate, 50, {
            leading: true,
            trailing: true,
        });

        this.$on('add-validator-vm', (validatorVM) => {
            validatorVM.rootVM = this.rootVM;
            validatorVM.parentVM = this;
            this.validatorVMs.push(validatorVM);
        });
        this.$on('remove-validator-vm', (validatorVM) => {
            validatorVM.rootVM = undefined;
            validatorVM.parentVM = undefined;
            this.validatorVMs.splice(this.validatorVMs.indexOf(validatorVM), 1);
        });

        this.dispatch(($parent) => $parent.$options.isValidator, 'add-validator-vm', this);
        if (!this.parentVM || this.$options.name === 'u-form')
            this.rootVM = this;

        this.triggerValid = this.realValid = !(this.currentRules && this.currentRules.length);
        this.$on('add-field-vm', (fieldVM) => {
            // @TODO: 一个`<u-form-item>`中，只注册一个`fieldVM`，其他的忽略
            if (this.fieldVM)
                return;
            this.fieldVM = fieldVM;
            fieldVM.validatorVM = this;
            fieldVM.formItemVM = this; // @compat

            this.value = fieldVM.value;
            // 初始化的时候自行验证一次。Fix #23
            this.validate('submit', true).catch((errors) => errors);
        });
        this.$on('remove-field-vm', (fieldVM) => {
            this.fieldVM = undefined;
            fieldVM.validatorVM = undefined;
            fieldVM.formItemVM = undefined; // @compat
        });

        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed() {
        this.dispatch(($parent) => $parent.$options.isValidator, 'remove-validator-vm', this);
    },
    methods: {
        onInput(value) {
            if (this.currentTarget === 'validatorVMs')
                return;

            if (!this.fieldTouched)
                this.fieldTouched = true;
            this.inputing = true;
            this.value = value;
            // 处理输入法输入的问题
            this.$nextTick(() => {
                this.validate('input').catch((errors) => errors);
                this.inputing = false;
            });
        },
        onChange($event) {
            if (this.currentTarget === 'validatorVMs')
                return;

            if (!this.fieldTouched)
                this.oldValue = $event.value;
            this.value = $event.value;
        },
        onFocus() {
            if (this.currentTarget === 'validatorVMs')
                return;

            this.color = 'focus';
            this.currentMessage = this.message;
        },
        onBlur() {
            if (this.currentTarget === 'validatorVMs')
                return;

            if (!this.fieldTouched)
                this.fieldTouched = true;
            this.color = this.state = '';
            this.$nextTick(() => this.validate('blur').catch((errors) => errors));
        },
        validate(trigger = 'submit', untouched = false) {
            if (this.currentTarget === 'validatorVMs') {
                return Promise.all(this.validatorVMs.map((validatorVM) => validatorVM.validate('submit', untouched)
                    .catch((errors) => errors)
                )).then((results) => {
                    if (results.some((result) => !!result))
                        throw results;
                });
            } else {
                let rules = this.currentRules;
                rules = rules && rules.filter((item) => !item.ignore).filter((rule) => (rule.trigger + '+submit').includes(trigger));
                if (this.ignoreRules || !rules || !rules.length) {
                    this.triggerValid = true;
                    this.realValid = true;
                    this.firstErrorMessage = this.currentMessage = '';
                    this.color = '';

                    this.onValidate();
                    // this.dispatch('u-form', 'validate-item-vm', true);
                    return Promise.resolve();
                }

                this.pending = true;
                this.state = 'validating';
                if (!untouched)
                    this.fieldTouched = true;

                if (untouched || this.muted === 'all' || this.muted === 'color')
                    this.color = this.currentMessage = '';
                else
                    this.color = this.state;

                const name = this.name || 'field';
                const validator = new Validator({
                    [name]: rules,
                });

                return new Promise((resolve, reject) => {
                    validator.validate({ [name]: this.value }, { firstFields: true }, (errors, fields) => {
                        this.pending = false;
                        this.triggerValid = !errors;
                        this.realValid = this.triggerValid; // @TODO

                        this.state = this.triggerValid ? 'success' : 'error';
                        this.firstErrorMessage = errors ? errors[0].message : '';
                        if (!untouched && this.muted !== 'all' && this.muted !== 'color')
                            this.color = this.state;
                        if (!untouched && this.muted !== 'all' && this.muted !== 'message')
                            this.currentMessage = errors ? errors[0].message : this.message;

                        this.onValidate();
                        // this.dispatch('u-form', 'validate-item-vm', !errors);
                        errors ? reject(errors) : resolve(); // @TODO
                    });
                });
            }
        },
        onValidate() {
            const $event = {
                valid: this.valid,
                triggerValid: this.triggerValid,
                touched: this.touched,
                dirty: this.dirty,
                firstError: this.firstError,
            };

            if (this.currentTarget === 'fieldVM') {
                $event.value = this.value;
                $event.oldValue = this.oldValue;
            }

            this.$emit('validate', $event, this);
            this.parentVM && this.parentVM.debouncedOnValidate();
        },
    },
};

export default MValidator;
