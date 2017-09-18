require(["config"],function(){
	require(["jquery","temp","header"],function($,temp){
		$("#head").load("header.html");
		$("#head").css({position:"relative",zIndex:300});
		$("#foot").load("footer.html");
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
		for(var i=0;i<10;i++){
			$li = $("<li></li>");
			$img = $("<img>");
			$p = $("<p>");
			$div = $("<div>");
			$img.attr("src","../img/new"+i+".jpg");
			$p.text("送小收纳盒做的先加");//json添加内容
			$div.addClass("newestProductbtn");
			$div.text("免费试用");
			$span1 = $("<span>");
			$span1.text("￥14");
			$span1.addClass("price");
			$span2 = $("<span>");
			$span2.text("仅剩3件");
			$span2.addClass("proNum");
			$li.append($img);
			$li.append($p);
			$li.append($span1);
			$li.append($span2);
			$li.append($div);
			$(".newestProduct>ul").append($li);
		}
		$line = $("<div>");
		$line.css({position:"absolute",left:0,top:"350px",width:"350px",height:"350px",background:"url(../img/line.png) no-repeat"});
		$line.addClass("active");
		$(".clothes").get(0).innerHTML+=temp("productTemp");
		$(".daily").get(0).innerHTML+=temp("productTemp");
		$(".fashion").get(0).innerHTML+=temp("productTemp");
		$(".athlete").get(0).innerHTML+=temp("productTemp");
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
		
		
		
		
		
	})
});