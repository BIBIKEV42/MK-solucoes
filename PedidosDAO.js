const  Sequelize  = require('sequelize');
const DB = require ("../Conexao/connection");

const Pedidos = DB.define('pedidos', {
    idPedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Endereco: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Produto: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Quantidadem2: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ModoTelha: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});


//Pedidos.sync();

module.exports = Pedidos;