const botaoEntrar = document.querySelector(".botao-entrar"); //encontra o botão entrar no html e guarda no javascript

const campoEmail = 
document.querySelector(".campo-email"); //encontra o campo email no html

const campoSenha = 
document.querySelector(".campo-senha"); //encontra o campo senha no html

const mensagemErro = 
document.querySelector(".mensagem-erro"); //encontra o espaço onde vai aparecer a mensagem de erro

const botaoMostrarSenha =
document.querySelector(".botao-mostrar-senha");  //encontra botao que mostra e esconde senha 

const botaoCriarConta =
document.querySelector(".botao-criar-conta");

const tituloLogin =
document.querySelector(".card-login h1");

const nomeUsuarioSalvo =
localStorage.getItem("nomeUsuario");

if (nomeUsuarioSalvo) {
    tituloLogin.textContent = "Bem-vinda, "+nomeUsuarioSalvo+"!";
}

botaoEntrar.addEventListener("click",function() {  // quando clicar começa uma ação
    mensagemErro.textContent = ""; //limpa qualquer mensagem de erro anterior

    if (campoEmail.value === "" && campoSenha.value === "") {  //verifica email e senha
        mensagemErro.textContent = "Preencha o E-mail e a Senha!"; //mostra um aviso caso esteja algum vazio
    
    }else if (campoEmail.value ==="") {
        mensagemErro.textContent = "Preencha o E-mail!";

    }else if (!campoEmail.value.includes("@")){
        mensagemErro.textContent = "Digite um E-mail válido!";    

    }else if (campoSenha.value ==="") {
        mensagemErro.textContent = "Preencha a Senha!";   
    
    }else{  
    window.location.href = "recepcao.html";    // o que deve acontecer
    }
});  // faz o botão responder quando o usuário clicar

botaoMostrarSenha.addEventListener("click",
function() {
    if (campoSenha.type === "password") {
    campoSenha.type = "text";  //muda o campo senha pra visivel
    botaoMostrarSenha.textContent = "🙈";
    }else{
        campoSenha.type = "password";
        botaoMostrarSenha.textContent = "👀";
    }
});

botaoCriarConta.addEventListener("click",
function () {
    window.location.href = "cadastro.html";
})


