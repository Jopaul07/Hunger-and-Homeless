var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function (req, res, next) {
  res.render('test', { title: 'Express' });
});
router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/campaigns', function (req, res, next) {
  var campaigns =[];
  campaigns[1] = {name:"World-war-III"};
  campaigns[2] = {name: "High School Charity"};
  var categories = [];
  categories[1] = {name: "wepons"};
  categories[2] = {name: "Nuclear"};
  var items = [];
  items[1] = { name: "guns", price: '30',url:'weponstore.zn',category:'wepons' };
  items[2] = { name: "rpg", price: '60',category:'wepons' };
  items[3] = {name:"H2" , price:'888',category:'nuclear'};
  res.render('pages/campaigns', {items,categories,campaigns});
});
router.get('/items', function (req, res, next) {
  var categories = [];
  categories[1] = {name: "wepons"};
  categories[2] = {name: "Nuclear"};
  var items = [];
  items[1] = { name: "guns", price: '30',url:'weponstore.zn',category:'wepons' };
  items[2] = { name: "rpg", price: '60',category:'wepons' };
  items[3] = {name:"H2" , price:'888',category:'nuclear'};
  res.render('pages/items', { items, categories });
});
router.get('/cat', function (req, res, next) {
  var categories = [];
  categories[1] = {name: "wepons"};
  categories[2] = {name: "Nuclear"};
  categories[3] = {name: "Food"};
  res.render('pages/cat', {categories});
});
router.get('/htest', function (req, res, next) {
  res.render('htest', { title: 'Express' });
});
module.exports = router;
