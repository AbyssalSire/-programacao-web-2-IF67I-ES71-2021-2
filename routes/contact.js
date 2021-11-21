var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const SMTPCONFIG = require('../config/smtp');

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contato'});
});

router.post('/enviarEmail', function (req, res, next) {
    
    try {
        
        if(req.body.emailEnvio==="" || req.body.emailEnvio===null||req.body.emailEnvio===undefined)
        throw "Email vazio"
        if(req.body.assuntoEmail==="" || req.body.assuntoEmail===null||req.body.assuntoEmail===undefined)
        throw "Assunto vazio"
        if(req.body.assuntoEmail==="" || req.body.assuntoEmail===null||req.body.assuntoEmail===undefined)
        throw "Assunto vazio"
        if(req.body.nome==="" || req.body.nome===null||req.body.nome===undefined)
        throw "Nome vazio"
        
        async function enviarEmail() {
            const mailSent = await transporter.sendMail({
                text: "Enviado por"+req.body.emailEnvio+"\n Email:"+req.body.emailEnvio+"\n"+req.body.textoEmail,
                subject: req.body.assuntoEmail,
                from: req.body.emailEnvio,
                to: 'lucasmalheiros@alunos.utfpr.edu.br'
            });
            console.log(mailSent);

        }
        
        enviarEmail();
    } catch (error) {
        //alert('Erro ao enviar:', error);
       // res.status(409).send('Erro')
    }
    
    res.redirect('/contact')
})

let transporter = nodemailer.createTransport(
    {
        host: SMTPCONFIG.host,
        port: SMTPCONFIG.port,
        secure: false,
        auth: {
            user: 'lucasmalheiros@alunos.utfpr.edu.br',
            pass: 'aouutc22',
        }, tls: {
            rejectUnauthorized: false
        },
    });
    
    module.exports = router;