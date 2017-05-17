 

  window.onload=function (){


 var btns = document.getElementsByTagName("button");
            var divs = document.getElementById("liu_divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  // 难点
                btns[i].onclick = function(){
                    //让所有的 btn 类名清空
                    //alert(this.index);
                    for(var j=0;j<btns.length;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
                    // 当前的那个按钮 的添加 类名
                    this.className = "liu_on";
                    //先隐藏下面所有的 div盒子
                    //留下中意的那个 跟点击的序号有关系的
                    divs[this.index].className = "liu_show";//这句是把DIV和BUTTON联系起来用的，一一对应的关系
                }
            }
            // liao_in.style="color:none";
            var l1=document.getElementById('liao');
                 l1.onclick=function(){
                  l1.className="Liao";
                  liao.style=" color: rgb(235, 97, 0)";
                   liao_in.style="color:none";
                var l2=document.getElementById('liao1').style.display="block";
                var liao2=document.getElementById('liao2').style.display="none";  
                 


                  
            }
            var liao_in=document.getElementById('liao_in');
            liao_in.onclick=function(){
                liao_in.className="liao_in";
                liao_in.style="color: rgb(235, 97, 0)";
                liao.style="color:none";
                var liao2=document.getElementById('liao2').style.display="block";
                var l2=document.getElementById('liao1').style.display="none";
            }
    }

