const Sequelize = require('sequelize')
const conectar = require('./db')

const Categoria = require('./categoriaController')

const filmes = conectar.define('filmes', {
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
    descricao: {
        type: Sequelize.TEXT
    },
    img: {
        type: Sequelize.STRING
    }

})

filmes.belongsTo(Categoria, {
    constraint: true,
    foreignKey: 'idCategoria'
})

filmes.sync({force: false})

module.exports = filmes
