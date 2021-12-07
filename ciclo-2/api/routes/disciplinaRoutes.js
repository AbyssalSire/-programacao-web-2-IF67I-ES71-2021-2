var express = require('express');
const Disciplina = require('../models/Disciplina');
const Pessoa = require('../models/Pessoa');
var router = express.Router();

const disciplinaDAO = require('../models/Disciplina')

router.post('/criar', async (req, res) => {
    const {nomeDisciplina, alunoRA, codigo} = req.body

    if(!nomeDisciplina||!alunoRA||!codigo){
        res.status(422).json({error: 'Todas as informaçõe são obrigatórias'})
    }

    const disciplina = {
        nomeDisciplina,
        alunoRA,
        codigo
    }

    try {
        const pesquisa = await Pessoa.findOne({ra: alunoRA})
        if(!pesquisa){
            res.status(422).json({message: 'Aluno não encontrado'})
            return
        }

        //criando dados
        await Disciplina.create(disciplina)
        res.status(201).json({message: 'Disciplina inserida no sistema com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
        
    }
})

router.get('/listar', async (req, res) => {
    try {
        const disciplinas = await Disciplina.find()

        res.status(200).json(disciplinas)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/pesquisar/nome/:nome', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.nome
    try {
        const disciplina = await Disciplina.find({nomeDisciplina: query})
        console.log(disciplina);
        if(disciplina.length==0){
            res.status(422).json({message: 'A disciplina não foi encontrada, talvez troque as letras maiúsculas'})
            return
        }
        console.log("aqui");
        
        res.status(200).json(disciplina)
    } catch (error) {
        res.status(500).json({error: error})
    }

})
router.get('/pesquisar/codigo/:codigo', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.codigo

    try {
        const disciplina = await Disciplina.find({codigo: query})
        if(disciplina.length==0){
            res.status(422).json({message: 'Código de disciplina não encontrado, tente trocar as letras maiúsculas'})
            return
        }
        
        res.status(200).json(disciplina)
    } catch (error) {
        res.status(500).json({error: error})
    }

})
router.get('/pesquisar/ra/:ra', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.ra
    
    try {
        const disciplina = await Disciplina.find({alunoRA: query})
        if(!disciplina){
            res.status(422).json({message: 'O usuário não foi encontrado, talvez troque as letras maiúsculas'})
            return
        }
        
        res.status(200).json(disciplina)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// update
router.patch('/atualizar/:id', async (req, res)=>{
    const query = req.params.id
    console.log(query);
    const {nomeDisciplina, alunoRA, codigo} = req.body

    const disciplina = {
        nomeDisciplina, alunoRA, codigo
    }

    try {
        const disciplinaAtualizada = await Disciplina.updateOne({id: query}, disciplina)

        if(disciplinaAtualizada.matchedCount === 0) {
            res.status(422).json({message: 'A disciplina não foi encontrada'})
        }

        res.status(200).json(disciplina)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

//delete
router.delete('/deletar/:id', async (req, res)=> {
    const query = req.params.id
    const disciplina = await Disciplina.findOne({id: query})
    if(!disciplina){
        res.status(422).json({message: 'Aluno x Disciplina não foi encontrado'})
        return
    }
    
    try {

        await Disciplina.deleteOne({ra: query})
        console.log("foi");
        
        res.status(200).json({message: 'Aluno x Disciplina removido com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})
router.delete('/removerAluno/:ra', async (req, res)=> {
    const query = req.params.ra
    const disciplina = await Disciplina.findOne({ra: query})
    if(!disciplina){
        res.status(422).json({message: 'Aluno não foi encontrado'})
        return
    }
    
    try {

        await Disciplina.deleteMany({ra: query})
        
        res.status(200).json({message: 'Aluno removido com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})


module.exports = router;