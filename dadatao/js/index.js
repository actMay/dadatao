require(["config"],function(){
	require(["jquery","temp","header"],function($,temp){
		$("#head").load("header.html");
		$("#head").css({position:"relative",zIndex:300});
		$("#foot").load("footer.html");
		//轮播图
		var bannerTimer = setInterval(function(){
			
			$(".banner>ul li").css({width:"927px",height:"420px"});
			if(parseInt($(".banner>ul").css("left"))<=-927){
				$(".banner>ul").css({left:"-45px"});
				//$(".banner>ul li").animate({width:"837px",height:"380px"},2000);
			}else{
				
				$(".banner>ul").css({left:"-927px"});
				
				//$(".banner>ul li").animate({width:"837px",height:"380px"},2000);
			}
			
		},4000);

		$line = $("<div></div>");
		$line.css({position:"absolute",left:0,top:"350px",width:"350px",height:"350px",background:"url(../img/line.png) no-repeat"});
		$line.addClass("active");
		$.ajax({
			type:"get",
			url:"../data.json",
			async:true,
			success:function(data){
				$(".clothes").get(0).innerHTML+=temp("productTemp",data);
				$(".daily").get(0).innerHTML+=temp("productTemp",data);
				$(".fashion").get(0).innerHTML+=temp("productTemp",data);
				$(".athlete").get(0).innerHTML+=temp("productTemp",data);
				$(".newestProduct>ul").find("li").append($line);
				$(".clothes").find("li").append($line);
				$(".daily").find("li").append($line);
				$(".fashion").find("li").append($line);
				$(".athlete").find("li").append($line);
				$(".newestProduct>ul").find("li").hover(function(){
					if(!!$(this).find(".active")){
						$(this).append($line);
					}
					$(this).find(".active").css({left:0,top:"350px"}).stop().animate({top:"-350px"},1000);
				},
				function(){
					$(this).find(".active").css({left:0,top:"350px"});
					
				});
				$(".clothes").find("li").hover(function(){
					if(!!$(this).find(".active")){
						$(this).append($line);
					}
					$(this).find(".active").css({left:0,top:"350px"}).stop().animate({top:"-350px"},1000);
				},
				function(){
					$(this).find(".active").css({left:0,top:"350px"});
					
				});
				$(".daily").find("li").hover(function(){
					if(!!$(this).find(".active")){
						$(this).append($line);
					}
					$(this).find(".active").css({left:0,top:"350px"}).stop().animate({top:"-350px"},1000);
				},
				function(){
					$(this).find(".active").css({left:0,top:"350px"});
					
				});
				$(".fashion").find("li").hover(function(){
					if(!!$(this).find(".active")){
						$(this).append($line);
					}
					$(this).find(".active").css({left:0,top:"350px"}).stop().animate({top:"-350px"},1000);
				},
				function(){
					$(this).find(".active").css({left:0,top:"350px"});
					
				});
				$(".athlete").find("li").hover(function(){
					if(!!$(this).find(".active")){
						$(this).append($line);
					}
					$(this).find(".active").css({left:0,top:"350px"}).stop().animate({top:"-350px"},1000);
				},
				function(){
					$(this).find(".active").css({left:0,top:"350px"});
					
				});
				
				for(var i=0;i<10;i++){
					$li = $("<li></li>");
					$img = $("<img>");
					$p = $("<p>");
					$div = $("<div>");
					$img.attr("src","../img/new"+i+".jpg");
					$p.text(data["product"][i]["name"]);//json添加内容
					$div.addClass("newestProductbtn");
					$div.text("免费试用");
					$span1 = $("<span>");
					$span1.text(data["product"][i]["price"][0]);
					$span1.addClass("price");
					$span2 = $("<span>");
					$span2.text("仅剩"+data["product"][i]["num"]+"件");
					$span2.addClass("proNum");
					$li.append($img);
					$li.append($p);
					$li.append($span1);
					$li.append($span2);
					$li.append($div);
					$li.attr("index",data["product"][i]["id"]);
					$(".newestProduct>ul").append($li);
				}
//		
				
			}
		});
		
		
		onload = function(){
			$("li").on("click",function(){
				if(!!$(this).attr("index")){
					window.location.href = "../html/detail.html"+"?id="+$(this).attr("index");
				}
			});
		}
		
		
		
	})
});