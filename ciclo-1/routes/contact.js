var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const SMTPCONFIG = require('../config/smtp');

router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contato' });
});

router.post('/enviarEmail', function (req, res, next) {

    try {

        if (req.body.emailEnvio === "" || req.body.emailEnvio === null || req.body.emailEnvio === undefined)
            return next(Error('Email vazio'));
        if (req.body.assuntoEmail === "" || req.body.assuntoEmail === null || req.body.assuntoEmail === undefined)
            return next(Error('Assunto vazio'));
        if (req.body.textoEmail === "" || req.body.textoEmail === null || req.body.textoEmail === undefined)
            return next(Error('Mensagem vazia'));
        if (req.body.nome === "" || req.body.nome === null || req.body.nome === undefined)
            throw "Nome vazio"

        async function enviarEmail() {
            var emailPrincipal = 'lucasmalheiros@alunos.utfpr.edu.br';
            var mailList = new Array(emailPrincipal);
            mailList.push(req.body.emailEnvio)
            const mailSent = await transporter.sendMail({
                text: "Mensagem automática de confirmação de envio de e-mail" + "\nEnviado por: " + req.body.nome + " pelo E-mail: " + req.body.emailEnvio + "\n\n" + req.body.textoEmail,
                subject: req.body.assuntoEmail,
                from: req.body.emailEnvio,
                to: mailList,
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