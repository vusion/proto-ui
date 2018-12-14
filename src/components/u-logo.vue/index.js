import ULink from '../u-link.vue';

const ULogo = {
    name: 'u-logo',
    extends: ULink,
    props: {
        href: { type: String, default: '/' },
    },
};

export { ULogo };
export default ULogo;
