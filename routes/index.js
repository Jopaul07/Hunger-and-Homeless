var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/campaigns', function(req, res, next) {
  res.render('pages/campaigns', { title: 'Express' });
});
router.get('/items', function(req, res, next) {
  res.render('pages/items', { title: 'Express' });
});
router.get('/cat', function(req, res, next) {
  res.render('pages/cat', { title: 'Express' });
});
router.get('/htest', function(req, res, next) {
  res.render('htest', { title: 'Express' });
});
module.exports = router;
