const Sequelize = require('sequelize')
const conectar = require('./db')

const categoria = conectar.define('categoria', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

categoria.sync({force: false})

module.exports = categoria