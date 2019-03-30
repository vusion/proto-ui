import Vue from 'vue';

export const solveCondition = (condition, obj) => {
    if (Array.isArray(condition))
        return condition.some((cond) => solveCondition(cond, obj));
    else if (typeof condition === 'object') {
        return Object.keys(condition).every((key) => {
            let expression = condition[key];
            if (typeof expression !== 'object')
                expression = ['=', expression];
            if (Array.isArray(expression)) {
                expression = {
                    operator: expression[0],
                    value: expression[1],
                };
            }

            let sourceValue = obj[key];
            let targetValue = expression.value;
            if (expression.caseInsensitive) {
                sourceValue = typeof sourceValue === 'string' ? sourceValue.toLowerCase() : sourceValue;
                targetValue = typeof targetValue === 'string' ? targetValue.toLowerCase() : targetValue;
            }

            if (typeof expression.operator === 'function')
                return expression.operator(sourceValue, targetValue, expression);
            else if (expression.operator === '=' || expression.operator === '==' || expression.operator === 'eq')
                return sourceValue === targetValue;
            else if (expression.operator === '!=' || expression.operator === 'neq')
                return sourceValue !== targetValue;
            else if (expression.operator === '<' || expression.operator === 'lt')
                return sourceValue < targetValue;
            else if (expression.operator === '<=' || expression.operator === 'lte')
                return sourceValue <= targetValue;
            else if (expression.operator === '>' || expression.operator === 'gt')
                return sourceValue > targetValue;
            else if (expression.operator === '>=' || expression.operator === 'gte')
                return sourceValue >= targetValue;
            else if (expression.operator === 'includes')
                return sourceValue.includes(targetValue);
            else if (expression.operator === 'startsWith')
                return sourceValue.startsWith(targetValue);
            else if (expression.operator === 'endsWith')
                return sourceValue.endsWith(targetValue);
            else
                throw new TypeError('Unknown operator in conditions!');
        });
    } else
        throw new TypeError('Condition must be a Object or Array!');
};

const VueDataSource = Vue.extend({
    data() {
        return {
            data: [],
            arrangedData: [], // 整理过的数据，用于缓存过滤和排序行为。比如多次获取分页的话，没有必要重新整理
            arranged: false,
            prependedData: [],
            cache: true,
            dirty: false,
            originTotal: Infinity, // @readonly - originTotal 作为很重要的判断有没有加载完所有数据的依据
            initialLoaded: false,
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remote: false,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
            viewMode: 'page',
            params: {},
        };
    },
    computed: {
        offset() {
            return this.paging ? (this.paging.number - 1) * this.paging.size : 0;
        },
        limit() {
            return this.paging ? this.paging.size : Infinity;
        },
        total() {
            if (this.remotePaging)
                return this.originTotal === Infinity ? this.data.length : this.originTotal;
            else
                return this.arrangedData.length;
        },
        totalPage() {
            const totalPage = Math.ceil(this.total / this.paging.size);
            if (!this.paging || totalPage === Infinity || totalPage === 0)
                return 1;
            else
                return totalPage;
        },
        viewData() {
            if (this.paging) {
                if (this.viewMode === 'more')
                    return this.arrangedData.slice(0, this.offset + this.limit);
                else
                    return this.arrangedData.slice(this.offset, this.offset + this.limit);
            } else
                return this.arrangedData;
        },
    },
    watch: {
        data() {
            this.arrange();
        },
        sorting: {
            handler(sorting) {
                this.params.sorting = sorting;
                this.arrange();
            },
            deep: true,
            immediate: true,
        },
        filtering: {
            handler(filtering) {
                this.params.filtering = filtering;
                this.arrange();
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        this.remote = !!this._load;
        // 传 data 为本地数据模式，此时已知所有数据
        if (!this.remote) {
            this.initialLoaded = true;
            this.originTotal = this.data.length;
        }

        // this.$watch(() => [this.paging, this.sorting, this.filtering], () => {
        //     this.arrange();
        // }, { deep: true, immediate: true });
    },
    methods: {
        arrange() {
            let arrangedData = Array.from(this.data);

            const filtering = this.filtering;
            if (!this.remoteFiltering && filtering && Object.keys(filtering).length)
                arrangedData = arrangedData.filter((item) => solveCondition(filtering, item));

            const sorting = this.sorting;
            if (!this.remoteSorting && sorting && sorting.field) {
                const field = sorting.field;
                const orderSign = sorting.order === 'asc' ? 1 : -1;
                if (sorting.compare)
                    arrangedData.sort((item1, item2) => sorting.compare(item1[field], item2[field], orderSign));
                else
                    arrangedData.sort((item1, item2) => this.defaultCompare(item1[field], item2[field], orderSign));
            }

            this.arrangedData = arrangedData;

            // 回到第一页
            if (this.paging) {
                if (this.paging.number > this.totalPage)
                    this.paging.number = 1;
            }
        },
        clearLocalData() {
            this.data = [];
            this.originTotal = Infinity;
            this.arranged = false;
            this.initialLoaded = false;
        },
        mustRemote(offset, newOffset) {
            return !this.hasAllRemoteData(offset, newOffset) // 没有全部的远程数据
            || (this.params.filtering && this.remoteFiltering)
            || (this.params.sorting && this.remoteSorting);
        },
        /**
         * 根据 viewData，是否还有数据
         * @param {Number} offset - 位置
         */
        hasMore(offset) {
            if (offset === undefined || offset === Infinity)
                offset = this.offset + this.limit;
            return offset < this.prependedData.length + this.originTotal;
        },
        /**
         * 是否还有远程数据
         * @param {Number} offset - 位置
         */
        hasAllRemoteData(offset, newOffset) {
            if (!this.remote)
                return true;
            if (newOffset === undefined || newOffset === Infinity)
                newOffset = this.data.length;
            return newOffset >= this.prependedData.length + this.originTotal;
        },
        hasChanges() {
            return false;
        },
        // query(params) {
        //     this.params = params;
        //     return this;
        // },
        defaultCompare(a, b, sign) {
            if (a === b)
                return 0;
            else
                return a > b ? sign : -sign;
        },
        _getExtraParams() {
            return undefined;
        },
        // _load(params)
        slice(offset, newOffset) {
            return this.arrangedData.slice(offset, newOffset);
        },
        load(offset, limit) {
            if (offset === undefined)
                offset = this.offset;
            if (limit === undefined)
                limit = this.limit;
            const newOffset = offset + limit;

            if (!this.remote || this.cache && !this.mustRemote(offset, newOffset)) {
                // 没有缓存数据或者有新的请求参数时，再尝试重新过滤和排序
                this.params = {};
                return Promise.resolve(this.arrangedData.slice(offset, newOffset));
            }

            const queryChanged = Object.keys(this.params).length;
            // 如果有新的 query 参数的变更，则清除缓存
            if (queryChanged) {
                this.clearLocalData();
                this.params = {};
            }

            const paging = Object.assign({ offset: offset - this.prependedData.length, limit: this.limit }, this.paging);

            const params = Object.assign({
                paging,
                sorting: this.sorting,
                filtering: this.filtering,
            }, this._getExtraParams());

            return this._load(params).then((result) => {
                this.initialLoaded = true;

                if (!this.remotePaging) { // 没有后端分页，认为是全部数据
                    if (result instanceof Array) { // 只返回数组，没有 total 字段
                        this.originTotal = result.length;
                        this.data = result;
                    } else if (result instanceof Object) { // 返回 { total, data }
                        this.originTotal = result.total;
                        this.data = result.data;
                    } // 否则什么都不做

                    return Promise.resolve(this.arrangedData.slice(offset, newOffset));
                } else {
                    let partialData;

                    if (result instanceof Array) { // 只返回数组，没有 total 字段
                        if (!result.length) // 没有数据了，则记录下总数
                            this.originTotal = this.data.length;
                        else
                            partialData = result;
                    } else if (result instanceof Object) { // 返回 { total, data }
                        this.originTotal = result.total;
                        partialData = result.data;
                    } // 否则什么都不做

                    if (offset === this.data.length)
                        this.data.push(...partialData);

                    this.arrange();
                    return partialData;
                }
            });
        },
        loadMore() {
            if (!this.hasMore())
                return Promise.resolve([]);
            else
                return this.load(this.offset + this.limit).then(() => this.paging.number++);
        },
        reload() {
            this.clearLocalData();
            this.load();
        },
        prepend(item) {
            this.data.unshift(item);
            this.prependedData.unshift(item);
        },
        add(item) {
            this.data.push(item);
        },
        get() {
            // 获取某一项
        },
        update() {
            // 更新某一项
        },
        remove() {
            // 删除某一项
        },
        save() {
            // 保存
        },
    },
});

function DataSource(options) {
    const data = {};
    const methods = {};

    Object.keys(options).forEach((key) => {
        const option = options[key];
        if (typeof option === 'function')
            methods['_' + key] = option;
        else
            data[key] = option;
    });

    VueDataSource.call(this, {
        data() { return data; },
        methods,
    });
}

DataSource.prototype = Object.create(VueDataSource.prototype);
// DataSource.prototype.constructor = DataSource;

export default DataSource;
