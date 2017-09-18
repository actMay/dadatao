define(["jquery"],function(jQuery){
	(function($, undefined) {
	$.fn.extend({
		hoverdir : function(){
			$UL = $("ul");
			$("li").on("mouseenter mouseleave",function(e){
				mouse = {x:e.offsetX,y:e.offsetY};
				var _left = {
					dir : 3,
					val : mouse.x/$(this).width()
				}
				var _right = {
					dir : 1,
					val : 1-_left
				}
				var _top = {
					dir : 0,
					val : mouse.y/$(this).height()
				}
				var _bottom = {
					dir : 2,
					val : 1-_top
				}
				hover($(this).find("div"),e.type,getDir(_left,_right,_top,_bottom));
			})
			function hover(ele,type,dir){
				var action = {
					"0" : {
						"mouseenter":function(){ele.css({top:"-100%",left:0}).animate({top:0},500)},
						"mouseleave":function(){ele.animate({top:"-100%"},500)}
					},
					"1" : {
						"mouseenter":function(){ele.css({left:"100%",top:0}).animate({left:0},500)},
						"mouseleave":function(){ele.animate({left:"100%"},500)}
					},
					"2" : {
						"mouseenter":function(){ele.css({top:"100%",left:0}).animate({top:0},500)},
						"mouseleave":function(){ele.animate({top:"100%"},500)}
					},
					"3" : {
						"mouseenter":function(){ele.css({left:"-100%",top:0}).animate({left:0},500)},
						"mouseleave":function(){ele.animate({left:"-100%"},500)}
					}
				}
				action[dir][type]();
			}
			function getDir(){
				var mindis = arguments[0].val;
				var minIndex = 0;
				for(var i=0;i<arguments.length;i++){
					if(arguments[i].val<mindis){
						mindis = arguments[i].val;
						minIndex = i;
					}
				}
				return arguments[minIndex].dir;
			}
		}
	})
})(jQuery);
})

