var imgUl = document.querySelector('.lun ul');
var spans = document.querySelectorAll('.xbiao span');
var box = document.querySelector('#box');
var index =1 ;
var intervalId = null;
animate(imgUl, -1080 * index);

function checkIndex() {
    if (index === 6) {
        imgUl.style.left = -1080+'px';
        index = 1;
    }
    if (index === 0) {
        imgUl.style.left = -1080 * 5 + 'px';
        index = 5;
    }
    
}
function updateLiIndex() {
    for (var i = 0; i < spans.length; i++) {
        spans[i].className = '';
        if (index === 0) {
            spans[4].className = 'current';
        } else if (index === 6) {
            spans[0].className = 'current';
        } else {
            spans[index - 1].className = 'current';
        }
    }
}
function move(fangxiang) {
    fangxiang = fangxiang || 1;
    checkIndex();
    index += fangxiang;
    animate(imgUl, -1080 * index );
    updateLiIndex();
}
intervalId = setInterval(move, 3500);