export function getRect(el) {
    return el.getBoundingClientRect();
}

export function getPosition(el) {
    const rect = getRect(el);
    return { left: rect.left, top: rect.top };
}

export function getSize(el, mode = 'outside') {
    if (mode === 'inside')
        return { width: el.clientWidth, height: el.clientHeight };
    else if (mode === 'center')
        return { width: (el.clientWidth + el.offsetWidth) / 2, height: (el.offsetHeight + el.clientHeight) / 2 };
    else if (mode === 'outside')
        return { width: el.offsetWidth, height: el.offsetHeight };
}

export function isInRect(position, rect) {
    if (!position || !rect)
        return false;

    return position.left > rect.left
        && (position.left < rect.left + rect.width)
        && position.top > rect.top
        && (position.top < rect.top + rect.height);
}

export function getComputedStyle(el, property) {
    const computedStyle = window.getComputedStyle(el, null);
    return property ? computedStyle[property] : computedStyle;
}

export function checkIntoView(elm, parentScrollElm) {
    const rect = getRect(elm);
    const viewHeight = getSize(parentScrollElm).height;
    const parentTop = getRect(parentScrollElm).top;
    const top = rect.top - parentTop;
    const bottom = rect.bottom - parentTop;
    return bottom >= 0 && top - viewHeight < 0;
}
