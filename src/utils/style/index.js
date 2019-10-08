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

export function isElementInView(el, viewEl, direction = 'both', complete = false) {
    if (direction === 'both')
        return isElementInView(el, viewEl, 'vertical', complete) && isElementInView(el, viewEl, 'horizontal', complete);
    else if (direction === 'vertical') {
        const elRect = getRect(el);
        const viewRect = getRect(viewEl);

        if (complete)
            return elRect.top >= viewRect.top && elRect.bottom <= viewRect.bottom;
        else // @TODO: border?
            return elRect.bottom > viewRect.top && elRect.top < viewRect.bottom;
    } else if (direction === 'horizontal') {
        const elRect = getRect(el);
        const viewRect = getRect(viewEl);

        if (complete)
            return elRect.left >= viewRect.left && elRect.right <= viewRect.right;
        else // @TODO: border?
            return elRect.right > viewRect.left && elRect.left < viewRect.right;
    } else
        throw new TypeError(`Unknown direction ${direction} of isElementInView param!`);
}
