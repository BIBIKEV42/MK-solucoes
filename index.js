//const  Sequelize  = require('sequelize');
const db = require ('./Conexao/connection');

const insertCustomer = require("./Model/LoginModel");

//const db = require("./LoginDAO");
(async () => {
    try {
        console.log('Entrou!');
        const customer = { nome: "nmgfjknbjfg", senha: "14346", tipo: "3" };
        await insertCustomer(customer);

        console.log('Sucesso!');
    } catch (error) {
        console.error('Erro durante a execução:', error);
    } finally {
        // Feche a conexão ou realize outras operações necessárias
        // db.close(); // Este método pode variar dependendo da versão do Sequelize
        db.close();
    }
})();

/*(async () => {
    const LogDAO = new db ();
    console.log('Conectou!');
//    async function cadastro(){
//        await LogDAO.insertCustomer ({nome: 'max', senha: '1234', tipo: '2'});
//    };
    console.log ('Passou!');
    const log = await usuario.create({ name: "Jane", senha: "1234", tipo: "2" });
    console.log ('Sucesso!');
})();*/

/*(async () => {
    try {
        await db.sync(); // Sincroniza todos os modelos com o banco de dados
        console.log('Conectou!');
        
        const customer = { nome: "Jane", senha: "1234", tipo: "2" };
        await insertCustomer(customer.nome(nome), customer.senha(senha), customer.tipo(tipo));

        console.log('Sucesso!');
    } catch (error) {
        console.error('Erro durante a execução:', error);
    } finally {
        // Feche a conexão ou realize outras operações necessárias
        // db.close(); // Este método pode variar dependendo da versão do Sequelize
    }
})();*/
