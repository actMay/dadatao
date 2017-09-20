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
		});
	});
})
