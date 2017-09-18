
require(["config"],function(){
	require(["jquery","header"],function($){
		$("#head").load("header.html");
		$("#head").css({position:"relative",zIndex:300});
		$("#foot").load("footer.html");
		//放大镜效果
		$(function(){
			
			$("body").on("mousemove",function(){
				//console.log($("html").scrollTop(),"ok");
			})
			$(".image").hover(function(){
				$(".magnibox").css({display:"block"});
				$(".magni").css({display:"block"});
				
				$(".image").on("mousemove",function(e){
					console.log($(".image").get(0).offsetTop-$("html").scrollTop(),e.clientY-$(".image").get(0).offsetTop-($(".magnibox").height())/2)+$("html").scrollTop();
					var magleft = e.clientX-$(".image").offset().left-$(".magnibox").get(0).offsetWidth/2;
					var magtop = e.clientY-$("html").scrollTop()-$(".image").offset().top-$(".magnibox").height()/2;
					$(".magnibox").css({left:Math.min($(".image").width()-$(".magnibox").width(),Math.max(0,magleft)),top:Math.min($(".image").height()-$(".magnibox").height(),Math.max(0,e.clientY-$("html").scrollTop()-$(".image").offset().top-($(".magnibox").height())/2))});
					$(".magni").css({backgroundPositionX:-$(".magnibox").get(0).offsetLeft*2,backgroundPositionY:-$(".magnibox").get(0).offsetTop*2});
				});
				//console.log($(".magnibox").offset().left,$(".magnibox").offset().top,e.clientX;
			},
			function(){
				$(".magnibox").css({display:"none"});
				$(".magni").css({display:"none"});
			});
		})
		
	});
});