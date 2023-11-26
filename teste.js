const Sequelize = require('sequelize');
const db = require('./Conexao/connection');

const Usuario = db.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Tipo: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

Usuario.sync();

async function insertCustomer(customer) {
    try {
        await Usuario.create({
            Nome: customer.nome,
            Senha: customer.senha,
            Tipo: customer.tipo
        });
        console.log('Usuário inserido com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
    }
}

(async () => {
    try {
        
        const customer = { nome: "Jane", senha: "1234", tipo: "2" };
        await insertCustomer(customer);

        console.log('Sucesso!');
    } catch (error) {
        console.error('Erro durante a execução:', error);
    } finally {
        // Feche a conexão ou realize outras operações necessárias
        // db.close(); // Este método pode variar dependendo da versão do Sequelize
    }
})();