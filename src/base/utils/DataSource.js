export default class DataSource {
    constructor(options) {
        Object.assign(this, {
            data: [],
            cache: true,
            limit: 50,
            // offset: 0,
            total: Infinity, // 数据总量
            // order
            // filter
        }, options);

        // 没有 data 表示数据
        if (options.data)
            this.total = options.data.length;
    }

    fetch(params = {}) {
        params = Object.assign({
            limit: this.limit,
            offset: this.data.length,
        }, params);
        const newOffset = params.offset + params.limit;

        // 超过总数，则不请求
        if (params.offset >= this.total)
            return this.data;
        if (newOffset <= this.data.length)
            return Promise.resolve(this.data.slice(0, newOffset));
        else
            return this.doLoadMore(params).then(() => this.data.slice(0, newOffset));
    }

    clear() {
        this.data = [];
    }

    /**
     * 加载全部（内部调用）
     * @override
     */
    doLoad() {
        return this.load().then((result) => {
            if (result instanceof Array) { // 只返回数组，没有 total 字段
                this.total = result.length;
                this.data = result;
            } else if (result instanceof Object) { // 返回 { total, data }
                this.total = result.total;
                this.data = result.data;
            } // 否则什么都不做
        });
    }

    /**
     * 加载全部（用于覆写）
     * @override
     */
    load() {
        return Promise.resolve();
    }

    /**
     * 加载更多（内部调用）
     * @override
     * @param {*} params.limit 分页数
     * @param {*} params.offset 偏移数
     */
    doLoadMore(params) {
        return this.loadMore(params).then((result) => {
            if (params.offset + params.limit <= this.data.length)
                return undefined;

            if (result instanceof Array) { // 只返回数组，没有 total 字段
                if (!result.length) // 没有数据了，则记录下总数
                    this.total = this.data.length;
                else
                    this.data.push(...result);
            } else if (result instanceof Object) { // 返回 { total, data }
                this.total = result.total;
                this.data.push(...result.data);
            } // 否则什么都不做
        });
    }

    /**
     * 加载更多（用于覆写）
     * @override
     * @param {*} params.limit 分页数
     * @param {*} params.offset 偏移数
     */
    loadMore(params) {
        return Promise.resolve();
    }

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
