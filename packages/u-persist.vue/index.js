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

let persistData = {}; // store form value in page runtime;
const sessionData = getItem(getPath());
if (sessionData)
    persistData = JSON.parse(sessionData);
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
    },
    data() {
        return {
            sessionKey: this.persistKey,
            persistEnable: !!this.persistKey,
        };
    },
    computed: {
        sessionValue: {
            set(value) {
                this.currentValue = value;
            },
            get() {
                return this.currentValue;
            },
        },
    },
    methods: {
        enableSessionResume() {
            this.persistEnable = true;
            const sessionValue = getValue(this.sessionKey);
            if (isValid(sessionValue))
                this.sessionValue = sessionValue;

            // store value in persistData
            sessionResumeBus.$on('session-resume:setSession', () => {
                setValue(this.sessionKey, this.sessionValue);
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
        this.$on('session-resume:enablePersist', (persistKey, formVM) => {
            if (!persistKey || !this.formItemVM)
                return;
            if (formVM)
                persistKey = persistKey + '_' + (this.formItemVM.name || formVM.itemVMs.indexOf(this.formItemVM));
            this.sessionKey = persistKey;
            this.enableSessionResume();
        });
        if (this.persistEnable)
            this.enableSessionResume();
    },
    beforeDestroy() {
        if (this.persistEnable)
            setValue(this.sessionKey, this.sessionValue);
    },
};
