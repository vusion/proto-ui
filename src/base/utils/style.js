export const getPosition = function (el) {
    const doc = el && el.ownerDocument;
    const docElem = doc.documentElement;
    const body = doc.body;

    const box = el.getBoundingClientRect ? el.getBoundingClientRect() : { left: 0, top: 0 };

    const clientLeft = docElem.clientLeft || body.clientLeft || 0;
    const clientTop = docElem.clientTop || body.clientTop || 0;

    return { left: box.left - clientLeft, top: box.top - clientTop };
};

export const getSize = function (el, mode = 'outside') {
    if (mode === 'inside')
        return { width: el.clientWidth, height: el.clientHeight };
    else if (mode === 'center')
        return { width: (el.clientWidth + el.offsetWidth) / 2, height: (el.offsetHeight + el.clientHeight) / 2 };
    else if (mode === 'outside')
        return { width: el.offsetWidth, height: el.offsetHeight };
};

export const getDimension = function (el, mode) {
    return Object.assign(getSize(el, mode), getPosition(el));
};

export const isInRect = function (position, dimension) {
    if (!position || !dimension)
        return false;

    return position.left > dimension.left
        && (position.left < dimension.left + dimension.width)
        && position.top > dimension.top
        && (position.top < dimension.top + dimension.height);
};

export const getComputedStyle = function (el, property) {
    const computedStyle = el.currentStyle || window.getComputedStyle(el, null);
    return property ? computedStyle[property] : computedStyle;
};
