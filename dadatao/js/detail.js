
require(["config"],function(){
	require(["jquery","header"],function($){
		var timeover = false;
		$("#head").load("header.html");
		$("#head").css({position:"relative",zIndex:300});
		$("#foot").load("footer.html");
		//放大镜效果
		$(function(){
			
			$(".image").hover(function(){
				$(".magnibox").css({display:"block"});
				$(".magni").css({display:"block"});
				
				$(".image").on("mousemove",function(e){
					var magleft = e.clientX-$(".image").offset().left-$(".magnibox").get(0).offsetWidth/2;
					var magtop = e.clientY-$("html").scrollTop()-$(".image").offset().top-$(".magnibox").height()/2;
					
					$(".magnibox").css({left:Math.min($(".image img").width()-$(".magnibox").width(),Math.max(0,magleft)),
					top:Math.min($(".image img").height()-$(".magnibox").height(),Math.max(0,e.clientY+$("html").scrollTop()-$(".image").offset().top-($(".magnibox").height())/2))});
					
					$(".magni").css({backgroundPositionX:-$(".magnibox").get(0).offsetLeft*2,backgroundPositionY:-$(".magnibox").get(0).offsetTop*2});
					
				});
			},
			function(){
				$(".magnibox").css({display:"none"});
				$(".magni").css({display:"none"});
			});
			
			
			
			var remaintimer = setInterval(function(){
				
				$(".remainsecond").text(Number($(".remainsecond").text())-1);
				if(Number($(".remainsecond").text())<0){
					if(Number($(".remainminute").text())>0){
						$(".remainsecond").text(59);
						$(".remainminute").text(Number($(".remainminute").text())-1);
					}else{
						if(Number($(".remainhour").text())>0){
							$(".remainminute").text(59);
							$(".remainhour").text(Number($(".remainhour").text())-1);
						}else{
							if(Number($(".remainday").text())>0){
								$(".remainhour").text(23);
								$(".remainday").text(Number($(".remainday").text())-1);		
							}else{
								timeover = true;
								$(".proconbtn").css({background:"gray"});
								$(".proconbtn").text("活动结束");
								$(".remainsecond").text(0);
								clearInterval(remaintimer);
							}
						}
					}
				}
			},1000);
			
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
			url:"./../data.json",
			async:true,
			success:function(data){
				var nowpro;
				for(var j=0;j<data["product"].length;j++){
					if(data["product"][j]["id"]==id){
						nowpro = data["product"][j];
						break;
					}
				}
				var remainsecond = parseInt((Date.parse(nowpro["time"])- new Date().getTime())/1000);
				var showsecond = remainsecond%60;
				var remainminute = parseInt(remainsecond/60);
				var showminute = remainminute%60;
				var remainhour = parseInt(remainminute/60);
				var showhour = remainhour%24;
				var showday = parseInt(remainhour/24);
				if(remainsecond>0){
					
					$(".remainday").text(showday);
					$(".remainhour").text(showhour);
					$(".remainminute").text(showminute);
					$(".remainsecond").text(showsecond);
				}else{
					$(".remainday").text(0);
					$(".remainhour").text(0);
					$(".remainminute").text(0);
					$(".remainsecond").text(0);
					timeover = true;
					$(".proconbtn").css({background:"gray"});
					$(".proconbtn").text("活动结束");
				}
				$(".image>img").attr("src",nowpro["src"]);
				$(".magni").css({"backgroundImage":"url("+nowpro['src']+")"});
				$(".productcontent>h3").text(nowpro["name"]);
				$(".pos").text("首页>"+nowpro["sort"]+">"+nowpro["name"]);
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
				$(".price3").text(nowpro["price"][2]);
				$(".personfocus").text(nowpro["focusperson"][0]);
			}
		});
		$(".proconbtn").on("click",function(){
			if(!timeover){
				var d = new Date();
				d.setDate(d.getDate()+7);
				var val;
				var strlist = document.cookie.split("; ");
				for(var i=0;i<strlist.length;i++){
					if(strlist[i].split("=")[0]==="val"){
						val = strlist[i].split("=")[1];
					}
				}
				if(!!val){
					var produ = JSON.parse(val);
					for(var i=0;i<produ.length;i++){
						if(produ[i]["id"]==id){
							produ[i]["num"]++;
							break;
						}
						if(i==(produ.length-1)){
							produ.push({"id":id,"num":1});
							break;
						}
					}
					var str = JSON.stringify(produ);
					document.cookie="val=" + str + "; expires=" + d + "; path=/";
				}else{
					var value = [];
					var produ = {};
					produ = {
						"id" : id,
						"num" : 1
					};
					value.push(produ);
					var str = JSON.stringify(value);
					document.cookie = "val=" + str + "; expires=" + d + "; path=/";
				}
				$box = $("<div class='box'>+1</div>");
				$(".proconbtn").append($box);
				$box.animate({left:"600px",top:"-550px",width:"0px",height:"0px"},1500);
				
			}
		});
	});
});