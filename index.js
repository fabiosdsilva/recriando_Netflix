const exp = require('constants')
const express = require('express')
const app = express()

const home = require('./routes/home')

//Habilitando todos os recursos do Express
app.use(express.urlencoded({extended: true}))

//Pasta public
app.use(express.static('public'))

//Template
app.set('view engine', 'ejs')

//Rotas
app.get('/', home)

//SERVER
app.listen(8083, ()=> {
    console.log('Está funcionando')
})
