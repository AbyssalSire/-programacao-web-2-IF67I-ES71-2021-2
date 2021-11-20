var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('settings', { title: 'Configurações'});
});

router.post('/editarNome', function (req, res, next) {
    process.env.NOME=req.body.nomeNovo;
    //console.log(process.env.NOME);
    res.redirect('/settings')
})

module.exports = router;
