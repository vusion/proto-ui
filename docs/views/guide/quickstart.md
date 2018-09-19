# 快速开始

[![NPM Version][npm-img]][npm-url]

[npm-img]: http://img.shields.io/npm/v/proto-ui.vusion.svg?style=flat-square
[npm-url]: http://npmjs.org/package/proto-ui.vusion

Proto UI 是网易云计算前端团队在 Vusion 体系中推出的原型组件库，用于快速扩展业务组件库。

### 特性

- 简洁高效
- 数量丰富、功能完善
- 灵活扩展

### 支持环境

- 支持 Vue.js 2.x
- 支持现代浏览器和 IE9 及以上

### 安装

使用 npm 安装组件库`proto-ui.vusion`, 同时需要安装一个工具包`vusion-utils`。

``` shell
npm i --save proto-ui.vusion vusion-utils
```

### 引入

#### 全部引入

``` js
import Vue from 'vue';
import * as ProtoUI from 'proto-ui.vusion';
import { install } from 'vusion-utils';

install(ProtoUI, Vue); // 全局安装组件库中的组件、指令等
```

#### 按需引入

``` js
import Vue from 'vue';
import { directives, UButton, UText, UInput } from 'proto-ui.vusion';
import { install } from 'vusion-utils';

install({ directives, UButton, UText, UInput }, Vue); // 全局安装组件库中的组件、指令等
```

> 我们没有使用 Vue 的 plugin 设计，主要是考虑 TreeShaking 机制。

### 如何贡献

- 在使用中存在问题，可以给我们[报告 Bug](https://github.com/vusion/proto-ui/issues)
- 希望参与贡献，欢迎 [Pull Request](https://github.com/vusion/proto-ui/pulls)
