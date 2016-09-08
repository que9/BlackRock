
"use strict";

const 	gulp 		= require('gulp'),
		concat  	= require("gulp-concat"),
		jshint  	= require("gulp-jshint"),
		size    	= require("gulp-size"),
		uglify  	= require("gulp-uglify"),		
		minifyCSS   = require("gulp-minify-css"),
		del         = require("del"),	
		gulpUtil    = require("gulp-util"),
		sourcemaps  = require("gulp-sourcemaps"),
		htmlReplace = require("gulp-html-replace");

const 	refresh 	= require('gulp-livereload'),
  		lrserver 	= require('tiny-lr')(),
  		express  	= require("express"),
  		notify   	= require("gulp-notify");
  	

const app = require('./app.js')("production");
const livereloadport = 35729, serverport = 5000;




var path = {
	vendor : "public/vendor/",
	js 	   : "public/javascripts/",
	css    : "public/stylesheets/"
};

var files = {
	js:[
		path.vendor+"jquery/dist/jquery.js",
		path.vendor+"angular/angular.js",
		path.vendor+"angular-filter/dist/angular-filter.js",
		path.vendor+"angular-ui-router/release/angular-ui-router.js",
		path.vendor+"bootstrap/dist/js/bootstrap.js",
		path.js+"app.routes.js",
		path.js+"app.ctrl.js",
		path.js+"employee_component/employee-list.module.js",
		path.js+"employee_component/dataset.service.js",
		path.js+"employee_component/employee-list.ctrl.js",
		path.js+"employee_component/add-edit-employee.ctrl.js",
		
		//-- main module
		path.js+"app.module.js"
	],
	styles:[
		path.vendor+"bootstrap/dist/css/bootstrap.css",
		path.css+"style.css",
		path.css+"sticky-footer.css",
	]

}


var onError = function( err ){
	gulpUtil.beep();
	gulpUtil.log ( gulpUtil.colors.green(err) );
};




// JSHint is a program that flags suspicious usage in programs written in JavaScript.
gulp.task("lint", function(){
	return gulp.src("public/javascripts/**/*.js")
			.pipe( jshint() )
			.pipe( jshint.reporter("default", {verbose:true} ));
});


gulp.task("size", function(){
	return gulp.src("public/javascripts/**/*.js")
			.pipe(size({
				title:"Total size in javascripts/",
				pretty:true,
				showFiles:true		// Display the size of every file instead of just total size
			}));
});


// Copies the images folder to build\images
gulp.task("copy-images", function(){
	gulp.src("public/images/**/*.*")
	.pipe( gulp.dest("build/images") );
});


// Replaces long entries of .css and .js files in index.ejs file into just one concatenated all.min.css and all.min.js
gulp.task("htmlReplace", function(){
	gulpUtil.log( gulpUtil.colors.green("Starting htmlReplace") );

	gulp.src("public/index.ejs")
		.pipe(htmlReplace({
			'css':"stylesheets/all.min.css",
			"js":"javascripts/all.min.js"
		}))
		.pipe(gulp.dest("build/"))
		.pipe( refresh( lrserver ) );
});


// Removes the build/ folder
gulp.task("clean", function(){
	del(["build"])
})


gulp.task("build-views", ['copy-images'], function(){

	gulp.src(["public/views/*.ejs"])
		.pipe( gulp.dest("build/views") )
		.pipe( refresh( lrserver ) );	
});


//-- Uglifying and Minifying JS and attaches source maps
gulp.task("build-js", function(){
		gulp.src( files.js )
			.pipe( sourcemaps.init() )
			.pipe( concat("all.min.js") )
			.pipe( uglify().on('error', onError) )
			.pipe( sourcemaps.write("./") )
			.pipe( gulp.dest("build/javascripts") )
			.pipe( refresh( lrserver ) );
});


gulp.task("font", function(){
	gulp.src( path.vendor+"bootstrap/fonts/**/*.*" )
	.pipe( gulp.dest("build/fonts") )
});

//-- Mififying and uglifying CSS and attaches source maps
gulp.task("build-css", function(){
	gulp.src( files.styles )
		.pipe( sourcemaps.init() )
		.pipe( concat("all.min.css")  )
		.pipe( minifyCSS() )
		.pipe( sourcemaps.write("./") )
		.pipe( gulp.dest("build/stylesheets") )
		.pipe( refresh( lrserver ) );		
});


function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  lrserver.changed({
    body: {
      files: [fileName]
    }
  });
}



// Watch the file changes
gulp.task("watch", function(){
	gulp.watch( files.js,  ['build-js'] );
	gulp.watch( files.css, ['build-css'] );	
	gulp.watch("public/views/*.ejs", ['build-views'] );	
	gulp.watch("public/index.ejs", ['htmlReplace']);
});



gulp.task('build', ['clean', 'lint', 'build-views', 'htmlReplace', 'build-js', 'font', 'build-css'], function() {

});


gulp.task("serve", ['build'], function(){
	//--Making the server alive, running the event loop
	app.listen( serverport, function(){		
		gulpUtil.log( gulpUtil.colors.yellow("Server is listening on "+ serverport) );
	});

	lrserver.listen( livereloadport );
	gulp.start("watch");
});







