function GetId(id){
	return document.getElementById(id);
}
//封装一个闭包，来获取Json
function GetJson(){
	var oJson=[]
	for(var i=0;i<640;i++){
		var q={
		 'yuding':'立即预订',
	    'Hotel':'弗莱明大酒店',
		'H_E':'Grand Hote Fleming',		
		'Price':' ¥1288',
		'jianjie':'简介: &nbsp;&nbsp;Grand Hote Fleming酒店位于罗马市中心，距离圣西斯大教堂,斗兽场仅有<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10分钟车程,让你体验罗马仕的安静生活。酒店设施齐全。'+'+'+i,
		'pingfen':'8.1分',
		'pingfen1':'评分:',
		'pingfen_shuoming':'(37个我们er在这里住过)',
		'pinglun':'评论: &nbsp;&nbsp;里面的设施非常棒,还有游泳池、酒吧、桌球室。再玩一天后回来让人特别<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;轻松酒店的交通也非常便利,位于市中心。总之下次有机会来罗马,还会住这<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家酒店挺不错的。',	
		'jieguo':'共有34条评论'	,
		'dianji':'点击查看>',
		'xingji':'★ ★ ★ ★',

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
		var Target=add+5>aJson.length?aJson.length:add+5;
		var q=0;
		for(var j=add;j<Target;j++){ 
			var oLi=document.createElement('li');
			var divs=document.createElement('div');
			q++;
			//添加
			var sub_div=document.createElement('div');
			Create(divs,'liu_jsonSpan3','span',aJson[j].Hotel);
			Create(divs,'liu_jsonSpan4','span',aJson[j].H_E);
			Create(divs,'liu_jsonSpan2','span',aJson[j].Price);
			Create(divs,'liu_jsonSpan8','span',aJson[j].yuding);
			Create(divs,'liu_jsonSpan1','span',aJson[j].jianjie);
            Create(divs,'liu_jsonSpan9','span',aJson[j].pingfen1);
            Create(divs,'liu_jsonSpan10','span',aJson[j].pingfen);
             Create(divs,'liu_jsonSpan0','span',aJson[j].pingfen_shuoming);
			Create(divs,'liu_jsonSpan5','span',aJson[j].pinglun);
			Create(divs,'liu_jsonSpan6','span',aJson[j].jieguo);
			Create(divs,'liu_jsonSpan7','span',aJson[j].dianji);
			Create(divs,'liu_jsonSpan11','span',aJson[j].xingji);
			oUl.appendChild(oLi);
			divs.className="liu_divs";
			oLi.appendChild(divs);
			sub_div.className='sub_div';
			oLi.appendChild(sub_div);
		}

	     //每个li里面的图片不一样，则采用数组添加进去
            var Img_ = ["img/HL_page3/HTimg1.png","img/HL_page3/HTimg2.png",
            "img/HL_page3/HTimg3.png","img/HL_page3/HTimg4.png",
            "img/HL_page3/HTimg5.png",];

            var list=document.getElementsByClassName('sub_div');
               console.log(list.length);
               for (var i = 0; i < list.length; i++) 
               {
               list[i].style.backgroundImage ="url("+Img_[i]+")";
               list[i].style.backgroundRepeat='no-repeat';
                   
               };
		// 创建li并插入ol元素中
		var Page=Math.ceil(aJson.length/5);
		GetId('Dg_Click_Event').style.width=(Page+1)*28+'px';
		GetId('Dg_Click_Event').style.height=30+'px';
		if (Page>=4) {
			GetId('Dg_Click_Event').parentNode.style.width=4*38+'px';
			GetId('Dg_Click_Event').parentNode.style.overflow='hidden';
		}
		else{
			GetId('Dg_Click_Event').parentNode.style.width=(Page+1)*28+'px';
		}
		GetId('Dg_Click_Event').style.position='relative';

		
		for(var i=0;i<Page;i++){
			var al=document.createElement('li');
			al.innerHTML=i+1;
			al.className='Dg_Col';
			GetId('Dg_Click_Event').appendChild(al);
			
		}
		//给元素内容标识   共Page页   内容
		// GetId('Dg_Page').innerHTML=Page;
         //尾页跳转按钮
         GetId('liu_none').onclick=function (){
            GetId('Dg_Click_Event').innerHTML='';
            oUl.innerHTML='';
            var sqrt=Target=127;
            AddGoods(sqrt);
            var oDl1=parseInt(sqrt);
            Colr(oDl1);
            MoveLeft(oDl1,Page);
            GetId('Next_Page').onclick=null;
            
         }
		// 下一页点击事件
		GetId('Next_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';

			var sqrt=Target==aJson.length?add:Target;
			AddGoods(sqrt);
			var oDl1=parseInt(sqrt/5);
			Colr(oDl1);
			MoveLeft(oDl1,Page);
		}
		// 上一页点击事件
		GetId('Previous_Page').onclick=function(){
			GetId('Dg_Click_Event').innerHTML='';
			oUl.innerHTML='';
			var sqrt=Target<=5?0:add-5;
			AddGoods(sqrt);
			var oDl2=parseInt(sqrt/5);
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
				AddGoods(sqrt*5);
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
		aCol[0].style.backgroundColor='#eb6100';
		aCol[0].style.color='#fff';
		for (var e = 0; e < aCol.length; e++) {
			aCol[e].index=e;
			aCol[e].onclick=function(){
				GetId('Dg_Click_Event').innerHTML='';
				oUl.innerHTML='';
				AddGoods(this.index*5);
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
			aCol[oDl].parentNode.style.left=-(oDl-2)*25+'px';
		}
	else if(oDl<3){
		aCol[oDl].parentNode.style.left=0+'px';
	}
	else if (oDl>Page-3) {
		aCol[oDl].parentNode.style.left=-(Page-5)*25+'px';
	}
	//判断省略号什么时候消失的事件
    if(oDl>Page-5){
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
	if(a.length>=1000){
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
				aCol[q].style.backgroundColor='';
				aCol[q].style.color='#000';
			}
		aCol[iE].style.backgroundColor='#eb6100';
		aCol[iE].style.color='#fff';

	}
}
