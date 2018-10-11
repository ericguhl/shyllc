// reqiure experss
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// export our Router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.render('pages/index');
  // res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// route for singlefamily
router.get('/singlefamily', function(req, res) {
  res.render('pages/singlefamily');
});

// route for multifamily
router.get('/multifamily', function(req, res) {
  res.render('pages/multifamily');
});

// route for multi management
router.get('/managementsingle', function(req, res) {
  res.render('pages/managementsingle');
});

// route for single management
router.get('/managementmulti', function(req, res) {
  res.render('pages/managementmulti');
});

// route for contact
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
