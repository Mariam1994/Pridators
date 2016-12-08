function showInConsole() {
    var pList = $('li span');

    for (var i = 0; i < pList.length; ++i) {
        pList[i].onmouseover = function () {
            var style = getComputedStyle(this, null);
            var color =  style.getPropertyValue('color');
            console.log('%c' + this.innerText, 'color: ' + color + ';');
        }
    }
}