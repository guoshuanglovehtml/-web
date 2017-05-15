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
    

    // 3 备注 右 多行文本框
    var message = document.getElementById("message");
    // console.log(message);

    // 剩余字数
    var remLen = document.getElementById("remLen");
    // console.log(remLen);

    message.onkeyup=function() 
    {
        if (this.value.length > 1000) 
        {
          this.value = this.value.substring(0, 1000); 
        } 
        else 
        {  
            remLen.innerHTML = 1000 - this.value.length + "/" +1000;  
        } 
    } 


    // 4 左 使用日期
    function date() 
    {   
        // 4.1 获取文本框  盒子
        var dates = document.getElementsByClassName("date_s")[0];
        var dats = dates.children[0];
        var days = dates.children[1];
        
        // 4.2 时间函数
        var date=new Date();

        var year=date.getFullYear();
        
        // 月
        var month=date.getMonth();
        var mon = ["01","02","03","04","05","06","07","08","09","10"];

        // 日
        var dat =date.getDate();
        var Dat = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14",
                  "15","16","17","18","19"];

        // 星期
        var day=date.getDay();
        var Days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"];

        // 4.3 构造内容
        dats.innerHTML = year+"-"+mon[month]+"-"+Dat[dat-1];
        days.innerHTML = Days[day];
    }
    // 4.4 调用
    setInterval(function () 
    {
        date();
    },1000);


    // 5 左 ：套餐名  酒店户型   具体内容的显示或隐藏
    var combo = document.getElementsByClassName("combo")[0];
    var hou_type = document.getElementsByClassName("house_type")[0];

    combo.onmouseover = function () 
    {
        this.children[0].style.display = "block";
    }

    combo.onmouseout = function () 
    {
        this.children[0].style.display = "none";
    }

    hou_type.onmouseover = function () 
    {
        this.children[0].style.display = "block";
    }

    hou_type.onmouseout = function () 
    {
        this.children[0].style.display = "none";
    }



    // 6 右 ：同意 支付  影响订购 流程
    // 6.1 获取 支付按钮  和 订购须知
    var button = document.getElementsByClassName("pay")[0].children[0];
    var attention = document.getElementsByClassName("attention")[0];
    
    // 6.2 获取 订购 流程
    var Li_3 = document.getElementById("flow_ul").children[2];
    
    // 6.3 按钮操作
    button.onclick = function () 
    {   
        // 判断条件
        button.innerHTML == "同意以下条款，在此付款"?
        goPay() : back() ;
        
        // 换订购须知内容  按钮内容    订购流程变化
        function goPay(argument) 
        {   
            // 判断条件   微信号 是否正确 由26个英文字母的小写组成的字符串
            var tel = /^[a-z_\d]+$/;
            var This = contact.children[3].children[0];
            if(!tel.test(This.value))
            {
                This.value = '微信号不正确';
                This.onfocus = function (argument) 
                {
                    This.value = "";
                }
            }
            else if(This.value=="")
            {
                This.value = '微信号不可为空';
                This.onfocus = function (argument) 
                {
                    This.value = "";
                }
            }

            // 换订购须知内容  变成支付方式
            else
            {
                var img = document.createElement("img");
                img.src="img/grogshop_pay/07.png";
                attention.appendChild(img);
            
                // 按钮内容变化
                button.innerHTML = "返&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回";
            
                // 订购流程变化
                Li_3.children[0].className = "L_item1";
                Li_3.children[1].className = "L_item2";
                Li_3.children[2].style.color = "#000";
            }
        }

        // 恢复默认
        function back(argument) 
        {   
            var img = attention.children[2];
            img.remove();

            button.innerHTML = "同意以下条款，在此付款";

            Li_3.children[0].className = "item1";
            Li_3.children[1].className = "item2";
            Li_3.children[2].style.color ="";
        }

    }

    // 7 右：  联系信息
    var contact = document.getElementsByClassName("contact_s")[0];

    // 7.1 获取信息元素
    var name = contact.children[0].children[0];
    var tele = contact.children[1].children[0];
    var email = contact.children[2].children[0];
    var overseas_weixin = contact.children[3].children[0];

    // 7.2 操作
    // 姓名/\u4E00-\u9FA5/
    
    name.onblur = function () 
    {
        var tel = /\u4E00-\u9FA5$/;
        if(!tel.test(this.value))
        {
            this.value = '姓名不正确';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
        else if(this.value=="")
        {
            this.value = '姓名不可为空';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
    }

    // 手机号
    tele.onblur= function () 
    {
        var tel = /1[3|4|5|7|8][0-9]\d{8}$/;
        if(!tel.test(this.value))
        {
            this.value = '手机号不正确';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
        else if(this.value=="")
        {
            this.value = '手机号不可为空';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
    }

    // 邮箱
    email.onblur = function () 
    {
       isEmail(this);
    }

    function isEmail(This) 
    {  
        var tel = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!tel.test(This.value))
        {
            This.value = '邮箱不正确';
            This.onfocus = function (argument) 
            {
                This.value = "";
            }
        }
        else if(This.value=="")
        {
            This.value = '邮箱不可为空';
            This.onfocus = function (argument) 
            {
                This.value = "";
            }
        }
    }  

    // 境外微信  由26个英文字母的小写组成的字符串
    // ^[a-z_\d]+$
    overseas_weixin.onblur =function () 
    {
        var tel = /^[a-z_\d]+$/;
        if(!tel.test(this.value))
        {
            this.value = '微信号不正确';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
        else if(this.value=="")
        {
            this.value = '微信号不可为空';
            this.onfocus = function (argument) 
            {
                this.value = "";
            }
        }
    }


}