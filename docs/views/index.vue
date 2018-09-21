<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <u-navbar>
                <u-logo slot="left">{{ logo }}</u-logo>
                <u-navbar-item v-for="item in navbar" :key="item.text" :to="item.to" :href="item.href" :target="item.target">{{ item.text }}</u-navbar-item>
                <div slot="right" style="margin-right: 10px;">
                    <u-select size="small" style="vertical-align: top; margin-top: 21px; margin-right: 10px;"
                        @select="onSelectVersion">
                        <u-select-item>0.4.x</u-select-item>
                        <u-select-item value="0.3.x">0.3.x</u-select-item>
                    </u-select>
                    <u-navbar-item href="https://github.com/vusion/proto-ui" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item>
                </div>
            </u-navbar>
        </div>
    </header>
    <main :class="$style.body">
        <div :class="$style.wrap">
            <router-view></router-view>
        </div>
    </main>
</div>
</template>

<script>
const base = 'http://59.111.90.154';

export default {
    data() {
        return {
            logo: this.$docs.logo,
            navbar: this.$docs.navbar,
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

<style module>
.root {}

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $navbar-height;
    /* background: #1c2b41; */
    background: white;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    z-index: $z-index-layout;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: $navbar-height;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    /* width: 1180px;
    margin: 0 auto; */
}

.color {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #67aaf5;
    border: 1px solid white;
    vertical-align: -2px;
    margin-right: 6px;
}

.color[color="dark"] {
    background: #4a89e8;
}

.color[color="seagreen"] {
    background: #2cb78e;
}
</style>
