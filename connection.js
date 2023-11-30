const Sequelize = require('sequelize');

// CONEXÃO COM O BANCO DE DADOS MYSQL
const DB = new Sequelize("mksolucoes", "root", "1234", {
    host: 'localhost',
    dialect: 'mysql'
});

// RETORNAR SE TEVE SUCESSO NA CONEXÃO
DB.authenticate()
    .then(function () {
        console.log("Conexão realizada com sucesso!");
    })
    .catch(function (err) {
        console.error("Erro de conexão:", err);
    });

module.exports = DB;
