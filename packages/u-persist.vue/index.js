import EventUtil from '../../util/event';
import Vue from 'vue';

const getPath = function () {
    return 'session-resume:' + location.origin + location.pathname;
};
const getItem = function (key) {
    return sessionStorage.getItem(key);
};
const setItem = function (key, value) {
    return sessionStorage.setItem(key, value);
};
const removeItem = function (key) {
    return sessionStorage.removeItem(key);
};
const setValue = function (sessionKey, sessionValue) {
    if (!isValid(sessionValue))
        return;
    const path = getPath();
    sessionValue = JSON.stringify(sessionValue);
    if (!persistData[path])
        persistData[path] = {};
    persistData[path][sessionKey] = sessionValue;
};
const getValue = function (sessionKey) {
    const path = getPath();
    if (persistData[path] && persistData[path].hasOwnProperty([sessionKey]))
        return JSON.parse(persistData[path][sessionKey]);
};
const removeValue = function (sessionKey) {
    const path = getPath();
    if (persistData[path] && persistData[path].hasOwnProperty([sessionKey]))
        delete persistData[path][sessionKey];
};
const isValid = function (value) {
    return typeof value !== 'undefined' && value !== null && value !== '';
};

// get data from sessionStorage
const sessionData = getItem(getPath());
// store form value in page runtime;
const persistData = sessionData ? JSON.parse(sessionData) : {};
// use event bus to transfer value from forms to persistData;
const sessionResumeBus = new Vue();
// storage all form value to sessionStorage;
EventUtil.on(window, 'pagehide', () => {
    sessionResumeBus.$emit('session-resume:setSession');
    setItem(getPath(), JSON.stringify(persistData));
});
// remove session for security;
EventUtil.on(window, 'pageshow', () => {
    removeItem(getPath());
});

export default {
    name: 'u-persist',
    props: {
        persistKey: { type: String },
        disablePersist: { type: Boolean, default: false },
    },
    computed: {
        sessionValue: {
            set(value) {
                this.currentValue = value;
                this.$emit('input', value); // set value;
            },
            get() {
                return this.currentValue;
            },
        },
    },
    methods: {
        enableSessionResume(persistKey) {
            this.sessionKey = persistKey || this.persistKey;
            if (!this.sessionKey)
                return;
            const sessionValue = getValue(this.sessionKey);
            if (isValid(sessionValue))
                this.sessionValue = sessionValue;
            // store value in persistData
            sessionResumeBus.$on('session-resume:setSession', () => {
                this.sessionKey && setValue(this.sessionKey, this.sessionValue);
            });
        },
        getSession() {
            return getValue(this.sessionKey);
        },
        resetSession(value) {
            setValue(this.sessionKey, value);
        },
        removeSession() {
            removeValue(this.sessionKey);
        },
    },
    created() {
        if (!this.disablePersist) {
            if (this.persistKey)
                this.enableSessionResume();
            else {
                this.$on('session-resume:enablePersist', (persistKey, formVM) => {
                    if (!persistKey)
                        return;
                    if (this.formItemVM && formVM)
                        persistKey = persistKey + '_' + (this.formItemVM.name || formVM.itemVMs.indexOf(this.formItemVM));
                    this.enableSessionResume(persistKey);
                });
            }
        }
    },
    beforeDestroy() {
        if (!this.disablePersist && this.sessionKey)
            setValue(this.sessionKey, this.sessionValue);
    },
};
