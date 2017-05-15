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
	// var nav = document.getElementsByClassName("top_bg")[0];
	// window.onscroll = function () 
	// {
	// 	if (scroll().top >=500) 
	// 	{
	// 		nav.style.backgroundColor = "rgba(0,0,0,0.7)";
	// 	}
	// 	else{
	// 		nav.style.backgroundColor = "rgba(0,0,0,0.4)";
	// 	}
	// }
    

    // 3 申请服务 退款 类型
    var _circle = document.getElementsByClassName("sub_circle");
    // console.log(_circle);

    for (var i = 0; i < _circle.length; i++) 
    {
        _circle[i].onclick = function (argument) 
        {
            this.className = "circle-b";
        }
    }
    


    // 4 左 退款日期
    function date() 
    {   
        // 4.1 获取
        var time = document.getElementById("time");
        
        // 4.2 时间函数
        var date=new Date();
        var year=date.getFullYear();
        
        // 月
        var month=date.getMonth();
        var mon = ["01","02","03","04","05","06","07","08","09","10"];

        // 日
        var dat =date.getDate();
        var Dat = ["01","02","03","04","05","06","07","08","09","10"];

        // 星期
        var day=date.getDay();
        var Days=["星期日","星期一","星期二","星期三","星期四","星期五"];

        var hours=date.getHours();
        var min = date.getMinutes();
        var seconds=date.getSeconds();

        // 4.3 构造内容
        var text="退款时间："+year+"年"+mon[month]+"月"+dat+"日"+"  &nbsp;&nbsp;"+hours+"时"+min+"分"+seconds+"秒";
        
        // 赋内容
        time.innerHTML =text;
    }
    // 4.4 调用
    var Time = setInterval(function () 
    {
        date();
    },1000);

    // 4.5 停止
    var account = document.getElementById("account");
    // console.log(account);
    
    account.onclick = function (argument) 
    {
        clearInterval(Time);
        date();
        this.className = "circle-b";
    } 


    // 5 提交申请

    var awaiting = document.getElementById("await");
    var submit = document.getElementById("submit");
    submit.onclick = function () 
    {
        awaiting.className = "circle-b";
    } 
}