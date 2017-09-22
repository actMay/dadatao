require(["config"],function(){
	require(["jquery","temp","header"],function($,temp){
		$("#head").load("header.html");
		$("#head").css({position:"relative",zIndex:300});
		$("#foot").load("footer.html");
		$(".sort li").on("click",function(){
			window.location.href = "../html/sort.html"+"?sort="+$(".sort li").index($(this));
		});
		var imgNum = $(".pics li").length;
		var pause = true;
		var startpage = 0;
		//轮播图
		function nextpage(){
			startpage++;
			if(startpage>=imgNum){
				$(".pics").css({left:0});
				startpage = 0;
				$(".pagePoint li").eq(startpage).css({background:"rgba(255,0,0,0.5)"}).siblings().css({background:"rgba(0,0,0,0.5)"});
			}else{
				$(".pics").css({left:-startpage*$(".pics li").eq(0).width()});
				$(".pagePoint li").eq(startpage).css({background:"rgba(255,0,0,0.5)"}).siblings().css({background:"rgba(0,0,0,0.5)"});
			}
		}
		function prevpage(){
			startpage--;
			if(startpage<0){
				$(".pics").css({left:-(imgNum-1)*$(".pics li").eq(0).width()});
				startpage = 4;
				$(".pagePoint li").eq(startpage).css({background:"rgba(255,0,0,0.5)"}).siblings().css({background:"rgba(0,0,0,0.5)"});
			}else{
				$(".pagePoint li").eq(startpage).css({background:"rgba(255,0,0,0.5)"}).siblings().css({background:"rgba(0,0,0,0.5)"});
				$(".pics").css({left:-startpage*$(".pics li").eq(0).width()});
			}
		}
		$(".leftbtn").on("click",function(e){
			prevpage();
		});
		$(".rightbtn").on("click",function(e){
			nextpage();
		});
		$(".pagePoint li").on("click",function(){
			var index = $(".pagePoint li").index($(this));
			$(this).css({background:"rgba(255,0,0,0.5)"}).siblings().css({background:"rgba(0,0,0,0.5)"});
			startpage = index;
			$(".pics").css({left:-startpage*$(".pics li").eq(0).width()});
		});
		var bannerTimer = setInterval(function(){
			if(pause){
				nextpage();
			}
		},2000);

		$line = $("<div></div>");
		$line.css({position:"absolute",left:0,top:"350px",width:"350px",height:"350px",background:"url(../img/line.png) no-repeat"});
		$line.addClass("active");
		$.ajax({
			type:"get",
			url:"./../data.json",
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
		
				
			}
		});
		
		
		onload = function(){
			$("li").on("click",function(){
				if(!!$(this).attr("index")){
					window.location.href = "./detail.html"+"?id="+$(this).attr("index");
				}
			});
			var user;
			var strlist = document.cookie.split("; ");
			for(var i=0;i<strlist.length;i++){
				if(strlist[i].split("=")[0]==="user"){
					user = strlist[i].split("=")[1];
				}
			}
			if(!!user){
				$(".noticemiddle ul").css({display:"none"});
				user =user.substring(0,3).concat("****").concat(user.substring(7,10));
				var $welcome = $("<p>欢迎您！尊敬的"+user+"用户"+"</p>");
				$(".noticemiddle").append($welcome);
				
			}else{
				$(".noticemiddle ul").css({display:"block"});
			}
			$(".banner").hover(function(){
				pause = false;
			},
			function(){
				pause = true;
			});
		}
		
		
		
	})
});