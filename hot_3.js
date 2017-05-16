function GetId(id){
	return document.getElementById(id);
}
//封装一个闭包，来获取Json
function GetJson(){
	var oJson=[]
	for(var i=0;i<90;i++){
		var q={
				'place':'<高迪经典>西班牙巴塞罗那巴特之家免排队电子票(含中文3D视'+'+'+i,
				
				'Price':'$158',
				
			}
		oJson.push(q);
	}
	return function(){
		return oJson;
	}
}
//添加货物的 图片 价格 介绍 店铺名等
window.onload=function(){
	(function AddGoods(add){
		//闭包调出Json
		var aJson=GetJson()();
		var oUl=GetId('Dg_Content_Sort');

		//为底部点击事件
		var Target=add+9>aJson.length?aJson.length:add+9;
		var q=0;
		for(var j=add;j<Target;j++){ 
			var oLi=document.createElement('li');
			q++;
			//添加
			// Create(oLi,'liu_jsonImg','img',aJson[j].img);
			Create(oLi,'liu_jsonSpan1','span',aJson[j].place);
			Create(oLi,'liu_jsonSpan2','span',aJson[j].Price);
			oUl.appendChild(oLi);
			
		}
		 //每个li里面的图片不一样，则采用数组添加进去
            var Img_ = ["img/slice/A0.jpg","img/slice/A1.jpg",
            "img/slice/A2.jpg","img/slice/A3.jpg","img/slice/A4.jpg",
            "img/slice/A5.jpg","img/slice/A6.jpg","img/slice/A7.jpg",
            "img/slice/A8.jpg"];

            var list=oUl.getElementsByTagName('li');
               console.log(list.length);
               for (var i = 0; i < list.length; i++) 
               {
               list[i].style.backgroundImage ="url("+Img_[i]+")";
               list[i].style.backgroundRepeat='no-repeat';
                   
               };
		// 创建li并插入ol元素中
		var Page=Math.ceil(aJson.length/9);
		GetId('Dg_Click_Event').style.width=(Page+1)*40+'px';
		GetId('Dg_Click_Event').style.height=32+'px';
		if (Page>=4) {
			GetId('Dg_Click_Event').parentNode.style.width=4*45+'px';
			GetId('Dg_Click_Event').parentNode.style.overflow='hidden';
		}
		else{
			GetId('Dg_Click_Event').parentNode.style.width=(Page+1)*35+'px';
		}
		GetId('Dg_Click_Event').style.position='relative';

		
		for(var i=0;i<Page;i++){
			var al=document.createElement('li');
			al.innerHTML=i+1;
			al.className='Dg_Col';
			GetId('Dg_Click_Event').appendChild(al);
			
		}
		//给元素内容标识   共Page页   内容
		//首页点击事件
        GetId('liu_firstPage').onclick=function (){
            GetId('Dg_Click_Event').innerHTML='';
            oUl.innerHTML='';
            var sqrt=Target=0;
            AddGoods(sqrt);
            var oDl2=parseInt(sqrt/4);
            Colr(oDl2);
            MoveLeft(oDl2,Page);
            GetId('Previous_Page').onclick=null;
             
            
        }
         //尾页跳转按钮
         GetId('Dg_Page').onclick=function (){
            GetId('Dg_Click_Event').innerHTML='';
            oUl.innerHTML='';
            
            var sqrt=Target=36;
            AddGoods(sqrt);
            var oDl1=parseInt(sqrt/4);
            Colr(oDl1);
            MoveLeft(oDl1,Page);
            GetId('Next_Page').onclick=null;
            
         }
		
		
		// GetId('Dg_Page').innerHTML=Page;

		// 下一页点击事件
		GetId('Next_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';

			var sqrt=Target==aJson.length?add:Target;
			AddGoods(sqrt);
			var oDl1=parseInt(sqrt/9);
			Colr(oDl1);
			MoveLeft(oDl1,Page);
		}
		// 上一页点击事件
		GetId('Previous_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';
			var sqrt=Target<=9?0:add-9;
			AddGoods(sqrt);
			var oDl2=parseInt(sqrt/9);
			Colr(oDl2);
			MoveLeft(oDl2,Page);
		}
		//输入框确认 点击事件事件
		GetId('Page').onblur=function(){
			var NewPage=parseInt(GetId('Page').value);
			if(NewPage){
				GetId('Dg_Click_Event').innerHTML='';
				oUl.innerHTML='';
				var sqrt=NewPage-1;
				sqrt=sqrt<0?0:sqrt;
				sqrt=sqrt>Page-1?Page-1:sqrt;
				AddGoods(sqrt*9);
				Colr(sqrt);
				MoveLeft(sqrt,Page);
			}
		}

		// 循环添加 网页的链接
		var oClickImg=document.getElementsByClassName('Dg_Sort_Img');
		var oClickP=document.getElementsByClassName('Dg_Span_P');
		var oClickB=document.getElementsByClassName('Dg_Span_B');
		for (var i = 0; i < oClickImg.length; i++) {
			oClickP[i].onclick=oClickImg[i].onclick=function(){
				window.location = aJson[i].Url;
			}
			oClickB[i].onclick=function(){
				window.location = aJson[i].aUrl;
			}
		}
		// 页码点击切换切换页面
		var aCol=document.getElementsByClassName('Dg_Col');
		aCol[0].style.height=30+'px';
        aCol[0].style.width=30+'px';
        aCol[0].style.border='1px solid #313031';
		for (var e = 0; e < aCol.length; e++) {
			aCol[e].index=e;
			aCol[e].onclick=function(){
				GetId('Dg_Click_Event').innerHTML='';
				oUl.innerHTML='';
				AddGoods(this.index*9);
				Colr(this.index);
				MoveLeft(this.index,Page);
			}
		}
	})(0);
}
// 封装点击切换页码时的移动距离
function MoveLeft(oDl,Page){
	var aCol=document.getElementsByClassName('Dg_Col');
	if (oDl>3&&oDl<Page-3) {
			aCol[oDl].parentNode.style.left=-(oDl-2)*35+'px';
		}
	else if(oDl<3){
		aCol[oDl].parentNode.style.left=0+'px';
	}
	else if (oDl>Page-3) {
		aCol[oDl].parentNode.style.left=-(Page-5)*35+'px';
	}
	 //判断省略号什么时候消失的事件
    if(oDl>Page-4){
            GetId('liu_none').style.display='none';
          }else{
            GetId('liu_none').style.display='block';
          }
}
//封装的创建元素
function Create(cE,Cl,El,a){
	var oLi=document.createElement(El);
	oLi.className=Cl;
	cE.appendChild(oLi);
	//数据超量判断
	if(a.length>=100){
		a=/^.{100}/.exec(a)+'...';
	}
	if(El=='img'&&a)oLi.src=a;
	else oLi.innerHTML=a;
}
//封装底部 切换时页码的切换
function Colr(iE){
	var aCol=document.getElementsByClassName('Dg_Col');
	if(iE){
		for (var q = 0; q < aCol.length; q++) {
				aCol[q].style.color='#313031';
                aCol[0].style.height='25px';
                aCol[0].style.width='25px';
                
			}
		    aCol[iE].style.height='30px';
            aCol[iE].style.width='30px';
            aCol[iE].style.border='1px solid #313031';
            
	}
}