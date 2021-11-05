const express = require('express')
const app = express()
const porta = 8083

//Router
const home = require('./routes/home')

//Banco de dados
const conectar = require('./controller/db')



conectar.authenticate().then(() =>{
    console.log('Conectado com o banco de dados!');
}).catch((erro) =>{
    console.log('Não foi possível conectar com o banco de dados' +erro);
})



//Habilitando todos os recursos do Express
app.use(express.urlencoded({extended: true}))

//Pasta public
app.use(express.static('public'))

//Template
app.set('view engine', 'ejs')

//Rotas
app.get('/', home)

//SERVER
app.listen(porta, ()=> {
    console.log('Está funcionando')
})
