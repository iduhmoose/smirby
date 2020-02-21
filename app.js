
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var calendar = require('./routes/calendar');
var chores = require('./routes/chores');
var trade = require('./routes/trade');
var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

var fs = require('fs');
var bodyParser = require("body-parser");

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', login.view);
app.get('/home', index.view);
app.get('/chores', chores.view);
app.get('/calendar', calendar.view);
app.get('/trade', trade.view);

// Example route
// app.get('/users', user.list);

app.post("/chores", function(req,res) {
    let json = JSON.stringify(req.body);
    fs.writeFile("chores.json", json, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("The json file was updated!");
    });

    fs.writeFile("./public/chores.json", json, function(err) {
      if(err) {
        return console.log(err);
      }

      console.log("The json file was updated!");
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
