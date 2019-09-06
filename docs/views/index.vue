<template>
<l-page>
    <u-navbar slot="head">
        <u-logo slot="left">{{ logo }}</u-logo>
        <u-navbar-item v-for="item in navbar" :key="item.text" :to="item.to" :href="item.href" :target="item.target">{{ item.text }}</u-navbar-item>
        <div slot="right" style="margin-right: 10px;">
            <u-navbar-select style="vertical-align: top;" value="0.4.x"
                @select="onSelectVersion">
                <u-navbar-select-item value="0.4.x">0.4.x</u-navbar-select-item>
                <u-navbar-select-item value="0.3.x">0.3.x</u-navbar-select-item>
            </u-navbar-select>
            <u-navbar-item :href="github" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
        </div>
    </u-navbar>
    <router-view></router-view>
</l-page>
</template>

<script>
const base = 'https://vusion.dev';

export default {
    data() {
        return {
            logo: this.$docs.logo,
            navbar: this.$docs.navbar,
            github: this.$docs.github,
            theme: window.theme,
        };
    },
    methods: {
        onSelectTheme($event) {
            if ($event.value !== window.theme) {
                localStorage.setItem('theme', $event.value);
                location.reload();
            }
        },
        onSelectVersion($event) {
            if ($event.value)
                window.location = base + '/proto-ui@' + $event.value + '/';
        },
    },
};
</script>
