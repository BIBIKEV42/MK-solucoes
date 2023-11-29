const Pedidos = require("./DAO/PedidosDAO")

//Express
const express = require('express');
const Login = require('./DAO/LoginDAO')
const app = express();

// BodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Config Template Engine Handlebars
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



app.get('/pedido', function(req, res){
    res.render('pedido');
})

app.post('/pedido', function(req, res){
    Pedidos.create({
        Nome: req.body.nomeCliente,
        Endereco: req.body.enderecoCliente,
        Email: req.body.emailCliente,
        Telefone: req.body.telefoneCliente,
        Produto: req.body.produtoCliente,
        Quantidadem2: req.body.quantidadeProduto,
        ModoTelha: req.body.modoTelha
        // Adicione outras propriedades ao objeto conforme necessário
    }).then(function() {
        res.redirect('pedido');
    })
    .catch(function(erro) {
        res.status(500).json({ erro: "Falha: " + erro });
    });
    
})

/*app.get('/login', function(req, res){
    res.render('login');
})

app.post('/login', function(req, res){
    if (req.body.username == "usuario" && req.body.password == "senha") {
        res.redirect('test');
    } else {
        
    } 
})*/

//req.flash("success_msg", "Pedido gerado com sucesso!")

//localhost:8080
app.listen(8080, function(){
    console.log("Servidor Rodando");
    });
