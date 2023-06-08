let stones = document.getElementsByClassName("thanosStone");

for (let i = 0; i < stones.length; i++) {
    stones[i].ondblclick = function() {
        console.log('tes2t');
        changeMode(stones[i]);
    }
}

function changeMode(element) {
    if (element.classList.contains('blocked_stone')) {
        element.classList.remove('blocked_stone');
    }
    else {
        element.classList.add('blocked_stone');
    }
}

for (let i = 0; i < stones.length; i++) {
    stones[i].onmousedown = function (e) {
        function moveAt(e) {
            stones[i].style.left = e.pageX - stones[i].offsetWidth / 2 + 'px';
            stones[i].style.top = e.pageY - stones[i].offsetHeight / 2 + 'px';
          }

        document.onmousemove = function(e) {
            moveAt(e);
        }
        stones[i].onmouseup = function() {
            document.onmousemove = null;
            stones[i].onmouseup = null;
        }
        if (stones[i].classList.contains('blocked_stone')) {
            document.onmousemove = null;
            stones[i].onmouseup = null;
        }
    }
    
}