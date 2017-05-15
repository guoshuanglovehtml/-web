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


	// 2 导航随滚动变化
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
    

    // 3 申请服务 退款 类型
    var returns = document.getElementsByClassName("return")[0].children;
    console.log(returns);

    for (var i = 0; i < returns.length; i++) 
    {
        returns[i].onclick = function (argument) 
        {
            for (var i = 0; i < returns.length; i++) 
            {
                returns[i].style.border="";
            }
            this.style.border = "2px red solid";
        }
    }
    


    // 4 左 使用日期
    // function date() 
    // {   
    //     // 4.1 获取文本框  盒子
    //     var dates = document.getElementsByClassName("date_s")[0];
    //     // var dats = dates.children[0];
    //     // var days = dates.children[1];
        
    //     // 4.2 时间函数
    //     var date=new Date();

    //     var year=date.getFullYear();
        
    //     // 月
    //     var month=date.getMonth();
    //     var mon = ["01","02","03","04","05","06","07","08","09","10"];

    //     // 日
    //     var dat =date.getDate();
    //     var Dat = ["01","02","03","04","05","06","07","08","09","10"];

    //     // 星期
    //     var day=date.getDay();
    //     var Days=["星期日","星期一","星期二","星期三","星期四","星期五"];

    //     // 4.3 构造内容
    //     dats.innerHTML = year+"-"+mon[month]+"-"+Dat[dat-1];
    //     days.innerHTML = Days[day];
    // }
    // // 4.4 调用
    // setInterval(function () 
    // {
    //     date();
    // },1000);


   
}