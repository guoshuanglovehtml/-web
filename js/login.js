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



	// 3 登录方式  状态切换
	var ways = document.getElementsByClassName("way")[0].children;
	// console.log(way);
	var login_bg = document.getElementsByClassName("login_bg");
	// console.log(login_bg);
	for (var i = 0; i < ways.length; i++) 
	{
		ways[i].index = i ;
		ways[i].onclick = function (argument) 
		{
			for (var i = 0; i < login_bg.length; i++) 
			{
				ways[i].style.borderBottom = "none";
				login_bg[i].style.display = "none";
			}
			this.style.borderBottom = "3px #eb6100 solid";
			login_bg[this.index].style.display = "block";
		}
	}


	// 4 ID 输入框 2个  账号 手机号
	var IDs = document.getElementsByClassName("ID");
	// console.log(IDs);
	for (var i = 0; i < IDs.length; i++) 
	{   
		IDs[i].onfocus=function()
		{
            this.removeAttribute("placeholder");
        }

        IDs[i].onkeyup=function(){}

		IDs[i].onblur=function()
		{
		    var tel = /1[3|4|5|7|8][0-9]\d{8}$/;
		    if(!tel.test(this.value))
		    {
                this.value = '手机号或账号不正确';
                this.onfocus = function (argument) 
                {
                    this.value = "";
                }
            }
            else if(this.value=="")
            {
                this.placeholder = '手机号或账号不可为空';
            }
        }
	}
    
    // 5 密码输入框 2个  密码 验证码
    var passwords = document.getElementsByClassName("password");
    for (var i = 0; i < passwords.length; i++) 
    {   
    	passwords[i].index = i;
    	passwords[i].onfocus=function()
    	{   
            if(IDs[this.index].value=="")
            {
                IDs[this.index].placeholder = '手机号或账号不可为空';

                // IDs[this.index].onfocus = function (argument) 
                // {
                //     IDs[this.index].value = "";
                // }
            }
        }

        passwords[i].onblur=function()
        {
            if(this.value=="")
            {   
            	this.type = "text";
                this.placeholder='密码不可为空';

                this.onfocus = function (argument) 
            	{   
            	    this.value=="";
            		this.type = "password";
            	}
            }
            // this.setAttribute("placeholder");
            else if (this.value!="")
            {   
            	this.onfocus = function (argument) 
            	{   this.value=="";
            		this.type = "password";
            	}
            	
                // this.placeholder='请输入确认密码';
            }
            
        }

    }

    // 6 其他登录方式 2种   用户名  境外手机号
    var other_logins = document.getElementsByClassName("other_login");
    // console.log(other_logins);
    var _number = document.getElementsByClassName("account_number")[0];
    var chit = document.getElementsByClassName("chit")[0];

    var user_name = document.getElementsByClassName("login")[0].children[0];
    // console.log(user_name);

    for (var i = 0; i < other_logins.length; i++) 
    {
    	other_logins[i].onclick = function (argument) 
    	{
    		_number.innerHTML = "用户名登录";
    		chit.innerHTML = "境外手机登录";

    		user_name.placeholder = "用户名";
    	}
    }

    // 7 注册

    var  registers = document.getElementsByClassName("register");
    var way = document.getElementsByClassName("way")[0];
    for (var i = 0; i < registers.length; i++) 
    {   
    	registers[i].index = i ;
     	registers[i].onclick = function (argument) 
     	{
     		way.innerHTML = "新 用 户 注 册";
     		way.style.textAlign = "center";

     		IDs[this.index].placeholder = "手机号";
     		passwords[this.index].placeholder = "短信验证码";
     	}
    } 

    // 8 关闭 弹框
    var close = document.getElementsByClassName("close")[0];
    console.log(close);
    console.log();
    close.onclick = function (argument) 
    { 
    	this.parentNode.parentNode.style.display = "none";
    }

}