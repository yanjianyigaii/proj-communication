var path = require('path');
var cookieParser = require('cookie-parser');
var swig = require('swig');
var bodyParser = require('body-parser');
var settings = require('./settings');
var express = require('express');
var app = express();



module.exports.init = function(){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  //initViewEngine
  app.engine('html', swig.renderFile);
  console.log(__dirname);
  app.set('views', path.resolve('./views'));
  app.set('view engine', 'html');
  app.use(express.static('clientside'));
  return app;
}