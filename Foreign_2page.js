function GetId(id){
 	return document.getElementById(id);
 }
	 function  GetJson() {
	 	var ojson=[];
	 	for(var i=0;i<40;i++){
	 		var q={
	 			'img':'img/FL_page/content_15.png',
                'business':'多日游'+i,
                'ProductIntroduction':'<澳大利亚>大碉堡 带你领略海底世界',
                'SurplusGoods':' ¥988',
                'GoodsPrice':'立即购买',
                'place':'机票 &nbsp;&nbsp;&nbsp;香港-澳大利亚 堪培拉',
                'Thing':'15065 次浏览 1 件 已售',
                'quanguo':'全国多地往返澳大利亚黄金海岸+凯恩斯9天往返含税机票(香港转机/可配多地联运)',
                'RGB':'98元起',
                'R':'988元',
                'hre':'——',
                'Time':'旅行时间：2016/09-2016/09',  
	 		}
	 		ojson.push(q);
	 	}
	 	return function (){
	 		return ojson;
	 	}
	 }
     window.onload=function (){
     	(function AddGoods(add){
     		//闭包调出JSON
     		var ajson=GetJson()();
     		var Lis=GetId('liu_JSON');
     		//底部点击事件
     		var Target=add+4>ajson.length?ajson.length:add+4;
     		var q=0;
     		for(var j=add;j<Target;j++){
     			var li=document.createElement('li');
     			var sub_div=document.createElement('div');
     			var spans=document.createElement('span');
     			q++;
     			//添加内容部分开始
     			Create(li,'liu_Img','img',ajson[j].img);
                Create(li,'liu_span','span',ajson[j].business);
                Create(li,'liu_span_bottom','span',ajson[j].ProductIntroduction);
                Create(li,'liu_span_bottom1','sapn',ajson[j].SurplusGoods);
                Create(spans,'liu_jsonRight1','span',ajson[j].place);
                Create(spans,'liu_jsonRight2','span',ajson[j].Thing);
                Create(spans,'liu_jsonRight3','span',ajson[j].quanguo);
                Create(spans,'liu_jsonRight4','span',ajson[j].RGB);
                Create(spans,'liu_jsonRight5','span',ajson[j].R);
                Create(spans,'liu_jsonRight6','span',ajson[j].hre);
                Create(spans,'liu_jsonRight7','span',ajson[j].Time);
                Create(spans,'liu_jsonRight8','span',ajson[j].GoodsPrice);

                 sub_div.className="liu_jsonRight";
                 Lis.appendChild(sub_div);
                 sub_div.appendChild(spans);
                 Lis.appendChild(li);
                
     		}

     		//底部点击页面跳转部分开始
     		//创建li并插入ol元素中
     		//创建li并插入ol元素中
        var Page=Math.ceil(ajson.length/4);
        GetId('Dg_Click_Event').style.width=(Page+1)*30+'px';
        GetId('Dg_Click_Event').style.height=30+'px';
        if (Page>=6) {
            GetId('Dg_Click_Event').parentNode.style.width=6.2*30 +'px';
            GetId('Dg_Click_Event').parentNode.style.overflow='hidden';
            
        }
        else{
            GetId('Dg_Click_Event').parentNode.style.width=(Page+1)*30+'px';
        }
        GetId('Dg_Click_Event').style.position='relative';

        
        for(var i=0;i<Page;i++){
            var al=document.createElement('li');
            al.innerHTML=i+1;
            al.className='Dg_Col';
            GetId('Dg_Click_Event').appendChild(al);
            
        }
        //给元素内容标识   共Page页   内容
           //尾页跳转按钮
         GetId('Dg_Page').onclick=function (){
            GetId('Dg_Click_Event').innerHTML='';
            Lis.innerHTML='';
            GetId('Next_Page').onclick=null;
            var sqrt=Target=36;
            AddGoods(sqrt);
            var oDl1=parseInt(sqrt/4);
            Colr(oDl1);
            MoveLeft(oDl1,Page);
            
         }
        // 下一页点击事件
        GetId('Next_Page').onclick=function(){
            GetId('Dg_Click_Event').innerHTML='';
            Lis.innerHTML='';

            var sqrt=Target==ajson.length?add:Target;
            AddGoods(sqrt);
            var oDl1=parseInt(sqrt/4);
            Colr(oDl1);
            MoveLeft(oDl1,Page);

        }
        
        //省略号消失的原因


        //首页点击事件
        GetId('liu_firstPage').onclick=function (){
            GetId('Dg_Click_Event').innerHTML='';
            Lis.innerHTML='';
            var sqrt=Target=0;
            AddGoods(sqrt);
            var oDl2=parseInt(sqrt/4);
            Colr(oDl2);
            MoveLeft(oDl2,Page);
            GetId('Previous_Page').onclick=null;
             
            
        }
        // 上一页点击事件
        GetId('Previous_Page').onclick=function(){
            GetId('Dg_Click_Event').innerHTML='';
            Lis.innerHTML='';
            GetId('liu_firstPage').onclick=null;
            GetId('Next_Page').onclick=null;
            var sqrt=Target<=4?0:add-4;
            AddGoods(sqrt);
            var oDl2=parseInt(sqrt/4);
            Colr(oDl2);
            MoveLeft(oDl2,Page);
        }
        //输入框确认 点击事件事件
        GetId('Page').onblur=function(){
            var NewPage=parseInt(GetId('Page').value);
            if(NewPage){
                GetId('Dg_Click_Event').innerHTML='';
                Lis.innerHTML='';
                var sqrt=NewPage-1;
                sqrt=sqrt<0?0:sqrt;
                sqrt=sqrt>Page-1?Page-1:sqrt;
                AddGoods(sqrt*4);
                Colr(sqrt);
                MoveLeft(sqrt,Page);
            }
        }

        //循环添加 网页的链接
        var oClickImg=document.getElementsByClassName('Dg_Sort_Img');
        var oClickP=document.getElementsByClassName('Dg_Span_P');
        var oClickB=document.getElementsByClassName('Dg_Span_B');
        for (var i = 0; i < oClickImg.length; i++) {
            oClickP[i].onclick=oClickImg[i].onclick=function(){
                window.location = ajson[i].Url;
            }
            oClickB[i].onclick=function(){
                window.location = ajson[i].aUrl;
            }
        }
        //页码点击切换切换页面
        var aCol=document.getElementsByClassName('Dg_Col');
        // aCol[0].style.backgroundColor='#CD3D41';
        aCol[0].style.height=30+'px';
        aCol[0].style.width=30+'px';
        aCol[0].style.border='1px solid #313031';
        aCol[0].style.borderRadius='5px';
        // aCol[0].style.color='#000000';
        for (var e = 0; e < aCol.length; e++) {
            aCol[e].index=e;
            aCol[e].onclick=function(){
                GetId('Dg_Click_Event').innerHTML='';
                Lis.innerHTML='';
                AddGoods(this.index*4);
                Colr(this.index);
                MoveLeft(this.index,Page);
            }
        }
 
 
     	})(0);
     }

     //封装点击切换页码时的移动距离
    function MoveLeft(oDl,Page){
    var aCol=document.getElementsByClassName('Dg_Col');
    if (oDl>3&&oDl<Page-3) {
            aCol[oDl].parentNode.style.left=-(oDl-2)*30+'px';
        }
    else if(oDl<3){
        aCol[oDl].parentNode.style.left=0+'px';
    }
    else if (oDl>Page-3) {
        aCol[oDl].parentNode.style.left=-(Page-6)*30+'px';
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
                aCol[0].style.height='30px';
                aCol[0].style.width='30px';
                aCol[0].style.border='';
            }
            aCol[iE].style.height='30px';
            aCol[iE].style.width='30px';
            aCol[iE].style.border='1px solid #313031';
            aCol[iE].style.borderRadius='5px';
            // aCol[iE].style.marginLeft="1px";
            // aCol[iE].style.backgroundColor='#CD3D41';
        // aCol[iE].style.color='#FEFEFE';
    }
}


