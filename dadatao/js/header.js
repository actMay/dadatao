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
				if(strlist[i].split("=")[0]=="user"&&!!strlist[i].split("=")[1]){
					username = strlist[i].split("=")[1];
					$(".out").remove();
					$logout = $("<li class='fl'><a href='../html/login.html'>退出登录<a></li>")
					$(".top li").eq(0).after($logout);
					$logout.on("click",function(){
						var d = new Date();
						d.setDate(d.getDate()+7);
						document.cookie = "user"+"="+""+";"+"expires="+d+";"+"path=/";
					});
				}
			}
			$(".query").on("keyup",function(){
				$(".searchinput li").each(function(index,item){
					item.remove();
				});
				var inp = $(this).val();
				var _script = document.createElement("script");
				_script.src = "http://suggestion.baidu.com/?cb=success&wd="+inp;
				window["success"] = function(data){
					var datas = data.s;
					for(var i=0;i<datas.length;i++){
						var $li = $("<li></li>");
						$li.text(datas[i]);
						$(".searchinput ul").append($li);
					}
					_script.remove();
				}
				document.body.appendChild(_script);
			});
			$(".searchinput ul").on("click",function(e){
				if(e.target.nodeName == "LI"){
					$(".query").val(e.target.innerText);
					$(".searchinput li").each(function(index,item){
						item.remove();
					});
				}
			});
			
		});
	});
})
