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
    
    


}