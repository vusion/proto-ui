export function addClass(node, className) {
    const full = ' ' + (node.className || '') + ' ';
    if (!full.includes(' ' + className + ' '))
        node.className = (full + className).trim();
}

export function removeClass(node, className) {
    const full = ' ' + (node.className || '') + ' ';
    node.className = full.replace(' ' + className + ' ', ' ').trim();
}

export function hasClass(node, className) {
    const full = ' ' + (node.className || '') + ' ';
    return full.includes(' ' + className + ' ');
}
