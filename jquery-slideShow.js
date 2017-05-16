/**
 * Created by jinpei chen on 2017/4/19.
 * 15779356528@163.com
 */
(function ($) {
    var imageData=[],
        imageWidth,
        offsetLength=0,//偏移长度
        length=0,
        imagePosition=2,
        middlePosition=1,
        lastPosition=0;//用于记录后退
    $.fn.slide=function (options) {
        var setting=$.extend({//设置默认值
            autoPlay:true,//自动播放
            interval:6000,//播放间隔
            barColor:"gray",
            height:false,
            hiddenBar:false,//设置是否隐藏底部导航条
            hiddenControl:false,//设置隐藏左右切换按钮
            href:[]//跳转链接
        },options);//
        imageData=setting.images;
        length=imageData.length;
        $(this).addClass("slideImageBox");
        if(imageData.length>3){
            length=4;
        }
        var loadLength=imageData.length>3?imageData.length:3;
        var loadLi=[];//需要载入的li
        var barButton=[];//底部导航条
        var spans=[];
        for(var i=0;i<loadLength;i++){
            loadLi.push('<li class="oneImageBox2" id="theImgBox'+i+'"></li>');
            barButton.push('<button data-cid="'+i+'"></button>');

        }
        
        
        $(".slideImageBox").append("<ul>"+loadLi.join("")+"</ul>");
        $("#theImgBox"+middlePosition).removeClass("oneImageBox2").addClass("oneImageBox");
        imageWidth=$("#theImgBox"+middlePosition).width();
        for(var i=0;i<length;i++){
            var id="#theImgBox"+i;
            $(id).append("<img src='"+imageData[i]+"' width='"+imageWidth+"' height='366px'>");
            //
        }
        //预加载图片
        for(var i=length;i<imageData.length;i++){
            loadimg(imageData[i],i);
        }
        //
        if(setting.height){
            $(".slideImageBox").height(setting.height);
        }else{
            if(imageWidth>800){
                $(".slideImageBox").height(imageWidth*0.4);
            }else{
                $(".slideImageBox").height(imageWidth*0.5);
            }
        }
        if(!setting.hiddenControl) {
            var mTop = "top:" + ($(".slideImageBox").height() * 0.5 - 25) + "px";
            // $(".slideImageBox").append("<div class='NEXTBOX' style='" + mTop + "' id='nextIMG'><div class='right-next'></div> </div>");
            // $(".slideImageBox").append("<div class='LASTBOX' style='" + mTop + "' id='lastIMG'><div class='left-last'></div> </div>");
        }
        if(setting.autoPlay) autoShow();
        //载入底部导航条
        if(!setting.hiddenBar) {
            var cleft = ($(".slideImageBox").width() - 30 * loadLength - 5 * (loadLength + 1)) / 2 + "px";
            var cTop = $(".slideImageBox").height() - 40 + "px";
            var load = '<div class="chooseBar">' + barButton.join("") + '</div>';
            $('.slideImageBox').append(load);
            $('.chooseBar button').css("background", setting.barColor);
            updateButton(middlePosition);
        }
        /*
         * *****事件委托，点击下一张图片******
         * */
        $(document).on("click","#nextIMG",function () {
            NEXT();
        });
        /*
         * ********上一张图片*******
         * */
        $(document).on("click","#lastIMG",function(){
            //clearInterval(t);
            LAST();
        })
        /*
         * *****底部导航条点击
         * */
        $(document).on("click",".chooseBar button",function () {
            var n=Number($(this).attr("data-cid"));
            updateButton(n);
            var cz=n-middlePosition;
            if(cz>0){
                for(var i=0;i<cz;i++){
                    NEXT();
                }
            }else{
                for(var i=0;i<-cz;i++){
                    LAST();
                }
            }
        });
        //图片点击跳转
        $(document).on("click","[id^=theImgBox]",function () {
            var po=Number($(this).attr("id").replace(/[^0-9]/ig,""));
            if(setting.href[po]){
                window.location=setting.href[po];
            }
        })
        /*
        * ******自定义方法*****
        * */
        /*
         * *****预加载图片
         * */
        function loadimg(url,position){
            var img=new Image();
            img.onload=function(){
                img.onload=null;
                $("#theImgBox"+position).append("<img src='"+imageData[i]+"' width='"+imageWidth+"' height='auto'>");
            }
            img.src=url;
        }
        //图片自动播放
        var t;
        function autoShow() {
            t=setInterval(function () {
                NEXT();
            },setting.interval);
        }
        /*
         * ****更新底部导航条
         * */
        function updateButton(position){
            $(".chooseBar button").css("background","rgba(255,255,255,.5)");
            $(".chooseBar button").eq(position).css("background",setting.barColor);
        }
        /*
         * *******下一张图片
         * */
        function NEXT() {
            if(imagePosition<imageData.length-1){
                imagePosition++;
                lastPosition++;
                offsetLength=-imageWidth;
            }else{
                var d=$(".slideImageBox ul li:first-child").clone();
                d.removeAttr("style");
                $(".slideImageBox ul li:first-child").remove();
                $(".slideImageBox ul").append(d);
            }
            $(".slideImageBox ul li:first-child").css({"margin-left":offsetLength+"px"});
            $("#theImgBox"+middlePosition).removeClass("oneImageBox").addClass("oneImageBox2");
            ++middlePosition;
            middlePosition=middlePosition>imageData.length-1?0:middlePosition;//
            updateButton(middlePosition);
            $("#theImgBox"+middlePosition).removeClass("oneImageBox2").addClass("oneImageBox");
        }
        /*
         * ***上一张
         * */
        function LAST() {
            if(lastPosition>0){
                lastPosition--;
                imagePosition--;
                offsetLength+=imageWidth;
            }else{
                var d=$(".slideImageBox ul li:last-child").clone();
                d.css("margin-left",-imageWidth+"px");
                $(".slideImageBox ul li:last-child").remove();
                $(".slideImageBox ul li:first-child").removeAttr("style");
                $(".slideImageBox ul").prepend(d);//向前添加
            }
            //强制触发重绘
            setTimeout(function () {
                $(".slideImageBox ul li:first-child").css({"margin-left":offsetLength+"px"});
                $("#theImgBox"+middlePosition).removeClass("oneImageBox").addClass("oneImageBox2");
                --middlePosition;
                middlePosition=middlePosition>-1?middlePosition:imageData.length-1;//
                updateButton(middlePosition);
                $("#theImgBox"+middlePosition).removeClass("oneImageBox2").addClass("oneImageBox");
            });
            ///
        }
        //*******all******************
    }
})(jQuery);
