var express = require('express');
var router = express.Router();

module.exports = function(app){
  app.use('/', router);
}
router.get('/', function(req, res, next) {
  //console.log(req);
  res
  .status(200)
  // .set({'content-type': 'text/html, chartset=utf-8'})
  .render('index');
  //console.log(req.user);
});
