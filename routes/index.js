var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de páginas de Web 2', subject: 'Programação Web 2'});
});

router.post('/login', function(req, res, next){
  if(req.body.userName=='' && req.body.password ==''){
    return
  }
  if(req.body.userName===process.env.LOGIN_USER && req.body.password===process.env.LOGIN_PASSWORD){
    process.env.LOGGEDIN=true;
  }
  res.redirect('/')
});
router.get('/logout', function(req, res, next){
  console.log("Before",process.env.LOGGEDIN);
  process.env.LOGGEDIN=false;
  console.log("After",process.env.LOGGEDIN);
  res.redirect('/')
});

module.exports = router;
