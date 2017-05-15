
 /* 知识点：        */
        /*       this用法 */
        /*       DOM事件 */
        /*       定时器 */

    
    window.onload = function() {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var timer;

            function animate(offset) {
                //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
                //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                //无限滚动判断
                if (newLeft > -1920) {
                    list.style.left = -5760 + 'px';
                }
                if (newLeft < -5760) {
                    list.style.left = -1920 + 'px';
                }
            }

            function play() {
                //重复执行的定时器
                timer = setInterval(function() {
                    next.onclick();
                }, 2000)
            }

            function stop() {
                clearInterval(timer);
            }

            function buttonsShow() {
                //将之前的小圆点的样式清除
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == "on") {
                        buttons[i].className = "";
                    }
                }
                //数组从0开始，故index需要-1
                buttons[index - 1].className = "on";
            }
           
            var fmath = document.getElementById("fmath");
            prev.onclick = function() {
                index -= 1;
                if (index < 1) {
                    index = 3
                }
                fmath.innerHTML = index +"/"+3;

                buttonsShow();
                animate(1920);
            };

            next.onclick = function() {
                //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
                index += 1;
                if (index > 3) {
                    index = 1
                }
                fmath.innerHTML = index+"/"+3;


                animate(-1920);
                buttonsShow();
            };

            for (var i = 0; i < buttons.length; i++) {
                (function(i) {
                    buttons[i].onclick = function() {

                        /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
                        /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var offset = 1920 * (index - clickIndex); //这个index是当前图片停留时的index
                        animate(offset);
                        index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                        buttonsShow();
                    }
                })(i)
            }

            container.onmouseover = stop;
            container.onmouseout = play;
            play();

        }