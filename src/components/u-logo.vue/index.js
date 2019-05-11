import ULink from '../u-link.vue';

export const ULogo = {
    name: 'u-logo',
    extends: ULink,
    props: {
        href: { type: String, default: '/' },
    },
};

export default ULogo;
