
//var sort = {//排序算法
//	BubbleSort:function(arr){//冒泡排序,从小到大
//		for(var i=0;i<arr.length;i++){
//			for(var j=0;j<arr.length-1;j++){
//				if(arr[j]>arr[j+1]){
//					var temp = arr[j];
//					arr[j]=arr[j+1];
//					arr[j+1]=temp;
//				}
//			}
//		}
//		return arr;
//	}
//	
//	selectSort:function(arr){//选择排序
//		for(var i=0;i<arr.length;i++){
//			for(var j=i;j<arr.length;j++){
//				if(arr[i]>arr[j]){
//					var temp=arr[i];
//					arr[i]=arr[j];
//					arr[j]=temp;
//				}
//			}
//		}
//		return arr;
//	}
//	
//	quickSort:function(arr){//快速排序
//		var midIndex = parseInt(arr.length/2);
//		var midValue = arr[midIndex];
//		var left = [];
//		var right =[];
//		for(var i=0;i<arr.length;i++){
//			if(arr[i]<midValue){
//				left.push(arr[i]);
//			}else{
//				right.push(arr[i]);
//			}
//		}
//		return quick(left).concat(midValue).concat(quick(right));
//	}
//	
//	insertSort:function(arr){//插入排序
//		for(var i=0;i<arr.lenght;i++){
//			var j=i;
//			while(arr[j]<arr[j-1]&&j-1>=0){
//				var temp = arr[j];
//				arr[j]=arr[j-1];
//				arr[j-1]=temp;
//				j--;
//			}
//		}
//		return arr;
//	}
//	
//	shellSort:function(arr){//希尔排序
//		var interval = parseInt(arr.length/2);
//		while(interval>=1){
//			for(var i=0;i<arr.lenght;i++){
//				var j=i;
//				while(arr[j]<arr[j-interval]&&j-interval>=0){
//					var temp = arr[j];
//					arr[j]=arr[j-interval];
//					arr[j-interval]=temp;
//					j-=interval;
//				}
//			}
//			interval = parseInt(interval/2);
//		}
//		return arr;
//	}
//	
//}

//生成随机数，范围min-max之间
function randomInt(min,max){
	var ran = Math.round(Math.random()*(max-min))+min;
	return ran;
}

//生成num位的验证码
function checkCode(num){
	var str = "";
	for(var i=0;i<num;i++){
		var ran = random(48,122);
		while((ran>=58&&ran<=64)||(ran>90&&ran<97)){
			ran = random(48,122);
		}
		str +=String.fromCharCode(ran);
	}
	return str;
}

//敏感词过滤
function strfilter(target){
	var words = ["SB","TMD","WQNMLGB","GCD","89.64"];
			  
	for(var i in words){
		var reg = new RegExp( words[i], "gi" );
	  
		var stars = "";
		for(var k =0; k<words[i].length; k++ ){
			stars += "*";
		}
		target =  target.replace(reg, stars);
	}
	return target;
}

//打印变量
function log(x){
	console.log(x);
}

//网页输出变量
function dwrite(x){
	document.write(x);
}

var Dates = {
	isLeapYear:function(){//判断某年份是否为闰年
		if(year%400==0||(year%100!=0&&year%4==0)){
			return true;
	}
	return false;
	},
	dateToString:function(date){//将日期格式化输出 “2015-08-24”
		return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	},
	getMDay:function(m,y){//获得某个月份的天数
		switch(m){
			case 1 :
			case 3 :
			case 5 :
			case 7 :
			case 8 :
			case 10 :
			case 12 : return 31;
			case 4 :
			case 6 :
			case 9 :
			case 11 : return 30;
			case 2 :{
				if(isleap(y)){
					return 29;
				}
				return 28;
			}
		}
	},
	StringToDate:function(str){//将字符串转换为日期
		str.replace(/\d+(\D)/g,function(matched,sub1,index,s){
			return matched.replace(sub1,"-");
		});
		return str;
	},
	dayBetween:function(d1,d2){//判断两个日期相差的天数
		if((typeof d1) == "String"){
			d1 = this.StringToDate(d1);
		}
		if((typeof d2) == "String"){
			d2 = this.StringToDate(d2);
		}
		var total = d1.getTime()-d2.getTime();
		return Math.floor(total/(1000*3600*24));
	},
	dayAfter:function(n){//获得N天以后的日期
		var now = new Date();
		var later = now.setDate(now.getDate()+n);
		return later;
	}
}

//IE的兼容getElementByClassName
if(!document.getElementsByClassName){
	document.getElementsByClassName = function (classname){
		var alldom = document.getElementsByTagName("*");
		var temp = [];
		for(var i=0;i<alldom.length;i++){
			var strlist = alldom[i].className.split(" ");
			var result = false;
			for(var k in strlist){
				if(strlist[k] ===classname ){
					result = true;
					break;
				}
			}
			if(result){
				temp.push(alldom[i]);
			}
		}
		return temp;
	}
}

//IE8及以下的获取style兼容
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}
	return getComputedStyle(ele)[attr];
}

function offsetPage(obj){
	if(!obj)return;
	if(! (obj instanceof Element) ){
		throw new Error("你输入的元素对象有误！");
	}
	var _left = obj.offsetLeft;
	var _top = obj.offsetTop;
	while(obj.offsetParent){
		_left +=obj.offsetParent.offsetLeft;
		_top +=obj.offsetParent.offsetTop;
		obj = obj.offsetParent;
	}
	return {"left":_left,"top":_top};
}
//offsetPage(obj).left

function toarray(list){
	var temp = [];
	for(var i=0;i<list.length;i++){
		temp.push(list[i]);
	}
	return temp;
}
function $(str){
	//取ID
	var matcharr = null;
	if(matcharr = str.match(/^#(.+)/)){
		return document.getElementById(matcharr[1]);
	}
	//取class名
	if(matcharr = str.match(/^\.(.+)/)){
		return Array.from(document.getElementsByClassName(matcharr[1]));
	}
	//取元素
	if(matcharr = str.match(/(^[^\.#][^\]]+)/)){
		return Array.from(document.getElementsByTagName(matcharr[0]));
	}
	//取带自定义属性的元素
	if(matcharr = str.match(/(^[^\.#].+)\[(.+)=(.+)\]$/)){
		var tagName = matcharr[1];
		var attrName = matcharr[2];
		var attrValue = matcharr[3];
		var list = Array.from(document.getElementsByTagName(tagName));
		var newlist = list.filter(function(item,index){
			return item.getAttribute(attrName) == attrValue;
		});
		return newlist;
	}
}

//函数柯里化
var addEvent = (function(){
    if(window.attachEvent) {
        return function(obj, eventType, func){
            obj.attachEvent("on"+eventType, func);
        }
    } else {
        return function(obj, eventType, func,  isCapture) {
            obj.addEventListener(eventType, func, isCapture||false);
        }
    }
})();

var Cookie = {
	getCookie:function(str){//获取cookie信息
		var strlist = document.cookie.split("; ");
		for(var i=0;i<strlist.length;i++){
			if(strlist[i].split("=")[0]===str){
				return strlist[i].split("=")[1];
			}
		}
		return null;
	},
	setCookie:function(key,value,date,path){//设置cookie信息
		var d = new Date();
		d.setDate(d.getDate()+date);
		if(key&&value){
			document.cookie = key+"="+value+";"+(date?"expires="+d:"")+";"+(path?"path="+path:"");
		}
		return null;
	},
}

var objs = {
	copy:function(obj){//深度复制对象
		if(typeof obj!="object"){
			return;
		}
		var newobj = null;
		if(obj instanceof Array){
			newobj=[];
		}else{
			newobj={};
		}
		for(var attr in obj){
			newobj[attr]=obj[attr];
			if(typeof obj[attr] == "object"){
				newobj[attr] = this.copy(obj[attr]);
			}
		}
		return newobj;
	},
	merge:function(a,b){//合并对象
		var temp = {};
		for(var attr in a){
			if(attr in b){
				temp[attr] = b[attr];
			}else{
				temp[attr] = a[attr];
			}
		}
		for(var attr in b){
			if(!(attr in a)){
				temp[attr] = b[attr];
			}
		}
		return temp;
	}
}









