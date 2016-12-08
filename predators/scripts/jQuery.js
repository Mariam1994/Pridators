function $(selector) {
    if (selector[0] == '<' && selector[selector.length - 1] == '>') {
        return document.createElement(selector.slice(1, selector.length - 1));
    }
    var elements = document.querySelectorAll(selector);
    return (elements.length == 1 ? elements[0] : elements);
}