var dataArry=[];
var dataArryIs=[];
var dataArry_bottom=[];
var dataArry_bottom1=[];
var dataArry_bottom2=[];
function fn(dates){
  dataArry=dates.data.content;
  dataArryIs=dates.data.cont3;
  dataArry_bottom=dates.data.cont4;
  dataArry_bottom1=dates.data.contents_bottoms;
  dataArry_bottom2=dates.data.bottom_content;
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
	gzhu.innerHTML="完善个人资料";
	bann_C.appendChild(gzhu);
	
	var gz=document.createElement("div");
	gz.className="gz";
	gz.innerHTML="跳转到资料页面";
	gzhu.appendChild(gz);
	gzhu.onclick=function(){
		gz.style.display="block"		
	}
	gzhu.onmouseout=function(){
		gz.style.display="none"		
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
    
    creatCells(dataArryIs);
	function creatCells(dataArryIs){
		var My_food=document.getElementById("attention");
		var My_foods=document.createElement("div");
		My_foods.className="My_foods";
		My_food.appendChild(My_foods);
		
		var head_portrait=document.createElement("img");
		head_portrait.src=dataArryIs[0].image6;
		head_portrait.className="head_portrait";
		My_foods.appendChild(head_portrait);
		
		var H_title=document.createElement("p");
		H_title.innerHTML=dataArryIs[0].titles;
		H_title.className="H_title";
		My_foods.appendChild(H_title);
		
		var h_content=document.createElement("p");
		h_content.innerHTML=dataArryIs[0].neirong;
		h_content.className="h_content";
		My_foods.appendChild(h_content);
		
		var C_content=document.createElement("div");
		C_content.className="C_content";
		My_food.appendChild(C_content);
		
		var pic1=document.createElement("img");
		pic1.src=dataArryIs[1].image1;
		pic1.style.marginLeft="102px";
		pic1.style.verticalAlign="top";
		C_content.appendChild(pic1);
		
		var pic2=document.createElement("img");
		pic2.src=dataArryIs[1].image2;
		pic2.style.marginLeft="68px";
		C_content.appendChild(pic2);
		
		var pic3=document.createElement("img");
		pic3.src=dataArryIs[1].image3;
		pic3.style.marginLeft="68px";
		C_content.appendChild(pic3);
		
		pic1.onclick=function(){
			pic1.style.width="500px";
			pic1.style.height="400px";
			pic2.style="width:100px;height:100px";
			pic3.style="width:100px;height:100px";
		}
		
		pic1.onmouseout=function(){
			pic1.style.width="436px";
			pic1.style.height="310px";
			pic2.style="width:232px;height:156px;margin-left:68px";
			pic3.style="width:232px;height:156px;margin-left:68px";
		}
		
		var comments=document.createElement("div");
		comments.className="comments";
		comments.innerHTML="<a href='javascript:;'>评论</a>";
		C_content.appendChild(comments);
		
		comments.onclick=function(){
			alert("去写评论")
		}
		
		var My_person=document.createElement("div");
		My_person.className="My_person";
		My_food.appendChild(My_person);
		
		var head_portrait=document.createElement("img");
		head_portrait.src=dataArryIs[2].image6;
		head_portrait.className="head_portrait";
		My_person.appendChild(head_portrait);
		
		var H_title=document.createElement("p");
		H_title.innerHTML=dataArryIs[2].titles;
		H_title.className="H_title";
		My_person.appendChild(H_title);
		
		var h_content=document.createElement("p");
		h_content.innerHTML=dataArryIs[2].neirong;
		h_content.className="h_content";
		My_person.appendChild(h_content);
		
		var P_content=document.createElement("div");
		P_content.className="P_content";
		My_food.appendChild(P_content);
		
		var P_pic=document.createElement("img");
		P_pic.src=dataArry_bottom[0].image1;
		P_pic.style.marginLeft="102px";
		P_content.appendChild(P_pic);
		
		var P_pic1=document.createElement("img");
		P_pic1.src=dataArry_bottom[0].image2;
		P_pic1.style.marginLeft="30px";
		P_content.appendChild(P_pic1);
		
		var P_pic2=document.createElement("img");
		P_pic2.src=dataArry_bottom[0].image3;
		P_pic2.style.marginLeft="30px";
		P_content.appendChild(P_pic2);
		
		var more=document.createElement("span");
		more.innerHTML="更多∨"
		more.className="more";
		P_content.appendChild(more)
		more.onclick=function(){
		alert("跳转页面")
		}
		
		var fengjing=document.getElementById("travelNotes")
		
		var Write_travel=document.createElement("div");
		Write_travel.className="Write_travel";
		Write_travel.innerHTML="写游记";
		fengjing.appendChild(Write_travel)
		Write_travel.onclick=function(){
			alert("去写游记")
		}
		
		for (var j=0;j<dataArry_bottom1.length;j++) {
			var contents_div=document.createElement("div");
			contents_div.className="contents_div";
			fengjing.appendChild(contents_div); 
			
			var pic=document.createElement("img")
			pic.src=dataArry_bottom1[j].image2
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
			cont2.innerHTML=dataArry_bottom1[j].titles;
			
			var cont3=document.createElement("div");
			cont3.className="cont3";
			neirong.appendChild(cont3);
			cont3.innerHTML=dataArry_bottom1[j].contentes;
			
			var cont4=document.createElement("div");
			cont4.className="cont4";
			neirong.appendChild(cont4);
			cont4.innerHTML=dataArry_bottom1[j].jiaozhu;
		}
		
		var fengjings=document.getElementById("shoot")
		
		var uploading=document.createElement("div");
		uploading.className="uploading";
		uploading.innerHTML="上传我的摄影";
		fengjings.appendChild(uploading)
		uploading.onclick=function(){
			alert("去上传我的摄影")
		}
		
		for (var k=0;k<dataArry_bottom1.length;k++) {
			var pic_picture=document.createElement("div");
			pic_picture.className="pic_picture";
			fengjings.appendChild(pic_picture);
			
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
		
		var bottom_content=document.getElementById("liuyan");
			for (var n=0;n<dataArry_bottom2.length;n++) {
				var L_content=document.createElement("div");
				L_content.className="L_content";
				bottom_content.appendChild(L_content);
				
				var toux=document.createElement("img");
				toux.className="toux";
				toux.src=dataArry_bottom2[n].img1;
				L_content.appendChild(toux);
				
				var name=document.createElement("div");
				name.className="name";
				name.innerHTML=dataArry_bottom2[n].name;
				L_content.appendChild(name)
				
				var time=document.createElement("div");
				time.className="time";
				time.innerHTML=dataArry_bottom2[n].time;
				L_content.appendChild(time)
				
				var content=document.createElement("div");
				content.className="b_congtent";
				content.innerHTML=dataArry_bottom2[n].content;
				L_content.appendChild(content);
				
				var reply=document.createElement("div");
				reply.className="reply";
				reply.innerHTML="回复";
				L_content.appendChild(reply);
				
				reply.onclick=function fn(){
					var inputs=document.createElement("input");
					inputs.className="inputs";
					this.parentNode.appendChild(inputs);
					
					var sure=document.createElement("button");
					sure.innerHTML="确定";
					sure.className="sure";
					this.parentNode.appendChild(sure);
					
				var txt = document.getElementsByTagName("input")[0];
          var uls = document.createElement("ul");
          uls.style="position:absolute;top:100px;left:150px";
          sure.parentNode.appendChild(uls);
          sure.onclick=function(){
          	inputs.style.display="none";
          	sure.style.display="none";
          	if(txt.value == "")
                {
//              	inputs.innerHTML="输入不能为空";
                    alert("输入不能为空");
                    return false;
//                  inputs.style.display="block";
//        	        sure.style.display="block";
                }                
                var newli = document.createElement("li");
                newli.className="newli";
                newli.innerHTML = txt.value + "<a href ='javascript:;'>删除</a>";  // 吧表单的值给  新li

                txt.value = "";
                var lis = uls.children;
                if(lis.length == 0)
                {
                    uls.appendChild(newli);
                }
                else
                {
                    uls.insertBefore(newli,lis[0]);
                }
                var as = document.getElementsByTagName("a");
                for(var i=0; i<as.length;i++)
                {
                    as[i].onclick = function(){
                        uls.removeChild(this.parentNode);
                    }
                }
            }
				}
			}
	}
	
}
