import { ULink } from 'proto-ui.vusion';

export const ULogo = {
    name: 'u-logo',
    extends: ULink,
    props: {
        href: { type: String, default: '/' },
    },
};

export default ULogo;
