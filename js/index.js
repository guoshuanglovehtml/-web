window.onload=function () {
	//横幅轮播开始
    var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ulLis = ul.children;
    var imgWidth = screen.offsetWidth;
    var arr = document.getElementById("arr");
    var arrRight = document.getElementById("right");
    var arrLeft = document.getElementById("left");
    var timer = null;
    
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);

    box.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    }
    box.onmouseout = function () {
        arr.style.display = "none";
        timer = setInterval(playNext, 3000);
    }

    var pic = 0;
    arrRight.onclick = function () {
        playNext();
    }
    arrLeft.onclick = function () {
        if (pic == 0) {
            pic = ulLis.length - 1;
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);

    }

    timer = setInterval(playNext, 3000)

    function playNext() {
        if (pic == ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
    }


    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = 250;
            var step = obj.offsetLeft < target ? step : -step;


            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 30)
    }
    //横幅轮播结束
//内容区轮播开始
var boxs = document.getElementById("box1");
    var screens = box1.children[0];
    var uls = screens.children[0];
    var ulLiss = uls.children;
    var imgWidths = screens.offsetWidth;
    var arrs = document.getElementById("arrs");
    var arrRights = document.getElementById("rights");
    var arrLefts = document.getElementById("lefts");
    var timers = null;
    
    var pics = 0;
    arrRights.onclick = function () {
        if (pics == ulLiss.length - 1) {
            uls.style.left = 0;
            pics = 0;
        }
        pics++;
        var target = -pics * imgWidths;
        animate(uls, target);
    }
    arrLefts.onclick = function () {
        if (pics == 0) {
            pics = ulLiss.length - 1;
            uls.style.left = -(ulLiss.length - 1) * imgWidths + "px";
        }
        pics--;
        var target = -pics * imgWidths;
        animate(uls, target);
  }
}