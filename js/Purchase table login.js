window.onload=function  () {
	var lis = document.getElementsByClassName('train')[0].children[0].children;
	var divs = document.getElementsByClassName("x1");
	console.log(divs);

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