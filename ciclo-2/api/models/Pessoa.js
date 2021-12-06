const mongoose = require('mongoose')

const Pessoa = mongoose.model('Pessoa', {
    nome: String,
    curso: String,
    senha: String,
    ra: Number
})

module.exports = Pessoa