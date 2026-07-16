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

const botaoAgendaSuperior =
document.querySelector(".botao-abrir-agenda-superior");

const modalAgenda =
document.querySelector(".modal-agenda");

const botaoFecharAgenda =
document.querySelector(".botao-fechar-agenda");

const botaoAjuda =
document.querySelector(".botao-ajuda");

const modalAjuda =
document.querySelector(".modal-ajuda");

const botaoFecharAjuda =
document.querySelector(".botao-fechar-ajuda");

const paginaPrincipalAjuda =
document.querySelector(".pagina-principal-ajuda");

const paginaNavegacaoAjuda =
document.querySelector(".pagina-navegacao-ajuda");

const botoesVoltarAjuda =
document.querySelectorAll(".botao-voltar-ajuda");

const itensAjuda =
document.querySelectorAll(".item-ajuda");

const paginasAjuda =
document.querySelectorAll(".pagina-ajuda");



let passoTutorial = 0; //guarda em qual passo do tutorial estamos

let xpAtual = 150;
let xpNecessario = 500;


//tudo sobre o XP
function atualizarXp () {
    const porcentagemXp = (xpAtual/xpNecessario)*100;

    barraXp.style.width = porcentagemXp + "%";

    const nivelAtual = Math.floor(xpAtual/xpNecessario)+1;

    textoXp.textContent = xpAtual + "/" + xpNecessario + "XP";

    textoNivel.textContent = "Nível " +nivelAtual;
}

atualizarXp();


//tudo sobre a Data e Hora
function atualizarDataHora() {
    const agora = new Date();

    const dia = agora.getDate();

    const meses = [
        "Jan", "Fev", "Mar", "Abr",
        "Mai", "Jun", "Jul", "Ago",
        "Set", "Out", "Nov", "Dez"
    ];

    const diasSemana = [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ];

    const mes = meses[agora.getMonth()];
    const diaSemana = diasSemana[agora.getDay()];

    const dataFormatada = "📅" + dia + " " + mes + " • " + diaSemana;

    const horaFormatada = 
    agora.toLocaleTimeString("pt-BR", {
        hour:"2-digit",
        minute:"2-digit"
    });

    const hora = agora.getHours();

    let periodo;

    if (hora < 12 ) {
        periodo = "Manhã";
    } else if (hora < 18) {
        periodo = "Tarde";
    } else {
        periodo = "Noite";
    }

    diaData.textContent = dataFormatada;
    horaAtual.textContent = "⏰ " + horaFormatada + " • " + periodo;

}

atualizarDataHora();


// tudo sobre a AJUDA 
function abrirAjuda () {
    modalAjuda.style.display="flex";
}

botaoAjuda.addEventListener("click", abrirAjuda);

botaoFecharAjuda.addEventListener("click", function 
() {
    modalAjuda.style.display = "none";
});

modalAjuda.addEventListener("click", function (event) {
    if (event.target === modalAjuda) {
        modalAjuda.style.display = "none";
    }
});

//troca de página da central de ajuda
itensAjuda.forEach(function (item) { 
    item.addEventListener("click", function () {

        const assuntoAjuda = item.dataset.ajuda;

        const paginaEscolhida = document.querySelector(
            `[data-pagina-ajuda="${assuntoAjuda}"]`
        );

        if (paginaEscolhida) {
            paginaPrincipalAjuda.style.display="none";
            paginaEscolhida.style.display="block";
        }    
    });
});

botoesVoltarAjuda.forEach(function (botao) {
    botao.addEventListener("click", function () {


        paginasAjuda.forEach(function (pagina) {
            pagina.style.display="none";

        });    
        paginaPrincipalAjuda.style.display="block";
    });
});



// tudo sobre a CECÍLIA 
if (nomeUsuario) {
    textoCecilia.textContent = "Oii, "+nomeUsuario+ "! Que bom ter você por aqui.";
    nomeJogador.textContent = nomeUsuario;
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


//tudo sobre o ABRIR AGENDA
function abrirAgenda() {
    modalAgenda.style.display = "flex";

}

botaoAbrirAgenda.addEventListener("click", abrirAgenda);

botaoAgendaSuperior.addEventListener("click", abrirAgenda);


botaoFecharAgenda.addEventListener("click", function () {
    modalAgenda.style.display = "none";
});

modalAgenda.addEventListener("click",function (event) {
    if (event.target === modalAgenda) {  //identifica o elemnto que recebeu o clique
        modalAgenda.style.display = "none";  //se clicar fora da tela da agenda ele fecha tbm
    }
});