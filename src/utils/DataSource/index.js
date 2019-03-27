export const solveCondition = (condition, obj) => {
    if (Array.isArray(condition))
        return condition.some((cond) => solveCondition(cond, obj));
    else if (typeof condition === 'object') {
        return Object.keys(condition).every((key) => {
            let expression = condition[key];
            if (!Array.isArray(expression))
                expression = ['=', expression];

            if (expression[0] === '=' || expression[0] === '==' || expression[0] === 'eq')
                return obj[key] === expression[1];
            else if (expression[0] === '!=' || expression[0] === 'neq')
                return obj[key] !== expression[1];
            else if (expression[0] === '<' || expression[0] === 'lt')
                return obj[key] < expression[1];
            else if (expression[0] === '<=' || expression[0] === 'lte')
                return obj[key] <= expression[1];
            else if (expression[0] === '>' || expression[0] === 'gt')
                return obj[key] > expression[1];
            else if (expression[0] === '>=' || expression[0] === 'gte')
                return obj[key] >= expression[1];
            else if (expression[0] === 'includes')
                return obj[key].includes(expression[1]);
            else if (expression[0] === 'startsWith')
                return obj[key].startsWith(expression[1]);
            else if (expression[0] === 'endsWith')
                return obj[key].endsWith(expression[1]);
            else
                throw new TypeError('Unknown operator in conditions!');
        });
    } else
        throw new TypeError('Condition must be a Object or Array!');
};

/**
 * @param {Array} data - 初始数据
 * @param {Boolean} cache - 是否从后端缓存
 * @param {Number=Infinity} originTotal - 总数
 */
export default class DataSource {
    constructor(options) {
        Object.assign(this, {
            data: [],
            cache: true,
            originTotal: Infinity, // @readonly - originTotal 作为很重要的判断有没有加载完所有数据的依据
            limit: 20, // @deprecated
            // offset: 0, // @deprecated
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
        }, options);

        this._params = {};
        if (!this.paging && this.limit)
            this.paging = { size: this.limit, number: 1 };

        this.sorting && (this._params.sorting = this.sorting);
        this.filtering && (this._params.filtering = this.filtering);

        this.arrangedData = undefined;

        // 传 data 为本地数据模式，此时已知所有数据
        if (options.data)
            this.originTotal = options.data.length;

        // 串联 Promise，防止出错
        this.promise = Promise.resolve();
    }

    page(number, size) {
        if (typeof number === 'object') {
            size = number.size;
            number = number.number;
        }

        if (size === undefined)
            size = this.paging ? this.paging.size : 20;

        if (number === this.paging.number && size === this.paging.size)
            return this;

        this.paging = Object.freeze({ number, size });
        return this;
    }

    sort(field, order = 'asc', compare) {
        if (typeof field === 'object') {
            order = field.order;
            field = field.field;
            compare = field.compare;
        }

        if (this.sorting && this.sorting.field === field && this.sorting.order === order)
            return this;

        this.sorting = field === undefined ? undefined : Object.freeze({ field, order, compare });
        this._params.sorting = this.sorting;
        return this;
    }

    filter(filtering) {
        if (this.filtering === filtering)
            return this;
        // @TODO: Use deep compare
        if (JSON.stringify(this.filtering) === JSON.stringify(filtering))
            return this;

        this.filtering = filtering === undefined ? undefined : Object.freeze(filtering);
        this._params.filtering = this.filtering;
        return this;
    }

    query(params) {
        this._params = params;
        return this;
    }

    getExtraParams() {
        return undefined;
    }

    defaultCompare(a, b, sign) {
        if (a === b)
            return 0;
        else
            return a > b ? sign : -sign;
    }

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

        if (this.paging) {
            if (this.paging.number > this.totalPage)
                this.page(1);
        }
    }

    /**
     * 获取数据
     * 排序、过滤、分组等延迟计算
     * @param {*} offset
     * @param {*} limit
     */
    fetch(offset, limit) {
        if (typeof offset === 'object') {
            limit = offset.limit;
            offset = offset.offset;
        }
        offset = offset || 0;
        limit = limit || Infinity;
        const newOffset = offset + limit;

        const queryChanged = Object.keys(this._params).length;
        const mustRemote = !this.hasAllRemoteData() || this.remoteFiltering || this.remoteSorting; // 过滤会影响数量的判断，因此必须要重新请求

        if (!mustRemote) {
            // 没有缓存数据或者有新的请求参数时，再尝试重新过滤和排序
            if (!this.arrangedData || queryChanged) {
                this._params = {};
                this.arrange();
            }

            return Promise.resolve(this.arrangedData.slice(offset, newOffset));
        } else {
            // 如果有新的 query 参数的变更，则清除缓存
            if (queryChanged)
                this.clear();

            const paging = Object.assign({ offset }, this.paging);
            if (limit !== Infinity)
                paging.limit = limit;

            const params = Object.assign({
                paging,
                sorting: this.sorting,
                filtering: this.filtering,
            }, this.getExtraParams());

            if (!this.load)
                throw new Error('Cannot find load method on DataSource!');

            return this.load(params).then((result) => {
                if (!this.remotePaging) { // 没有后端分页，认为是全部数据
                    if (result instanceof Array) { // 只返回数组，没有 total 字段
                        this.originTotal = result.length;
                        this.data = result;
                    } else if (result instanceof Object) { // 返回 { total, data }
                        this.originTotal = result.total;
                        this.data = result.data;
                    } // 否则什么都不做

                    this.arrange();
                    return this.arrangedData.slice(offset, newOffset);
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

                    console.log(partialData);
                    return partialData;
                }
            });
        }
    }

    // fetchOrigin(offset, limit) {
    //     // return Promise.resolve
    // }

    view() {
        if (this.paging) {
            const offset = (this.paging.number - 1) * this.paging.size;
            return this.fetch(offset, this.paging.size);
        } else
            return this.fetch();
    }

    slice(offset, newOffset) {
        return (this.arrangedData || this.data).slice(offset, newOffset);
    }

    get total() {
        if (this.remotePaging)
            return this.originTotal !== Infinity ? this.originTotal : 0;
        else
            return this.arrangedData ? this.arrangedData.length : this.data.length;
    }

    get totalPage() {
        return this.paging ? Math.ceil(this.total / this.paging.size) || 1 : 1;
    }

    /**
     * 是否拥有更多数据
     * @param {Number} offset - 位置
     */
    hasMore(offset) {
        if (offset === undefined)
            offset = this.data.length;
        return offset < this.originTotal;
    }

    /**
     * 是否拥有所有的远程数据
     * @param {Number} offset - 位置
     */
    hasAllRemoteData(offset) {
        if (offset === undefined)
            offset = this.data.length;
        return offset >= this.originTotal;
    }

    hasChanges() {
        return false;
    }

    clear() {
        this.data = [];
        this.originTotal = Infinity;
        this.arrangedData = undefined;
    }

    setData() {
        //
    }

    /**
     * 加载全部（用于覆写）
     * @override
     */
    // load(params) { return Promise.resolve([]); }

    save() {
        // 保存
    }

    create() {
        // 创建
    }

    get() {
        // 获取某一项
    }

    update() {
        // 更新某一项
    }

    remove() {
        // 删除某一项
    }
}
