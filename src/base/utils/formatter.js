export const defaultFormatter = {
    get(value) { return value; },
    set(value) { return value; },
};

/**
 * 由格式化字符串生成格式化方法
 * @param {string} formatter 格式化字符串
 * `0`表示数字占位符。如果单元格的内容大于占位符，则显示实际数字，如果小于点位符的数量，则用“0”补足。
 * `#`表示数字占位符。只显有意义的零而不显示无意义的零。小数点后数字如大于“#”的数量，则按“#”的位数四舍五入。
 * `.`表示小数点。
 * `,`表示千分位。
 */
export const generateStringFormatter = function (formatter) {
    const number = (formatter.match(/[0#.,]+/) || ['0'])[0];
    const parts = number.split('.');
    const fill = (parts[0].match(/0+$/) || ['0'])[0].length;
    const fixed = parts[1] ? parts[1].length : 0;
    const comma = formatter.includes(',');

    return {
        get(value) {
            value = value.toFixed(fixed).padStart(fixed ? fill + 1 + fixed : fill, '0');
            if (comma)
                value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return formatter.replace(/[0#.,]+/, value);
        },
        set(value) {
            const number = (String(value).match(/[0-9.,]+/) || ['0'])[0];
            return +number.replace(/,/g, '');
        },
    };
};
