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

// route for management
router.get('/management', function(req, res) {
  res.render('pages/management');
});

// route for contact
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
