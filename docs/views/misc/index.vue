<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar">
                <u-sidebar-group title="指令">
                    <u-sidebar-item to="/misc/directives">指令</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="工具">
                    <u-sidebar-item to="/misc/utils">工具</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style module>
.side {
    position: fixed;
    width: $sidebar-width;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    padding: 36px 0;
    height: 100%;
    overflow: auto;
    /* width: calc($sidebar-width + 8px); */
}

/* .sidebar > * {
    width: $sidebar-width;
} */

.main {
    margin-left: $sidebar-width;
    max-width: 1000px;
    padding: 50px;
    padding-top: 30px;
}
</style>
