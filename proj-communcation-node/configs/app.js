var express = require('./express');
var chalk = require('chalk');
var settings = require('./settings');
var route = require('./route');

module.exports.init = function init(callback) {
  var _this = this;
  var app = express.init();
  _this.initRoute(app, function(app, settings){
    if(callback) callback(app, settings);
  });
}

module.exports.initRoute = function initRoute(app, callback) {
  route(app);
  if (callback) callback(app, settings);
};

module.exports.start = function start(callback) {
  var _this = this;

  _this.init(function(app, settings){
    var http = require('http').Server(app);
    var io = require('socket.io')(http);  
    io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
        console.log('user disconnected');
      });
      socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    });
    //settings.port
    http.listen(settings.port, settings.host, function(){
      var server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + settings.host + ':' + settings.port;
      console.log('--');
      console.log(chalk.green('Environment:     ' + process.env.NODE_ENV));
      console.log(chalk.green('Server:          ' + server));

      if(callback) callback(app, settings);
    })
  })
}