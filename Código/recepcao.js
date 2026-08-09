const falaCecilia =
document.querySelector(".fala-cecilia");

const textoCecilia =
document.querySelector(".texto-cecilia");

const nomeJogador = 
document.querySelector(".nome-jogador");

const nomeUsuario =
localStorage.getItem("nomeUsuario");

const tutorialRecepcaoConcluido =
localStorage.getItem("tutorialRecepcaoConcluido");

const opcoesCecilia =
document.querySelector(".opcoes-cecilia");

const botaoExplorar =
document.querySelector(".botao-explorar");

const botaoConhecer =
document.querySelector(".botao-conhecer");

const botaoContinuar =
document.querySelector(".botao-continuar");

const diaData = 
document.querySelector(".dia-data");

const horaAtual =
document.querySelector(".hora-atual");

const barraXp =
document.querySelector(".barra-xp");

const textoXp =
document.querySelector(".texto-xp");

const textoNivel =
document.querySelector(".texto-nivel");

const botaoAbrirAgenda =
document.querySelector(".botao-abrir-agenda");

let botaoNotificacoes;

criarBarraSuperior ({
    aoClicarAjuda() {
        modalAjuda.style.display="flex";
    }
});

criarBarraNavegacao("recepcao");

let passoTutorial = 0; //guarda em qual passo do tutorial estamos
 

// ======================================================================================================================================
// CECÍLIA
// ====================================================================================================================================== 
if (nomeUsuario) {
    if (textoCecilia) {
    textoCecilia.textContent = "Oii, "+nomeUsuario+ "! Que bom ter você por aqui.";
    }
    if (nomeJogador) {
    nomeJogador.textContent = nomeUsuario;
    }
}

if (tutorialRecepcaoConcluido !=="sim") {

    setTimeout(function() {
    falaCecilia.style.opacity = "1";
},1500);

setTimeout(function() {
    textoCecilia.textContent = "Eu sou a Cecília. Cuido da recepção por aqui e vou estar por perto sempre que precisar!";

}, 4000);

setTimeout(function() {
    textoCecilia.textContent = "Antes de começar, quer que eu te mostre como tudo funciona?";

    opcoesCecilia.style.display = "flex";
}, 7500);

} else {
    setTimeout(function (){
        textoCecilia.textContent= "Que bom te ver de novo, " +nomeUsuario+"!";

        falaCecilia.style.opacity = "1";
    },1500);
}

function iniciarTutorial () {  //cria uma função que inicia o tutorial
    passoTutorial = 1; //define que o tutorial começou no passo 1
    textoCecilia.textContent = "Perfeito! Então vem comigo. Vou te mostrar a recepção.";
    botaoContinuar.style.display = "block";
}

botaoExplorar.addEventListener("click",function () {
    opcoesCecilia.style.display="none";

    textoCecilia.textContent = "Tudo bem! Fique a vontade para explorar. Se precisar de mim, estarei aqui.";
});

botaoConhecer.addEventListener("click",function () {
    opcoesCecilia.style.display="none";

    iniciarTutorial();  //executa a função do tutorial
});

botaoContinuar.addEventListener("click",function () {
    if (passoTutorial === 1) {
        passoTutorial = 2;

        textoCecilia.textContent = "Antes de tudo, preciso te contar uma coisa: aqui no VetAscend a clínica tem uma rotina própria.";
    
    } else if (passoTutorial === 2) {
        passoTutorial = 3;

        textoCecilia.textContent = "Os pacientes chegam ao longo do dia, cada um com uma necessidade diferente. Alguns vêm para consultas simples enquanto outros podem precisar de atendimento rápido";
    
    } else if (passoTutorial === 3) {
        passoTutorial = 4;

        textoCecilia.textContent = "Na agenda, você acompanha os pacientes previstos para o dia e organiza os atendimentos.";
    
    } else if (passoTutorial === 4) {
        passoTutorial = 5;

        textoCecilia.textContent = "Quando chegar a hora de atender, você vai acompanhar o caso desde o ínicio. Triagem, anamnese, exames, diagnósticos e conduta.";

    } else if (passoTutorial === 5) {
        passoTutorial = 6;

        textoCecilia.textContent = "Você não precisa saber tudo de primeira. A ideia aqui é justamente praticar, pensar e aprender com as decisões que toma.";

    } else if (passoTutorial === 6) {
        passoTutorial = 7;

        textoCecilia.textContent = "Os ambientes da clínica tem funções diferentes. Você pode acessa-los na barra de navegação abaixo. Temos Consultório, Internação, Farmácia e algumas outras... você vai usar cada espaço conforme os casos exigirem.";

    } else if (passoTutorial === 7) {
        passoTutorial = 8;

        textoCecilia.textContent = "Também existe muito além dos atendimentos. Você pode estudar, treinar e consultar referências na sala da Biblioteca. Pode também acompanhar sua evolução pessoal em Perfil.";

    } else if (passoTutorial === 8) {
        passoTutorial = 9;

        textoCecilia.textContent = "E se em algum momento você sentir que se perdeu, pode me chamar aqui na recepção. Para dúvidas clínicas, você ainda vai conhecer alguém muito importante!.";

    } else if (passoTutorial === 9) {
        passoTutorial = 10;

        textoCecilia.textContent = "Agora sim, respira, olha ao redor e fique à vontade. Sua jornada no VetAscend começa aqui.";
        botaoContinuar.textContent ="Começar minha Jornada!";
    
    } else if (passoTutorial === 10) {
        passoTutorial = 0;

        textoCecilia.textContent = "Prontinho! Estarei aqui se precisar.";
        botaoContinuar.style.display="none";
        
        localStorage.setItem("tutorialRecepcaoConcluido","sim"); //salva que o tutorial ja foi concluido
        
    }
});


// ===========================================================================================================================
//                   ABRIR AGENDA DA CECILIA
// ===========================================================================================================================

if (botaoAbrirAgenda) {
botaoAbrirAgenda.addEventListener("click", abrirAgenda);
}
