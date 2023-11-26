const { Sequelize } = require('sequelize');
const db = require('./connection');

async function insertCustomer(customer){
    const db = DB();
    const sql = 'INSERT INTO usuario(Nome,Senha,Tipo) VALUES (?,?,?);';
    const values = [customer.nome, customer.senha, customer.tipo];
    await db.query(sql, values);
};

async function selectCustomer(usuario){
    const conn = await db();
    const sql = 'SELECT * FROMM login;';
    await conn.query(sql, values);
};

async function updateCustomer(usuario){
    const conn = await db();
    const sql = 'UPDATE login set nome=?, senha=?, tipo=? WHERE id=?;';
    const values = [usuario.nome, usuario.senha, usuario.tipo, usuario.id];
    await conn.query(sql, values);
};

async function deleteCustomer(usuario){
    const conn = await db();
    const sql = 'DELETE FROM login WHERE id=?;';
    await conn.query(sql, id);
};

/*async function create(req, res){
    const conn = await db();
    await teste(conn, conn.DataTypes).create({
        nome: 'teste',
        senha: '1234',
        tipo: '2'
    });
    console.log("Produto Cadastrado")

};*/


module.exports = insertCustomer, selectCustomer, updateCustomer, deleteCustomer;