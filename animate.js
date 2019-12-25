

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box=document.getElementById("box");
var imgsList=document.getElementById("imgs").children;
var ul1=document.getElementById("ul1").children;
var ul2=document.getElementById("ul2").children;
var ul3=document.getElementById("ul3").children;
var ul4=document.getElementById("ul4").children;
var ul5=document.getElementById("ul5").children;
var ul6=document.getElementById("ul6").children;
var ul7=document.getElementById("ul7").children;
var ul8=document.getElementById("ul8").children;
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var adv1=document.getElementById("adv1");
var imgList = document.getElementById("slider").children;
var qqSmall = document.getElementById("qqSmall");
var qq = document.getElementById("qq");
var top1 = document.getElementById("top1");
var login = document.getElementById("login");
var register = document.getElementById("register");
var mainPage = document.getElementById("mainPage");
var index=1;
var isMoving=false;
var distance = 750;
var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var scrollT = document.body.scrollTop;
var hero = document.getElementById("hero");
var hero1 = document.getElementById("hero1");
t1.onclick = function(){
	t2.style.backgroundColor="black";
	goTo(0)
	t1.style.backgroundColor="red";
}
t2.onclick = function(){
	t1.style.backgroundColor="black";
	goTo(700);
	t2.style.backgroundColor="red";
}
goTo = function(target){
    var scrollT = document.body.scrollTop|| document.documentElement.scrollTop;
    if (scrollT > target) {
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop
            var step = Math.floor(-scrollT/6);
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
            if(scrollT <= target){
                document.body.scrollTop = document.documentElement.scrollTop = target;
                clearTimeout(timer);
            }
        },20)
    }
    else if(scrollT == 0){
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop|| document.documentElement.scrollTop
            var step = Math.floor(300/3*0.7);
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
            console.log(scrollT);
            if(scrollT >= target){
                document.body.scrollTop = document.documentElement.scrollTop = target;
                clearTimeout(timer);
            }
        },20)
    }
    else if(scrollT < target){
        var timer = setInterval(function(){
            var scrollT = document.body.scrollTop;
            var step = Math.floor(scrollT/6);
            document.documentElement.scrollTop = document.body.scrollTop = step + scrollT;
            if(scrollT >= target){
                document.body.scrollTop = document.documentElement.scrollTop = target;
                clearTimeout(timer);
            }
        },20)
    }
    else if(target == scrollT){
        return false;
    }
}

//最上面移动的文字，左边移过去的部分隐藏 ,定期执行
setInterval(function(){
    adv1.style.left = distance + "px";
    distance--;
    if(distance<-300){
        distance=750;
    }
}, 10);

login.onclick = function(){
	window.open("login/web.html","_blank","width=600px,height=500px,left=400px,top=150px");
}
register.onclick = function(){
	window.open("login/zhuce.html","_blank","width=600px,height=500px,left=400px,top=150px");
}
qqSmall.onmouseover = function(){
	qq.style.display ="block";
}

qq.onmouseout = function(){
	qq.style.display ="none";
}

top1.onclick = function (){
	goTo(0);
}
mainPage.onclick = function(){
	goTo(700);
}

function next(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index++;         //这句话必须在navChange();
	imgChange();
	animate(slider,{left:-1200*index},function(){
		if(index==6){
			slider.style.left="-1200px";
			index=1;
		}
		isMoving=false;
	});
}
	
function prev(){
	if(isMoving){
         return;
     }
     isMoving=true;
     index--;
     imgChange();
     	animate(slider,{left:-1200*index},function(){
     		if(index===0){
     			slider.style.left="-6000px";
     			index=5;
     		}
     		isMoving=false;
    });
}

for(var i = 0;i<imgList.length;i++){
	if(i == 1){
	imgList[i].onclick = function(){
			window.open("change/index1.html","_blank");
		}	
	}
}
console.log(ul1.length);  //2
for(var i = 0;i<ul1.length;i++){
	//循环结束,i=1
	ul1[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul2[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul3[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul4[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul5[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul6[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul7[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}
	ul8[i].onclick = function(){
			window.open("change/index1.html","_blank");
	}	
}
var timer=setInterval(next,3000);  //设定轮播

box.onmouseover=function(){
	clearInterval(timer); //让页面停止
}
box.onmouseout=function(){
	timer=setInterval(next,3000);
}


for(var i=0;i<imgsList.length;i++){      //必须通过绝对定位显示出来，否则会被盖住
	imgsList[i].idx=i;     //找到每个节点的属性i
	imgsList[i].onclick=function(){
		index=this.idx+1;
		imgChange();
		animate(slider,{left:-1200*index});
	}
}


function imgChange(){
	for(var i=0;i<imgsList.length;i++){
		imgsList[i].className="";
	} 
	if(index==6){
		imgsList[0].className="active1";	
	}
	else if(index==0){
		imgsList[4].className="active1";		
	}
	else{
		imgsList[index-1].className="active1";
	}
}

hero.onclick = function(){
	hero1.style.display = "block";
}
console.log(hero1);

hero1.onmouseout = function(){
	hero1.style.display = "none";
}



