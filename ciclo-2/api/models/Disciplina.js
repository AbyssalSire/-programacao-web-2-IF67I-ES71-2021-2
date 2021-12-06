const mongoose = require('mongoose')

const Disciplina = mongoose.model('Disciplina', {
    nomeDisciplina: String,
    alunoRA: Number,
    codigo: String,
})

module.exports = Disciplina