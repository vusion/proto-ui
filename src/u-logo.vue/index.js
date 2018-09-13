import Link from '../u-link.vue';

export default {
    name: 'u-logo',
    extends: Link,
    props: {
        href: { type: String, default: '/' },
    },
};
