//function changeValue() {
//    var range = document.getElementsByClassName('range'),
//		num = document.getElementById('num'),
//		count = 0;

//    for (var i = 0; i < range.length; i++) {
//        count += +range[i].value;
//    }

//    num.innerText = count;
//}
function checkAll(name) {
    var checkBoxes = $('.' + name);
    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].click();
    }
}

function changeValue() {
    var range = $('.range'),
     num = $('#num'),
     count = 0,
     sum = 0,
     sumEl = $('.dollar'),
     meter = $('meter');

    for (var i = 0; i < range.length; i++) {
        count += +range[i].value;
    }

    num.innerHTML = count;
    sum = +meter.value * count;

    sumEl.innerText = sum;
}

function checkExtinct() {
    var checkBoxes = $('.ExtinctBox'),
        checkedBoxes = [];

    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked ? checkedBoxes.push(checkBoxes[i]) : checkBoxes[i].checked = true;
    }
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkedBoxes.length === checkBoxes.length) {
            checkBoxes[i].checked = false;
        }
    }
}