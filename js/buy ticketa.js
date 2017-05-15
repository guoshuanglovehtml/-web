window.onload=function  (argument) {
	var lis = document.getElementsByClassName('project')[0].children[0].children;
	var divs = document.getElementsByClassName("common");
	for (var i = 0; i < lis.length; i++) 
	{   
		lis[i].index = i ;
		lis[i].onclick = function  () 
		{
			for (var i = 0; i < lis.length; i++) 
			{
				divs[i].style.display = "none";
			};

			divs[this.index].style.display = "block";
		}
	}

}