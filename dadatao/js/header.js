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
		});
	})
})
