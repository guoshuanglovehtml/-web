var dataArry=[];
var dataArryI=[];
var dataArry_bottom=[];
var dataArry_bottom1=[];
function fn(dates){
  dataArry=dates.data.content;
  dataArryI=dates.data.contents;
  dataArry_bottom=dates.data.contents_bottom;
  dataArry_bottom1=dates.data.content_bottom1;
}
window.onload=function(){	
	//横幅部分内容
	creatCell(dataArry);
	function creatCell(dataArry){
	var bann_C=document.getElementById("bann_C");
	var bann_sub=document.createElement("div");
	bann_sub.className="bann_sub";
	bann_C.appendChild(bann_sub);
	
	var bann_Img=document.createElement("img");
	bann_Img.src=dataArry[0].images;
	bann_sub.appendChild(bann_Img);
	
	var title=document.createElement("div");
	title.className="title";
	title.innerHTML=dataArry[0].name;
	bann_C.appendChild(title);
	
	var contents=document.createElement("div");
	contents.className="contents";
	contents.innerHTML=dataArry[0].grade;
	bann_C.appendChild(contents);
	
	var gzhu=document.createElement("div");
	gzhu.className="gzhu";
	gzhu.innerHTML=dataArry[0].emand;
	bann_C.appendChild(gzhu);
	
	var gz=document.createElement("div");
	gz.className="gz";
	gz.innerHTML="关注成功";
	gzhu.appendChild(gz);
	gzhu.onclick=function(){
		gz.style.display="block"		
	}
	gzhu.onmouseout=function(){
		gz.style.display="none"		
	}
	
	var lyan=document.createElement("div");
	lyan.className="lyan";
	lyan.innerHTML=dataArry[0].fee;
	bann_C.appendChild(lyan);
	
	lyan.onclick=function(){
		alert("转留言页")
	}	
}	
	
	var cloud  = document.getElementById("cloud");  
    var nav = document.getElementById("navs");
    var lis1 = nav.children[1].children;
    var current = 0;   
    for(var i=0; i<lis1.length;i++) {
        lis1[i].onmouseover = function() {
            target = this.offsetLeft;  
        }
        lis1[i].onmouseout = function() {
            target = current;     
        }
        lis1[i].onclick = function() {
           current = this.offsetLeft;   
        }
    }
    // 缓动公式
    var leader = 0;
    var target = 0;
    setInterval(function(){
        leader = leader + (target - leader ) / 10;
        cloud.style.left = leader + "px";
    },10);
        
	//关注内容创建
	var attention=document.getElementById("attention");
	creatCells(dataArryI);	
	function creatCells(dataArryI){
		attention.innerHTML="";
	for (var i=0;i<dataArryI.length;i++) {
		var sub_img=document.createElement("div");
		sub_img.className="sub_img";
		attention.appendChild(sub_img);
		
		var imgs=document.createElement("img");
		imgs.className="imgs";
		sub_img.appendChild(imgs);
		imgs.src=dataArryI[i].image1;
		
		var tizhu=document.createElement("div")
		tizhu.className="tizhu";
		sub_img.appendChild(tizhu);
		tizhu.innerHTML="<a href='person_center.html'>关注</a>";
		
		var gz=document.createElement("div");
	gz.className="gz";
	gz.innerHTML="关注成功";
	tizhu.appendChild(gz);
	tizhu.onclick=function(){
		gz.style.display="block"		
	}
	tizhu.onmouseout=function(){
		gz.style.display="none"		
	    }
	  }
  }
	
	var travelNotes=document.getElementById("travelNotes")
	creatCell1(dataArry_bottom);
	function creatCell1(dataArry_bottom){
		for (var j=0;j<dataArry_bottom.length;j++) {
			var contents_div=document.createElement("div");
			contents_div.className="contents_div";
			travelNotes.appendChild(contents_div);
			
			var pic=document.createElement("img")
			pic.src=dataArry_bottom[j].image2
			pic.style.float="left";
			contents_div.appendChild(pic)
			
			var neirong=document.createElement("div");
			neirong.className="neirong";
			contents_div.appendChild(neirong);
			
			var cont1=document.createElement("div");
			cont1.className="cont1";
			neirong.appendChild(cont1);

      var cont2=document.createElement("div");
			cont2.className="cont2";
			neirong.appendChild(cont2);
			cont2.innerHTML=dataArry_bottom[j].titles;
			
			var cont3=document.createElement("div");
			cont3.className="cont3";
			neirong.appendChild(cont3);
			cont3.innerHTML=dataArry_bottom[j].contentes;
			
			var cont4=document.createElement("div");
			cont4.className="cont4";
			neirong.appendChild(cont4);
			cont4.innerHTML=dataArry_bottom[j].jiaozhu;			
		}
		
		var more_d=document.createElement("div")
		more_d.className="more_d";
		more_d.innerHTML="<a href='javascript:;'>还有更多哦>></a>"
		travelNotes.appendChild(more_d)
		
	}
	
	var shoot=document.getElementById("shoot");
	creatCell2(dataArry_bottom1);
	function creatCell2(dataArry_bottom1){
		for (var k=0;k<dataArry_bottom1.length;k++) {
			var pic_picture=document.createElement("div");
			pic_picture.className="pic_picture";
			shoot.appendChild(pic_picture);
			
			var pics=document.createElement("img")
			pics.src=dataArry_bottom1[k].image3;
			pics.style.float="left";
			pic_picture.appendChild(pics);
			
			var explain=document.createElement("div");
			explain.className="explain";
			pic_picture.appendChild(explain);
			
			var spam=document.createElement("span");
			spam.className="spam";
			explain.appendChild(spam);
			
			var p=document.createElement("div");
			p.className="p";
			explain.appendChild(p);
			p.innerHTML=dataArry_bottom1[k].explain;
		}
		var more_ds=document.createElement("div")
		more_ds.className="more_ds";
		more_ds.innerHTML="<a href='javascript:;'>还有更多哦>></a>"
		shoot.appendChild(more_ds)
	}
	
}
