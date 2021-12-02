var express = require('express');
var router = express.Router();
const ABOUT = require('../public/text/about')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: "Sobre", nome: 'Sobre o site', paragrafo1: ABOUT.paragrafo1, paragrafo2: ABOUT.paragrafo2, paragrafo3: ABOUT.paragrafo3, paragrafo4: ABOUT.paragrafo4, lista: ABOUT.lista });
  });

module.exports = router;