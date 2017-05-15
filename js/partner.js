var dataArry_C=[];
var dataArry_Img=[];
var dataArry_Img1=[];
var dataArry_conts=[];
var dataArry_Imgs=[];
function fn(dates){
  dataArry_C=dates.data.cont;
dataArry_Img=dates.data.partner_img;
dataArry_Img1=dates.data.partner_img1;
dataArry_conts=dates.data.partner_cont;
dataArry_Imgs=dates.data.partner_imgs;
}
window.onload=function(){	
	var ATions=document.getElementById("ATions");
	var ATion=document.getElementById("ATion");
	ATions.onclick=function(){
		alert("关注成功")
	}
	
	ATion.onclick=function(){
		alert("关注成功")
	}
	
	creatCell(dataArry_C);
	function creatCell(dataArry_C){
	var banner=document.getElementById("banner");
	banner.className="banner";
	banner.style.backgroundImage="url("+dataArry_C[0].image1+")";
	
	var banner_cont=document.createElement("div");
	banner_cont.className="banner_cont";
	banner_cont.innerHTML="<div class='conte'>去那些美好的地方，来一场滑雪</div><div class='English'>The life is a danger, dns fscvdng c cdfi vxctu</div>";
	banner.appendChild(banner_cont);
	}
	
	var box = document.getElementById("box");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ulLis = ul.children;
    var imgWidth = screen.offsetWidth;
    var arr = document.getElementById("arr");
    var arrRight = document.getElementById("right");
    var timer = null;
    
    var pic = 0;
    arrRight.onclick = function () {
        playNext();
    }
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
        },0.1)
    }
    
    var boxs = document.getElementById("boxs");
    var screens = boxs.children[0];
    var uls = screens.children[0];
    var ulLiss = uls.children;
    var imgWidth = screens.offsetWidth;
    var arrs = document.getElementById("arr1");
    var arrRights = document.getElementById("right1");

    var pics = 0;
    arrRights.onclick = function () {
        playNexts();
    }
    arrRights.onmouseout = function () {
        arrRights.style.textDecoration="none";
    }
    function playNexts() {
        if (pics == ulLiss.length - 1) {
            uls.style.left = 0;
            pics = 0;
        }
        pics++;
        var target = -pics * imgWidth;
        animate(uls, target);
    }
    
    
    var boxsd = document.getElementById("boxsd");
    var screensd = boxsd.children[0];
    var ulsd = screensd.children[0];
    var ulLissd = ulsd.children;
    var imgWidth = screensd.offsetWidth;
    var arrsd = document.getElementById("arr2");
    var arrRightsd = document.getElementById("right2");

    var picsd = 0;
    arrRightsd.onclick = function () {
        playNextsd();
    }
    arrRightsd.onmouseout = function () {
        arrRightsd.style.textDecoration="none";
    }
    function playNextsd() {
        if (picsd == ulLissd.length - 1) {
            ulsd.style.left = 0;
            picsd = 0;
        }
        picsd++;
        var target = -picsd * imgWidth;
        animate(ulsd, target);
    }
    
//  内容区图片展示
   creatCells(dataArry_Img);
	function creatCells(dataArry_Img){
		var play1=document.getElementById("play1")
		var play2=document.getElementById("play2")
		var play3=document.getElementById("play3")
		var play4=document.getElementById("play4")
		for (var i=0;i<dataArry_Img.length;i++) {
			var picture=document.createElement("div");
			picture.style.backgroundImage="url("+dataArry_Img[i].img+")";
			picture.className="picture"
			play1.appendChild(picture);
			
			var reply_p=document.createElement("div");
		  reply_p.className="reply_p";
		  reply_p.innerHTML="<h2>欧尼</h2><hr/><p>在最美的时光遇见最美的你和我</p>"
		  picture.appendChild(reply_p);
		  
			
			var picture=document.createElement("div");
			picture.style.backgroundImage="url("+dataArry_Img[i].img1+")";
			picture.className="picture"
		  play2.appendChild(picture)
		  
		  var reply_p=document.createElement("div");
		  reply_p.className="reply_p";
		  reply_p.innerHTML="<h2>欧尼</h2><hr/><p>在最美的时光遇见最美的你和我</p>"
		  picture.appendChild(reply_p);
		  

      var picture=document.createElement("div");
			picture.style.backgroundImage="url("+dataArry_Img[i].img2+")";
			picture.className="picture"
		  play3.appendChild(picture)
		  
		  var reply_p=document.createElement("div");
		  reply_p.className="reply_p";
		  reply_p.innerHTML="<h2>欧尼</h2><hr/><p>在最美的时光遇见最美的你和我</p>"
		  picture.appendChild(reply_p);


      var picture=document.createElement("div");
			picture.style.backgroundImage="url("+dataArry_Img[i].img3+")";
			picture.className="picture"
		  play4.appendChild(picture)
		  
		  var reply_p=document.createElement("div");
		  reply_p.className="reply_p";
		  reply_p.innerHTML="<h2>欧尼</h2><hr/><p>在最美的时光遇见最美的你和我</p>"
		  picture.appendChild(reply_p);
		}
		
		var plays1=document.getElementById("plays1")
		var plays2=document.getElementById("plays2")
		var plays3=document.getElementById("plays3")
		var plays4=document.getElementById("plays4")
		for (var j=0;j<dataArry_Img1.length;j++) {
			var picture4=document.createElement("img");
			picture4.src=dataArry_Img1[j].img;
			picture4.className="pictures"
			plays1.appendChild(picture4);
			
			var picture5=document.createElement("img");
			picture5.src=dataArry_Img1[j].img1;
			picture5.className="pictures"
			plays2.appendChild(picture5);
			
			var picture6=document.createElement("img");
			picture6.src=dataArry_Img1[j].img2;
			picture6.className="pictures"
			plays3.appendChild(picture6);
			
			var picture7=document.createElement("img");
			picture7.src=dataArry_Img1[j].img3;
			picture7.className="pictures"
			plays4.appendChild(picture7);	
		}
		
		var c_cont=document.getElementsByClassName("C_contents");
		for (var k=0;k<c_cont.length;k++) {
			var NR_s=document.createElement("div");
			NR_s.className="NR_s";
			c_cont[k].appendChild(NR_s)
			
			var box_1=document.createElement("div")
			box_1.className="box_1";
			c_cont[k].appendChild(box_1)
			
			var c_title=document.createElement("p")
			c_title.innerHTML="关于心情，也关于旅行";
			c_title.style.color="white"
			NR_s.appendChild(c_title)
			
			var c_Content=document.createElement("div");
			c_Content.className="c_Content";
			c_Content.innerHTML=dataArry_conts[0].conts;
			NR_s.appendChild(c_Content)
		}
		
		var playsd1=document.getElementById("playsd1")
		var playsd2=document.getElementById("playsd2")
		var playsd3=document.getElementById("playsd3")
		var playsd4=document.getElementById("playsd4")
		for (var n=0;n<dataArry_Imgs.length;n++) {
			var picture1=document.createElement("div");
			picture1.style.backgroundImage="url("+dataArry_Imgs[n].img+")";
			picture1.className="pictured"
			playsd1.appendChild(picture1);
			
			var p_reply=document.createElement("div")
		  p_reply.className="p_reply";
		  p_reply.innerHTML="<h2>猫火火</h2><hr/><p>与海贼王一起踏上冒险旅程</p>"
		  picture1.appendChild(p_reply)
			
			var picture1=document.createElement("div");
			picture1.style.backgroundImage="url("+dataArry_Imgs[n].img1+")";
			picture1.className="pictured"
		  playsd2.appendChild(picture1)
		  
		  var p_reply=document.createElement("div")
		  p_reply.className="p_reply";
		  p_reply.innerHTML="<h2>猫火火</h2><hr/><p>与海贼王一起踏上冒险旅程</p>"
		  picture1.appendChild(p_reply)

      var picture1=document.createElement("div");
			picture1.style.backgroundImage="url("+dataArry_Imgs[n].img2+")";
			picture1.className="pictured"
		  playsd3.appendChild(picture1)
		  
		  var p_reply=document.createElement("div")
		  p_reply.className="p_reply";
		  p_reply.innerHTML="<h2>猫火火</h2><hr/><p>与海贼王一起踏上冒险旅程</p>"
		  picture1.appendChild(p_reply)

      var picture1=document.createElement("div");
			picture1.style.backgroundImage="url("+dataArry_Imgs[n].img3+")";
			picture1.className="pictured"
		  playsd4.appendChild(picture1)
		  
		  var p_reply=document.createElement("div")
		  p_reply.className="p_reply";
		  p_reply.innerHTML="<h2>猫火火</h2><hr/><p>与海贼王一起踏上冒险旅程</p>"
		  picture1.appendChild(p_reply)
		}
	}
}