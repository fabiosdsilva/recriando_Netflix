const express = require('express')
const router = express.Router()

const categorias = require('../controller/categoriaController')
const filmes = require('../controller/filmesController')


router.get('/', (req, res) =>{
    categorias.create({
        titulo: 'Acao'
    }),
    filmes.create({
        titulo: 'Os vingadores',
        descricao: 'Esse filme é uma merda',
        idCategoria: 2 
    })
    res.render('home')
})

module.exports = router