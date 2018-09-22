import MPopper from '../m-popper.vue';

export default {
    name: 'u-tooltip',
    extends: MPopper,
    props: {
        content: String,
        // @inherit: opened
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom' },
        // @inherit: reference
        // @inhreit: hideDelay
        // @inherit: boundariesElement
        // @inherit: followCursor
        // @inherit: offset
        // @inherit: disabled
    },
};
