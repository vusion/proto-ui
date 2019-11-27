import { ULink } from 'proto-ui.vusion';

export const SLogo = {
    name: 's-logo',
    extends: ULink,
    props: {
        href: { type: String, default: '/' },
    },
};

export default SLogo;
