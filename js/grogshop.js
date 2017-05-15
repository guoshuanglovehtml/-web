window.onload = function () 
{   
	// 1导航切换 
	var nav_as = document.getElementsByClassName('nav')[0].children;
	for (var i = 0; i < nav_as.length; i++) 
	{
		nav_as[i].onclick = function (argument) 
		{
			for (var i = 0; i < nav_as.length; i++) 
			{
				nav_as[i].className = "";
			}

			this.className = "grogshop";
		}
	}


	// 2导航
	var nav = document.getElementsByClassName("top_bg")[0];
	window.onscroll = function () 
	{
		if (scroll().top >=500) 
		{
			nav.style.backgroundColor = "rgba(0,0,0,0.7)";

		}
		else{
			nav.style.backgroundColor = "rgba(0,0,0,0.4)";

		}
	}



	// 3国内外酒店管理  状态切换
	var in_out = document.getElementsByClassName("L_title")[0].children;
	// console.log(in_out);
	var message = document.getElementsByClassName("message");
	for (var i = 0; i < in_out.length; i++) 
	{
		in_out[i].index = i ;
		in_out[i].onclick = function (argument) 
		{
			for (var i = 0; i < in_out.length; i++) 
			{
				in_out[i].className = "";
				message[i].style.display = "none";
			}
			this.className = "out";
			message[this.index].style.display = "block";
		}
	}


	// 4国内酒店 搜索历史

	// 目的地输入框2个
	var his_input = document.getElementsByClassName("his_input");
	// 搜索历史按钮 2个
	var history = document.getElementsByClassName("history");
	// 搜索按钮2个
	var seach = document.getElementsByClassName("seach");
	// 存放历史记录的ul 2个 
	var tory_ul = document.getElementsByClassName("tory_ul");
    
    // 历史记录框显示
    for (var i = 0; i < history.length; i++) 
    {
    	history[i].index = i;
    	history[i].addEventListener("click",function () 
    	{   
    		var event = event || window.event;
    		event.stopPropagation();
    		// 取消进一步的捕获或冒泡
    		
    		tory_ul[this.index].style.display == "none" ?
		    tory_ul[this.index].style.display = "block" : 	
		    tory_ul[this.index].style.display = "none" ;
    	},false);
    }
    
    // 5
    // 隐藏历史记录输入框  关于酒店最大父元素 左部分
    var c_left = document.getElementsByClassName("c_left")[0];
    c_left.addEventListener("click",function (event) 
    {
    	var event = event || window.event;
    	tory_ul[0].style.display = "none" ;
    	tory_ul[1].style.display = "none" ;
    },false);
    
    // 6
    // 生成历史
    for (var i = 0; i < seach.length; i++) 
    {
    	seach[i].index = i;
    	seach[i].onclick = function () 
	    {   
	    	// 6.1
	    	var that;
	    	if (his_input[this.index].value!="") 
	        {   
	        	// 创建
                var li = document.createElement("li");
                // 赋值
		        li.innerHTML = his_input[this.index].value;
                
                // 最新记录最新显示
		        var Lis = tory_ul[this.index].children;
		        if (Lis.length==0) 
		        {
		        	tory_ul[this.index].appendChild(li);
		        }
		        else{
		        	tory_ul[this.index].insertBefore(li,Lis[0]);
		        }	        
                
                // 点击搜索跳转后 清空搜索框
		        his_input[this.index].value="";

		        that = this.index;
		        console.log(that);
	        }
            
            // 6.2
		    // 点击记录、 重新搜索
	        var lis = tory_ul[this.index].children;
	        // console.log(lis);
	        for (var i = 0; i < lis.length; i++) 
	        {
		        lis[i].onclick = function () 
		        {  
		           // 把记录重新赋给输入框  然后隐藏记录
			       his_input[that].value = this.innerHTML;
			       // tory_ul[that].style.display = "none" ;
		        }
	        }
	    }
    }
	
    
    


}