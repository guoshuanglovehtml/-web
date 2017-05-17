var dataArry_C=[];
var dataArry_Img=[];
var dataArry_Img1=[];
var dataArry_cont1=[];
var dataArry_dibiao=[];
var dataArry_lvyou=[];
function fn(dates){
  dataArry_C=dates.data.cont;
  dataArry_Img=dates.data.cont1;
  dataArry_Img1=dates.data.cont2;
  dataArry_cont1=dates.data.dibai;
  dataArry_dibiao=dates.data.dibiao;
  dataArry_lvyou=dates.data.lvyou;
}
window.onload=function(){
	
	creatCell(dataArry_C);
	function creatCell(dataArry_C){
	var banner=document.getElementById("banner");
	banner.className="banner";
	banner.style.backgroundImage="url("+dataArry_C[0].image1+")";
	
	var banner_cont=document.createElement("div");
	banner_cont.className="banner_cont";
	banner_cont.innerHTML="<div class='conte'>人生就是冒险，无论你身在何处</div><div class='English'>The life is a danger, dns fscvdng c cdfi vxctu</div>";
	banner.appendChild(banner_cont);
	}
	
	var play1=document.getElementById("play1");
	creatCell1(dataArry_Img);
	function creatCell1(dataArry_Img){
		for (var i=0;i<dataArry_Img.length;i++) {
			var pic=document.createElement("div");
			pic.className="pic";
			pic.style.backgroundImage="url("+dataArry_Img[i].image1+")"
			play1.appendChild(pic);
//			console.log(pic);
				
			var pic_C=document.createElement("div");
			pic_C.className="pic_C";				
			pic_C.innerHTML=dataArry_cont1[i].contd;
			pic.onmouseover=function(){
				this.appendChild(pic_C);
			}		
	}
}
	
	var play2=document.getElementById("play2");
	creatCell2(dataArry_Img);
	function creatCell2(dataArry_Img){
		for (var i=0;i<dataArry_Img.length;i++) {
			var pic=document.createElement("div");
			pic.className="pic";
			pic.style.backgroundImage="url("+dataArry_Img1[i].image2+")"
			play2.appendChild(pic);
			
			var pic_C=document.createElement("div");
			pic_C.className="pic_C";				
			pic_C.innerHTML=dataArry_cont1[i].contd;
			pic.onmouseover=function(){
				this.appendChild(pic_C);
			}		
		}
}
	
	
	var plays1=document.getElementById("plays1");
			var picW=document.createElement("div");
			picW.className="pic1";
			picW.style.backgroundImage="url("+dataArry_dibiao[0].image1+")"
			plays1.appendChild(picW);
			
			var pic_Cs=document.createElement("div");
			pic_Cs.className="pic_ss";				
			pic_Cs.innerHTML=dataArry_dibiao[0].contd;
				picW.appendChild(pic_Cs);			
			
			var pic1=document.createElement("div");
			pic1.className="pic1";
			plays1.appendChild(pic1);
			
			var pic_C1=document.createElement("div");
			pic_C1.style.backgroundImage="url("+dataArry_dibiao[1].image1+")"
			pic_C1.className="pic_C2";				
			pic1.appendChild(pic_C1);
	    
        var hover1=document.createElement("div")
        hover1.className="pic_ds"
        hover1.innerHTML=dataArry_dibiao[1].contd;
        	pic_C1.appendChild(hover1)
        
        
        var pic_C2=document.createElement("div");
        pic_C2.style.backgroundImage="url("+dataArry_dibiao[2].image1+")"
			pic_C2.className="pic_C3";				
			pic1.appendChild(pic_C2);
	    
        var hover2=document.createElement("div")
        hover2.className="pic_sd"
        hover2.innerHTML=dataArry_dibiao[2].contd;
        	pic_C2.appendChild(hover2)
        
        
        var pic2=document.createElement("div");
			pic2.className="pic1";
			plays1.appendChild(pic2);
			
			var pic_C3=document.createElement("div");
			pic_C3.style.backgroundImage="url("+dataArry_dibiao[3].image1+")"
			pic_C3.className="pic_C2";				
			pic2.appendChild(pic_C3);
	    
        var hover3=document.createElement("div")
        hover3.className="pic_ds"
        hover3.innerHTML=dataArry_dibiao[3].contd;
        	pic_C3.appendChild(hover3)
        
        
        var pic_C4=document.createElement("div");
        pic_C4.style.backgroundImage="url("+dataArry_dibiao[4].image1+")"
			pic_C4.className="pic_C3";				
			pic2.appendChild(pic_C4);
	    
        var hover4=document.createElement("div")
        hover4.className="pic_sd"
        hover4.innerHTML=dataArry_dibiao[4].contd;
        	pic_C4.appendChild(hover4)
	
	
	    var plays2=document.getElementById("plays2");
			var pics=document.createElement("div");
			pics.className="pic1";
			pics.style.backgroundImage="url("+dataArry_dibiao[0].image1+")"
			plays2.appendChild(pics);
			
			var pic_CR=document.createElement("div");
			pic_CR.className="pic_ss";				
			pic_CR.innerHTML=dataArry_dibiao[0].contd;
				pics.appendChild(pic_CR);

			
			var pics1=document.createElement("div");
			pics1.className="pic1";
			pics.style.backgroundImage="url("+dataArry_dibiao[0].image1+")"
			plays2.appendChild(pics1);
			
		var pic_C5=document.createElement("div");
			pic_C5.style.backgroundImage="url("+dataArry_dibiao[1].image1+")"
			pic_C5.className="pic_C2";				
			pics1.appendChild(pic_C5);
	    
        var hover5=document.createElement("div")
        hover5.className="pic_ds"
        hover5.innerHTML=dataArry_dibiao[1].contd;
        	pic_C5.appendChild(hover5)
        	
        
       var pic_C6=document.createElement("div");
        pic_C6.style.backgroundImage="url("+dataArry_dibiao[2].image1+")"
			pic_C6.className="pic_C3";				
			pics1.appendChild(pic_C6);
	    
        var hover6=document.createElement("div")
        hover6.className="pic_sd"
        hover6.innerHTML=dataArry_dibiao[2].contd;
        	pic_C6.appendChild(hover6)
        	
        
       var pics2=document.createElement("div");
			pics2.className="pic1";
			pics.style.backgroundImage="url("+dataArry_dibiao[0].image1+")"
			plays2.appendChild(pics2);
        
      var pic_C7=document.createElement("div");
			pic_C7.style.backgroundImage="url("+dataArry_dibiao[3].image1+")"
			pic_C7.className="pic_C2";				
			pics2.appendChild(pic_C7);
	    
        var hover7=document.createElement("div")
        hover7.className="pic_ds"
        hover7.innerHTML=dataArry_dibiao[3].contd;
        	pic_C7.appendChild(hover7)

        
        var pic_C8=document.createElement("div");
        pic_C8.style.backgroundImage="url("+dataArry_dibiao[4].image1+")"
			pic_C8.className="pic_C3";				
			pics2.appendChild(pic_C8);
	    
        var hover8=document.createElement("div")
        hover8.className="pic_sd"
        hover8.innerHTML=dataArry_dibiao[4].contd;
        	pic_C8.appendChild(hover8)
	
	
	var playsd1=document.getElementById("playsd1");
			var picW1=document.createElement("div");
			picW1.className="picS1";
			picW1.style.backgroundImage="url("+dataArry_lvyou[0].image1+")"
			playsd1.appendChild(picW1);
			
			var pic_C=document.createElement("div");
			pic_C.className="pic_ss";				
			pic_C.innerHTML=dataArry_lvyou[0].contd;
				picW1.appendChild(pic_C);

			
			var pic1=document.createElement("div");
			pic1.className="picS1";
			pic1.style.backgroundImage="url("+dataArry_lvyou[1].image1+")"
			playsd1.appendChild(pic1);
			
			var pic_C1=document.createElement("div");
			pic_C1.className="pic_ss";				
			pic_C1.innerHTML=dataArry_lvyou[1].contd;
				pic1.appendChild(pic_C1);


			var pic2=document.createElement("div");
			pic2.className="picS1";
			playsd1.appendChild(pic2);
			
			var pic_C9=document.createElement("div");
			pic_C9.style.backgroundImage="url("+dataArry_lvyou[2].image1+")"
			pic_C9.className="pic_C2";				
			pic2.appendChild(pic_C9);
	    
        var hover9=document.createElement("div")
        hover9.className="pic_ds"
        hover9.innerHTML=dataArry_lvyou[0].contd;
        	pic_C9.appendChild(hover9)

        
			var pic_Cw10=document.createElement("div");
        pic_Cw10.style.backgroundImage="url("+dataArry_lvyou[1].image1+")"
			pic_Cw10.className="pic_C3";				
			pic2.appendChild(pic_Cw10);
	    
        var hover10=document.createElement("div")
        hover10.className="pic_sd"
        hover10.innerHTML=dataArry_lvyou[1].contd;
        	pic_Cw10.appendChild(hover10)

	
	var playsd2=document.getElementById("playsd2");
			var picW2=document.createElement("div");
			picW2.className="picS1";
			picW2.style.backgroundImage="url("+dataArry_lvyou[0].image1+")"
			playsd2.appendChild(picW2);
			
			var pic_C=document.createElement("div");
			pic_C.className="pic_ss";				
			pic_C.innerHTML=pic_C.innerHTML=dataArry_lvyou[0].contd;
				picW2.appendChild(pic_C);

			
			var pic1=document.createElement("div");
			pic1.className="picS1";
			pic1.style.backgroundImage="url("+dataArry_lvyou[0].image1+")"
			playsd2.appendChild(pic1);
			
			var pic_C1=document.createElement("div");
			pic_C1.className="pic_ss";				
			pic_C1.innerHTML=dataArry_lvyou[1].contd;
				pic1.appendChild(pic_C1);

			
			var pic2=document.createElement("div");
			pic2.className="picS1";
			playsd2.appendChild(pic2);
			
			var pic_C9=document.createElement("div");
			pic_C9.style.backgroundImage="url("+dataArry_lvyou[0].image1+")"
			pic_C9.className="pic_C2";				
			pic2.appendChild(pic_C9);
	    
        var hover9=document.createElement("div")
        hover9.className="pic_ds"
        hover9.innerHTML=dataArry_lvyou[0].contd;
        	pic_C9.appendChild(hover9)

        
			var pic_C10=document.createElement("div");
        pic_C10.style.backgroundImage="url("+dataArry_lvyou[1].image1+")"
			pic_C10.className="pic_C3";				
			pic2.appendChild(pic_C10);
	    
        var hover10=document.createElement("div")
        hover10.className="pic_sd"
        hover10.innerHTML=dataArry_lvyou[1].contd;
        	pic_C10.appendChild(hover10)

	//内容区轮播
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
        arrRight.style.textDecoration="underline";
    }
    arrRight.onmouseout = function () {
        arrRight.style.textDecoration="none";
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
        }, 30)
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
        arrRights.style.textDecoration="underline";
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
        arrRightsd.style.textDecoration="underline";
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
}
