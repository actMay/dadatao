
define(["config"],function(){
	require(["jquery"],function($){
		$(function(){
			var checkpass;
			//策略模式，所有可能需要的条件
			var regular={
				"tel" : /^1[3|5|8|7|4][1-9]{9}$/, 
				"mail" : /.{6,20}/,
				"password" : /[a-zA-Z0-9_]{6,20}/,
				"friendtel" : /^1[3|5|8|7|4][1-9]{9}$/
			}
			var flag = false;
			//判断手机号是否正确
			$span = $("<span class='error'>您输入的格式有误!</span>");
			$("input").each(function(){
				$(this).on("blur",function(){
					if(!!$span||!!$(".error")){
						$span.remove();
						$(".error").remove();
					}
					if(!!$(this).attr("pattern")){
						if(regular[$(this).attr("pattern")].test($(this).get(0).value)){
							$(this).get(0).setAttribute("pass",true);
						}else{
							$(this).get(0).setAttribute("pass",false);
							$(this).after($span);
						}
					}
					//console.log($(this).get(0).getAttribute("pass"));
				});
			});
			$("input").eq(3).on("blur",function(){
				checkpass = ($("input").get(2).value == $("input").get(3).value);
				if(!checkpass){
					$(this).after($span);
				}
			});
			
			$(".regbtn").on("click",function(){
				var res = true;
				$("input[pass]").each(function(i,item){
					if(item.getAttribute("pass")!="true"){
						res = false;
					}
				});
				if($(".check").get(0).checked == true && res && checkpass){
					
					alert("验证成功");
					
					var realtel = $(".regcontent input").eq(0).get(0).value;
					var relpass = $(".regcontent input").eq(2).get(0).value;
					var d = new Date();
					d.setDate(d.getDate()+7);
					document.cookie = "user"+"="+realtel+";"+"expires="+d+";"+"path=/";
					window.location.href="./index.html";
				}else{
					alert("验证失败");
				}
			});
			
		});
	});
});