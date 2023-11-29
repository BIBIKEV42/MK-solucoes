const Sequelize = require('sequelize');
//CONEXÃO COM DB MYSQL
const DB = new Sequelize("mksolucoes", "root", "1234", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = DB;
//RETORNAR SE TEVE SUCESSO NA CONEXÃO
DB.authenticate();
/*.then(function(){
    console.log("Conexão realizada com sucesso!")
}).catch(function(){
    console.log("Erro de conexão!")
});*/

module.exports = DB, Sequelize;