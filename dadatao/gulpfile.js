var gulp = require("gulp");
var uglify = require("gulp-uglify"); //压缩JS模块
var sass = require("gulp-ruby-sass");
var babel = require("gulp-babel");//编译ES6
var connect = require("gulp-connect");//热部署（即时刷新）

//gulp.task("compileSass",function(){
//	 sass("scss/*.scss",{
//         style: "expanded"
//   }).pipe(gulp.dest("css"))
//});
//gulp.task("listening",function(){
//	gulp.watch("scss/*.scss",["compileSass"]);
//	connect.server({
//        livereload:true
//  });
//  gulp.watch("./html/header.html", ["refreshHTML"]);
//});
//
//gulp.task("refreshHTML",function(){
//   gulp.src("./html/header.html").pipe(connect.reload());
//});
//

gulp.task("js",function(){
     gulp.src("js/*.js").pipe(uglify()).pipe(gulp.dest("minjs"));
})

gulp.task("toEs",function(){
	gulp.src("js/*.js").pipe(babel({
		presets : ["es2015"]
	})).pipe(gulp.dest("./minjs/"))
})

//处理html
gulp.task("refreshHTML",function(){
	gulp.src("html/*.html").pipe(connect.reload());
});
//处理CSS任务
gulp.task("refreshCSS", function(){
	gulp.src("css/*.css").pipe(connect.reload());
})
//编译sass任务
gulp.task("compileSass",function(){
	sass("scss/*.scss",{
		style: "expanded"
	})
	.pipe(gulp.dest("css"))
	
});

//监听任务
gulp.task("watch",function(){
	//让connect启动一个服务器，这样它才能即时刷新浏览器
	connect.server({
		livereload:true
	});
	//检测文件的变化，执行相应的任务
	//gulp.watch("html/*.html", ["refreshHTML"]);
	//gulp.watch("./css/*.css", ["refreshCSS"]);
	gulp.watch("scss/*.scss", ["compileSass"]);
});
