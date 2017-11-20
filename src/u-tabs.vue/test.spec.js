import { createVMFromTemplate } from '../../test/utils';

import Vue from 'vue';
import { installComponents } from 'vusion-utils';
import * as Components from '../index';

installComponents(Components, Vue);

describe('Tabs, Tab', () => {
    let vm, tabs;

    it('(default)', () => {
        vm = createVMFromTemplate(`<u-tabs ref="tabs">
            <u-tab title="TabA">ContentA</u-tab>
            <u-tab title="TabB">ContentB</u-tab>
            <u-tab title="TabC">ContentC</u-tab>
        </u-tabs>`);

        tabs = vm.$refs.tabs;
        expect(tabs.selectedVM).to.equal(tabs.itemVMs[0]);
    });
});
