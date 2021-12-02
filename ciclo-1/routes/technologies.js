var express = require('express');
var router = express.Router();
const TECHNOLOGIES = require('../public/text/technologies')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('technologies', {title: 'Tecnologias', lista: TECHNOLOGIES.lista});
});

module.exports = router;
