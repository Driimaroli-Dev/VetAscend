const campoNome = 
document.querySelector(".campo-nome");

const campoEmailCadastro = 
document.querySelector(".campo-email-cadastro");

const campoSenhaCadastro = 
document.querySelector(".campo-senha-cadastro");

const campoConfirmarSenha = 
document.querySelector(".campo-confirmar-senha");

const botaoFinalizarCadastro = 
document.querySelector(".botao-finalizar-cadastro");

const mensagemErroCadastro = 
document.querySelector(".mensagem-erro-cadastro");

const campoPerfil =
document.querySelector(".campo-perfil");

botaoFinalizarCadastro.addEventListener("click",
function () {
    mensagemErroCadastro.textContent="";
    mensagemErroCadastro.style.color = "#c0392b";
    if (
        campoNome.value ==="" &&
        campoEmailCadastro.value ==="" &&
        campoSenhaCadastro.value ==="" &&
        campoConfirmarSenha.value ===""
    ) {
        mensagemErroCadastro.textContent = "Preencha todos os campos!";
    } else if (campoNome.value ==="") {
        mensagemErroCadastro.textContent = "Preencha o nome!";
    } else if (campoEmailCadastro.value === "") {
        mensagemErroCadastro.textContent = "Preencha o E-mail!";
    } else if (!campoEmailCadastro.value.includes("@")) {
        mensagemErroCadastro.textContent = "Digite um E-mail válido!";
    } else if (campoSenhaCadastro.value === "") {
        mensagemErroCadastro.textContent = "Preencha a Senha!";
    } else if (campoConfirmarSenha.value === "") {
        mensagemErroCadastro.textContent = "Confirme a Senha!";
    } else if (campoPerfil.value === "") {
        mensagemErroCadastro.textContent = "Selecione seu perfil!";
    } else if (campoSenhaCadastro.value !== campoConfirmarSenha.value) {
        mensagemErroCadastro.textContent = "As senhas não coincidem!";
    } else {
        mensagemErroCadastro.textContent = "Cadastro realizado com sucesso!";
        mensagemErroCadastro.style.color = "green";

        localStorage.setItem("nomeUsuario",campoNome.value);
        localStorage.setItem("emailUsuario",campoEmailCadastro.value);
        localStorage.setItem("perfilUsuario",campoPerfil.value);

        setTimeout(function () {
            window.location.href = "index.html";
        },2000);
    }})
