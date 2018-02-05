import { createVMFromTemplate } from '../../test/utils';

import Vue from 'vue';
import { installComponents } from 'vusion-utils';
import * as Components from '../index';
import sinon from 'sinon';

installComponents(Components, Vue);

describe('Tabs, Tab', () => {
    let vm, tabs;

    it('(default)', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs">
                <u-tab title="TabA">ContentA</u-tab>
                <u-tab title="TabB">ContentB</u-tab>
                <u-tab title="TabC">ContentC</u-tab>
            </u-tabs>`);

            tabs = vm.$refs.tabs;
            vm.$nextTick(() => {
                expect(tabs.selectedVM).to.equal(tabs.itemVMs[0]);
                done();
            });
        }, 0);
    });
    it('value && select', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs" :value.sync="value">
                <u-tab title="TabA" value="A">ContentA</u-tab>
                <u-tab title="TabB" value="B">ContentB</u-tab>
                <u-tab title="TabC" value="C">ContentC</u-tab>
            </u-tabs>`, {
                data() {
                    return {
                        value: 'A',
                    };
                },
            });
            tabs = vm.$refs.tabs;
            const spy = sinon.spy(tabs, 'select');
            tabs.select(tabs.itemVMs[1]);
            vm.$nextTick(() => {
                expect(spy.withArgs(tabs.itemVMs[1]).calledOnce).to.true;
                expect(spy.firstCall.args[0]).to.equal(tabs.itemVMs[1]);
                expect(tabs.value).to.equal('B');
                expect(tabs.selectedVM).to.equal(tabs.itemVMs[1]);
                done();
            });
        }, 0);
    });
    it('before-select', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs" @before-select="beforeSelect">
                <u-tab title="TabA">ContentA</u-tab>
                <u-tab title="TabB">ContentB</u-tab>
                <u-tab title="TabC">ContentC</u-tab>
            </u-tabs>`, {
                methods: {
                    beforeSelect(e) {
                        e.preventDefault();
                    },
                },
            });

            tabs = vm.$refs.tabs;
            tabs.select(tabs.itemVMs[2]);
            vm.$nextTick(() => {
                expect(tabs.selectedVM).to.equal(tabs.itemVMs[0]);
                done();
            });
        }, 0);
    });
    it('close', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs">
                <u-tab title="TabA">ContentA</u-tab>
                <u-tab title="TabB">ContentB</u-tab>
                <u-tab title="TabC">ContentC</u-tab>
            </u-tabs>`);

            tabs = vm.$refs.tabs;
            const selectedVM = tabs.itemVMs[1];
            tabs.close(tabs.itemVMs[0]);
            vm.$nextTick(() => {
                expect(tabs.itemVMs.length).to.equal(2);
                expect(tabs.selectedVM).to.equal(selectedVM);
                done();
            });
        }, 0);
    });
    it('readonly', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs" readonly>
                <u-tab title="TabA">ContentA</u-tab>
                <u-tab title="TabB">ContentB</u-tab>
                <u-tab title="TabC">ContentC</u-tab>
            </u-tabs>`);

            tabs = vm.$refs.tabs;
            tabs.select(tabs.itemVMs[1]);
            vm.$nextTick(() => {
                expect(tabs.selectedVM).to.equal(tabs.itemVMs[0]);
                done();
            });
        }, 0);
    });
    it('disabled', (done) => {
        setTimeout(() => {
            vm = createVMFromTemplate(`<u-tabs ref="tabs" disabled>
                <u-tab title="TabA">ContentA</u-tab>
                <u-tab title="TabB">ContentB</u-tab>
                <u-tab title="TabC">ContentC</u-tab>
            </u-tabs>`);

            tabs = vm.$refs.tabs;
            tabs.select(tabs.itemVMs[1]);
            vm.$nextTick(() => {
                expect(tabs.selectedVM).to.equal(tabs.itemVMs[0]);
                done();
            });
        }, 0);
    });
});
