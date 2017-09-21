define(["header"],function(){
	require(["jquery"],function($){
		$(function(){
			$(".qq").on("click",function(){
				$(".qqhelp").css({display:"block"});
			});
			
			$(".delqqhelp").on("click",function(e){
				$(".qqhelp").css({display:"none"});
				e.stopPropagation();
			});
			$(".backtop").on("click",function(){
				$("html").scrollTop(0);
			});
			$(".hmcon>img").on("click",function(){
				//返回首页
				window.location.href="../html/index.html";
			});
			$(".hmcon button").on("click",function(){
				window.location.href="../html/cart.html";
			});
			var username;
			var strlist = document.cookie.split("; ");
			for(var i=0;i<strlist.length;i++){
				if(strlist[i].split("=")[0]=="user"){
					username = strlist[i].split("=")[1];
					$(".out").remove();
					$logout = $("<li class='fl'><a href='../html/login.html'>退出登录<a></li>")
					$(".top li").eq(0).after($logout);
				}
			}
			
		});
	});
})
