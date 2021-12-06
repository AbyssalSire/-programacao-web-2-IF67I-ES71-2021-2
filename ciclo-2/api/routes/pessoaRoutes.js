var express = require('express');
const Pessoa = require('../models/Pessoa');
var router = express.Router();

const pessoaDAO = require('../models/Pessoa')

router.post('/criar', async (req, res) => {
    const {nome, curso, senha, ra} = req.body

    if(!nome||!curso||!senha||!ra){
        res.status(422).json({error: 'Todas as informaçõe são obrigatórias'})
    }

    const pessoa = {
        nome,
        curso,
        senha,
        ra
    }

    try {
        //criando dados
        await Pessoa.create(pessoa)
        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
        
    }
})

router.get('/listar', async (req, res) => {
    try {
        const pessoas = await Pessoa.find()

        res.status(200).json(pessoas)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/pesquisar/nome/:nome', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.nome
        
    try {
        const pessoa = await Pessoa.findOne({nome: query})
        if(!pessoa){
            res.status(422).json({message: 'O usuário não foi encontrado, talvez troque as letras maiúsculas'})
            return
        }
        
        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({error: error})
    }

})
router.get('/pesquisar/curso/:curso', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.curso

    try {
        const pessoa = await Pessoa.find({curso: query})
        if(!pessoa){
            res.status(422).json({message: 'Membros do curso não encontrados, tente trocar as letras maiúsculas'})
            return
        }
        
        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({error: error})
    }

})
router.get('/pesquisar/ra/:ra', async (req, res) => {
    // req.params = parametros pela url
    const query = req.params.ra
    
    try {
        const pessoa = await Pessoa.findOne({ra: query})
        if(!pessoa){
            res.status(422).json({message: 'O usuário não foi encontrado, talvez troque as letras maiúsculas'})
            return
        }
        
        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// update
router.patch('/atualizar/:id', async (req, res)=>{
    const query = req.params.id
    console.log(query);
    const {nome, curso, senha, ra} = req.body

    const pessoa = {
        nome, curso, senha, ra
    }

    try {
        const pessoaAtualizada = await Pessoa.updateOne({id: query}, pessoa)

        if(pessoaAtualizada.matchedCount === 0) {
            res.status(422).json({message: 'O usuário não foi encontrado'})
        }

        res.status(200).json(pessoa)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

//delete
router.delete('/deletar/:ra', async (req, res)=> {
    const query = req.params.ra
    const pessoa = await Pessoa.findOne({ra: query})
    if(!pessoa){
        res.status(422).json({message: 'O usuário não foi encontrado'})
        return
    }
    
    try {

        await Pessoa.deleteOne({ra: query})
        console.log("foi");
        
        res.status(200).json({message: 'Usuário removido com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})


module.exports = router;