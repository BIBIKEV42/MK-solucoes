const loginContainer = document.getElementById("loginContainer");
const mainContent = document.getElementById("mainContent");

function isLoggedIn(usernameInput, passwordInput) {
    return usernameInput.value === "usuario" && passwordInput.value === "senha";
}

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (isLoggedIn(usernameInput, passwordInput)) {
        loginContainer.style.display = "none";
        mainContent.style.display = "block";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

const pedidoForm = document.getElementById("pedidoForm");
const pedidosRegistrados = document.getElementById("pedidosRegistrados");
const modeloOrcamentoDiv = document.getElementById("modeloOrcamento");
const confirmacaoPedidoDiv = document.getElementById("confirmacaoPedido");

pedidoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (isLoggedIn(usernameInput, passwordInput)) {
        const nomeCliente = document.getElementById("nomeCliente").value;
        const enderecoCliente = document.getElementById("enderecoCliente").value;
        const emailCliente = document.getElementById("emailCliente").value;
        const telefoneCliente = document.getElementById("telefoneCliente").value;
        const produtoCliente = document.getElementById("produtoCliente").value;
        const quantidadeProduto = parseFloat(document.getElementById("quantidadeProduto").value);
        const modoTelha = document.getElementById("modoTelha").value;

        registrarPedido(nomeCliente, enderecoCliente, emailCliente, telefoneCliente, produtoCliente, quantidadeProduto, modoTelha);

        pedidoForm.reset();
    } else {
        alert("Por favor, faça login antes de registrar um pedido.");
    }
});

function displayModeloOrcamento(modeloOrcamento, clienteInfo) {
    const modeloOrcamentoPopup = document.getElementById("modeloOrcamentoPopup");
    modeloOrcamentoPopup.innerHTML = `<h2>Modelo de Orçamento</h2>${modeloOrcamento}<br><br><strong>Informações do Cliente:</strong><br>Nome: ${clienteInfo.nomeCliente}<br>Endereço: ${clienteInfo.enderecoCliente}<br>Email: ${clienteInfo.emailCliente}<br>Telefone: ${clienteInfo.telefoneCliente}`;
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function imprimirOrcamento() {
    const modeloOrcamentoPopup = document.getElementById("modeloOrcamentoPopup").innerHTML;
    const janela = window.open('', 'Imprimir', 'width=600,height=600');
    janela.document.open();
    janela.document.write('<html><head><title>Imprimir Orçamento</title></head><body>');
    janela.document.write(modeloOrcamentoPopup);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}

function sendConfirmationEmail(email) {
    console.log(`Enviando confirmação para: ${email}`);
}

function registerPedido(pedido) {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pedido.nomeCliente}, Endereço: ${pedido.enderecoCliente}, Email: ${pedido.emailCliente}, Telefone: ${pedido.telefoneCliente}, Produto: ${pedido.produtoCliente}, Quantidade: ${pedido.quantidadeProduto} m2, Modo de Telha: ${pedido.modoTelha}, Valor Total: R$ ${pedido.valorTotal.toFixed(2)}`;

    pedidosRegistrados.appendChild(listItem);
    confirmacaoPedidoDiv.style.display = "block";
}

function registrarPedido(nomeCliente, enderecoCliente, emailCliente, telefoneCliente, produtoCliente, quantidadeProduto, modoTelha) {
    const valorTotal = calcularValorTotal(quantidadeProduto);
    const pedido = {
        nomeCliente,
        enderecoCliente,
        emailCliente,
        telefoneCliente,
        produtoCliente,
        quantidadeProduto,
        modoTelha,
        valorTotal
    };

    sendConfirmationEmail(emailCliente);
    displayModeloOrcamento("Modelo de orçamento: ...", pedido);
    registerPedido(pedido);
}

function calcularValorTotal(quantidadeProduto) {
    const precoUnitario = 10;  
    return quantidadeProduto * precoUnitario;
}

function mostrarCadastro() {
    const loginContainer = document.getElementById("loginContainer");
    const cadastroContainer = document.getElementById("cadastroContainer");

    loginContainer.style.display = "none";
    cadastroContainer.style.display = "block";
}

function cadastrarUsuario() {
    const newUsernameInput = document.getElementById("newUsername");
    const newPasswordInput = document.getElementById("newPassword");

    if (newUsernameInput.value && newPasswordInput.value) {
        alert("Usuário cadastrado com sucesso!");
        mostrarLogin();  
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function mostrarLogin() {
    const loginContainer = document.getElementById("loginContainer");
    const cadastroContainer = document.getElementById("cadastroContainer");

    loginContainer.style.display = "block";
    cadastroContainer.style.display = "none";
}
