import Vue from 'vue';
import Pagination from './index';

describe('Pagination', () => {
    it('pages', () => {
        const pagination = new Vue(Pagination);
        expect(!!pagination.pages).to.be.true;
    });
});
