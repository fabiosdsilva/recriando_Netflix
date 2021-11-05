const Sequelize = require('sequelize')
const conectar = new Sequelize('cloneNetflix', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conectar