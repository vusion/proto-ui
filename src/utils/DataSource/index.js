const solveCondition = (condition, obj) => {
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
 * @param {Number=50} limit - 分页数
 * @param {Number=Infinity} total - 总数
 */
export default class DataSource {
    constructor(options) {
        Object.assign(this, {
            data: [],
            cache: true,
            total: Infinity, // @readonly - total 作为很重要的判断有没有加载完所有数据的依据
            limit: 50,
            // offset: 0,
            paging: undefined, // @TODO
            sorting: undefined, // @readonly
            filtering: undefined, // @readonly
            // grouping: undefined,
            remotePaging: false,
            remoteSorting: false,
            remoteFiltering: false,
            // remoteGrouping: false,
            forceRemote: false,
            promise: Promise.resolve(),
        }, options);

        this._params = {};
        this.sorting && (this._params.sorting = this.sorting);
        this.filtering && (this._params.filtering = this.filtering);

        this.arrangedData = undefined;

        // 传 data 为本地数据模式，此时已知所有数据
        if (options.data)
            this.total = options.data.length;
    }

    sort(field, order = 'asc', compare) {
        if (typeof field === 'object') {
            order = field.order;
            field = field.field;
            compare = field.compare;
        }

        // 相同时无需排序可能会有问题
        // if (this.sorting && this.sorting.field === field && this.sorting.order === order)
        //     return;

        this.sorting = field === undefined ? undefined : Object.freeze({ field, order, compare });
        this._params.sorting = this.sorting;
        return this;
    }

    filter(filtering) {
        if (this.filtering === filtering)
            return;

        this.filtering = filtering === undefined ? undefined : Object.freeze(filtering);
        this._params.filtering = this.filtering;
        return this;
    }

    query(params) {
        this._params = params;
        return this;
    }

    _fetchParam(key) {
        const param = this._params[key];
        delete this._params[key];
        return param;
    }

    defaultCompare(a, b, sign) {
        if (a === b)
            return 0;
        else
            return a > b ? sign : -sign;
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
        const mustRemote = this.forceRemote || !this.hasAllRemoteData()
            || (this.remoteFiltering && this._params.filtering); // 过滤会影响数量的判断，因此必须要重新请求

        if (!mustRemote) {
            // 没有缓存数据或者有新的请求参数时，再尝试重新过滤和排序
            if (!this.arrangedData || queryChanged) {
                let arrangedData = Array.from(this.data);

                const filtering = this._fetchParam('filtering');
                if (filtering && Object.keys(filtering).length)
                    arrangedData = arrangedData.filter((item) => solveCondition(filtering, item));

                const sorting = this._fetchParam('sorting');
                if (sorting && sorting.field) {
                    const field = sorting.field;
                    const orderSign = sorting.order === 'asc' ? 1 : -1;
                    if (sorting.compare)
                        arrangedData.sort((item1, item2) => sorting.compare(item1[field], item2[field], orderSign));
                    else
                        arrangedData.sort((item1, item2) => this.defaultCompare(item1[field], item2[field], orderSign));
                }

                this.arrangedData = arrangedData;
            }

            return Promise.resolve(this.arrangedData.slice(offset, newOffset));
        } else {
            // 如果有新的 query 参数的变更，则清除缓存
            if (queryChanged)
                this.clear();

            const paging = { offset };
            if (limit !== Infinity)
                paging.limit = limit;

            const params = Object.assign({
                paging,
                sorting: this.sorting,
                filtering: this.filtering,
            });

            if (!this.load)
                throw new Error('Cannot find load method on DataSource!');

            return this.load(params).then((result) => {
                if (!this.remotePaging) { // 没有后端分页，认为是全部数据
                    if (result instanceof Array) { // 只返回数组，没有 total 字段
                        this.total = result.length;
                        this.data = result;
                    } else if (result instanceof Object) { // 返回 { total, data }
                        this.total = result.total;
                        this.data = result.data;
                    } // 否则什么都不做

                    return this.data.slice(offset, newOffset);
                } else {
                    let partialData;

                    if (result instanceof Array) { // 只返回数组，没有 total 字段
                        if (!result.length) // 没有数据了，则记录下总数
                            this.total = this.data.length;
                        else
                            partialData = result;
                    } else if (result instanceof Object) { // 返回 { total, data }
                        this.total = result.total;
                        partialData = result.data;
                    } // 否则什么都不做

                    if (offset === this.data.length)
                        this.data.push(...partialData);

                    return partialData;
                }
            });
        }
    }

    fetchPage(number) {
        const offset = (number - 1) * this.limit;
        return this.fetch(offset, this.limit);
    }

    /**
     * 是否拥有所有的远程数据
     * @param {Number} offset - 位置
     */
    hasAllRemoteData(offset) {
        if (offset === undefined)
            offset = this.data.length;
        return offset >= this.total;
    }

    hasChanges() {
        return false;
    }

    clear() {
        this.data = [];
        this.total = Infinity;
        this._data = undefined;
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
