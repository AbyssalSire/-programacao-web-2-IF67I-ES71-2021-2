// configuração
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
require("dotenv").config({ path: "./.env" })

// import de rotas
var pessoaRouter = require('./routes/pessoaRoutes')
var disciplinaRouter = require('./routes/disciplinaRoutes')

// middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(cors())


//rotas da API
app.use('/pessoa', pessoaRouter)
app.use('/disciplina', disciplinaRouter)

//rota inicial
app.get('/',(req, res) => {
    // mostrar req
    res.json({message: 'Olá express!'})
});
// mongodb+srv://lucas:q0GtnTXeI6wKxAz7@ciclo-2.kmjl5.mongodb.net/bancoWeb2?retryWrites=true&w=majority


// porta
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ciclo-2.kmjl5.mongodb.net/bancoWeb2?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("Conectado ao MongoDB");
        app.listen(5000);
    })
    .catch((err) => console.log(err))
