var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Programação Web 2'});
});

router.get('/login', function(req, res, next){
  console.log("Before",process.env.LOGGEDIN);
  process.env.LOGGEDIN=true;
  console.log("After",process.env.LOGGEDIN);
  res.redirect('/')
});
router.get('/logout', function(req, res, next){
  console.log("Before",process.env.LOGGEDIN);
  process.env.LOGGEDIN=false;
  console.log("After",process.env.LOGGEDIN);
  res.redirect('/')
});

module.exports = router;
