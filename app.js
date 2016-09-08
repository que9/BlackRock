
var express     = require('express');
    path        = require('path'),
    favicon     = require('static-favicon'),
    logger      = require('morgan'),
    livereload  = require('connect-livereload');


var routes  = require('./routes/index');
//-- Creating an instace of express server, which will be listen in ./bin/www file
var app     = express();
const livereloadport = 35729;

//-- Using liveload middleware before defining the routes
app.use(livereload({ port: livereloadport }));

module.exports = function( env ){
    app.set("assets_path", env === "production" ? "build" : "public" );

    //-- View engine setup
    app.set('views', path.join( __dirname, app.get("assets_path") ));
    //-- Using extended JS as templating engine on server
    app.set('view engine', 'ejs');

    //-- Favicon icon with custom path
    app.use(favicon( path.join(__dirname, app.get("assets_path")+"/images/blackrock.ico") ));
    app.use(logger('dev'));
    

    //-- Telling express where to get static files like css and images
    app.use(express.static(path.join(__dirname, app.get("assets_path"))));

    
    //-- The only route of the app, that simply serves public/views/index.ejs file
    app.use('/', routes);

    console.info("Environment ", app.get("assets_path"));
    console.info("views", app.get("views"));
    
     // Middlewares
    // Catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


    // Error handlers
    // Development error handler
    // Will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render("views/error", {
                message: err.message,
                error: err
            });
        });
    }

    // Production error handler
    // No stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render("views/error", {
            message: err.message,
            error: {}
        });
    });
    
    //-- Returning the app
    return  app;    
}


