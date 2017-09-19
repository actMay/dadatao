
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
					var magleft = e.clientX-$(".image").offset().left-$(".magnibox").get(0).offsetWidth/2;
					var magtop = e.clientY-$("html").scrollTop()-$(".image").offset().top-$(".magnibox").height()/2;
					$(".magnibox").css({left:Math.min($(".image").width()-$(".magnibox").width(),Math.max(0,magleft)),
					top:Math.min($(".image").height()-$(".magnibox").height(),Math.max(0,e.clientY+$("html").scrollTop()-$(".image").offset().top-($(".magnibox").height())/2))});
					$(".magni").css({backgroundPositionX:-$(".magnibox").get(0).offsetLeft*2,backgroundPositionY:-$(".magnibox").get(0).offsetTop*2});
				});
			},
			function(){
				$(".magnibox").css({display:"none"});
				$(".magni").css({display:"none"});
			});
			
			
		})
		
		
		$(".talkhead li").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active");
			var sort = $(".talkhead li").index($(this));
			$(".talk>div").eq(sort).css({display:"block"}).siblings().css({display:"none"});
			$(this).parent().css({display:"block"});	
		})
		var correctId = /id=\w{4}/;
		var id = window.location.href.match(correctId)[0].substr(3,6);
		$.ajax({
			type:"get",
			url:"../data.json",
			async:true,
			success:function(data){
				var nowpro;
				for(var j=0;j<data["product"].length;j++){
					if(data["product"][j]["id"]==id){
						nowpro = data["product"][j];
						break;
					}
				}
				$(".image>img").attr("src",nowpro["src"]);
				$(".magni").css({"backgroundImage":"url("+nowpro['src']+")"});
				$(".productcontent>h3").text(nowpro["name"]);
				$(".pri span").eq(0).text(nowpro["price"][0]);
				$(".pri span").eq(1).text(nowpro["price"][1]);
				$(".pri span").eq(2).text(nowpro["price"][2]);
				$(".about span").eq(1).text(nowpro["shop"]);
				$(".about span").eq(2).text(nowpro["sort"]);
				$(".popular span").eq(0).text(nowpro["focusperson"][0]);
				$(".popular span").eq(1).text(nowpro["focusperson"][1]);
				$(".popular span").eq(2).text(nowpro["focusperson"][2]);
				$(".popular span").eq(3).text(nowpro["focusperson"][3]);
				for(var i=0;i<nowpro["grade"];i++){
					var $grade = $("<img src='../img/xinn.png'/>");
					$(".about span").eq(3).append($grade);
				}
				$(".about span").append()
				$(".about span").eq(4).text(nowpro["activities"]);
				$(".shopsave span").text(nowpro["bail"]);
				$(".price2").text(nowpro["price"][1]);
				$(".price3").text(nowpro["price"][2])
			}
		});
		
		
	});
});