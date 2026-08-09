// ======================================================
//          COMPONENTES REUTILIZÁVEIS
// ======================================================

let xpAtual = 150;
let xpNecessario = 500;


// ======================================================
//          AGENDA
// ======================================================

function abrirAgenda() {
    criarAgenda();

    const modalAgenda =
        document.querySelector(".modal-agenda");

    if (modalAgenda) {
        modalAgenda.style.display = "flex";
    }
}


function fecharAgenda() {
    const modalAgenda =
        document.querySelector(".modal-agenda");

    if (modalAgenda) {
        modalAgenda.style.display = "none";
    }
}


function criarAgenda() {
    const agendaExistente =
        document.querySelector(".modal-agenda");

    // Evita criar duas agendas na mesma página.
    if (agendaExistente) {
        return;
    }

    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <div class="modal-agenda">
            <div class="conteudo-modal-agenda">

                <button class="botao-fechar-agenda"
                    type="button"> X </button>

                <h2 class="titulo-modal-agenda"> 📅 AGENDA DE HOJE </h2>

                <div class="lista-agendamento">

                    <div class="agendamento">
                        <div class="avatar-paciente">🐶</div>

                        <div class="dados-agendamento">
                            <strong>09:00 - Luna</strong>

                            <span>Canina • Golden Retriever</span>

                            <span>Consulta</span>

                            <p class="queixa-agendamento">
                                <strong>Queixa:</strong>Apatia e falta de apetite há 2 dias.</p>
                        </div>

                        <div class="acoes-agendamento">
                            <span class="status-agendamento">Confirmado</span>

                            <button class="botao-iniciar-atendimento"
                                type="button"
                                data-paciente="luna">Atender</button>
                        </div>
                    </div>


                    <div class="agendamento">
                        <div class="avatar-paciente">
                            🐱
                        </div>

                        <div class="dados-agendamento">
                            <strong>11:30 - Thor</strong>

                            <span>
                                Felina • SRD
                            </span>

                            <span>Exame de sangue</span>

                            <p class="queixa-agendamento">
                                <strong>Queixa:</strong>
                                Exame de sangue de rotina.
                            </p>
                        </div>

                        <div class="acoes-agendamento">
                            <span class="status-agendamento">
                                Confirmado
                            </span>

                            <button
                                class="botao-iniciar-atendimento"
                                type="button"
                                data-paciente="thor"
                            >
                                Atender
                            </button>
                        </div>
                    </div>


                    <div class="agendamento">
                        <div class="avatar-paciente">
                            🐶
                        </div>

                        <div class="dados-agendamento">
                            <strong>14:00 - Mel</strong>

                            <span>
                                Canina • Shih-tzu
                            </span>

                            <span>Retorno</span>

                            <p class="queixa-agendamento">
                                <strong>Queixa:</strong>
                                Retorno para avaliação clínica.
                            </p>
                        </div>

                        <div class="acoes-agendamento">
                            <span
                                class="status-agendamento status-pendente"
                            >
                                Pendente
                            </span>

                            <button
                                class="botao-iniciar-atendimento"
                                type="button"
                                data-paciente="mel"
                            >
                                Atender
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `
    );


    const modalAgenda =
        document.querySelector(".modal-agenda");

    const botaoFecharAgenda =
        document.querySelector(".botao-fechar-agenda");

    const botoesAtender =
        document.querySelectorAll(
            ".botao-iniciar-atendimento"
        );


    // Fecha pelo botão X.
    if (botaoFecharAgenda) {
        botaoFecharAgenda.addEventListener(
            "click",
            fecharAgenda
        );
    }


    // Fecha ao clicar na parte escura.
    if (modalAgenda) {
        modalAgenda.addEventListener(
            "click",
            function (event) {
                if (event.target === modalAgenda) {
                    fecharAgenda();
                }
            }
        );
    }


    // Abre o Consultório ao clicar em Atender.
    botoesAtender.forEach(function (botao) {
        botao.addEventListener(
            "click",
            function () {
                const paciente =
                    botao.dataset.paciente;

                localStorage.setItem(
                    "pacienteSelecionado",
                    paciente
                );

                window.location.href =
                    "consultorio.html";
            }
        );
    });
}

// ====================================================================
//          CENTRAL DE AJUDA
// ====================================================================

function abrirAjuda (){
    const modalAjuda=
    document.querySelector(".modal-ajuda");

    if (modalAjuda) {
    modalAjuda.style.display="flex";
    }
}

function fecharAjuda (){
    const modalAjuda=
    document.querySelector(".modal-ajuda");

    if (modalAjuda) {
    modalAjuda.style.display="none";
    }
}

function criarModalAjuda () {
    const modalExistente =
    document.querySelector(".modal-ajuda");

    if (modalExistente){
        return;
    }

    const modalAjuda=
    document.createElement("div");

    modalAjuda.className="modal-ajuda";

    modalAjuda.innerHTML=`
    <!-- MODAL DA CENTRAL DE AJUDA -->

    <div class="conteudo-modal-ajuda">

        <button class="botao-fechar-ajuda" type="button">X</button>

        <div class="pagina-principal-ajuda">

        <h2 class="titulo-modal-ajuda">❓ CENTRAL DE DÚVIDAS ❓</h2>

        <p class="texto-inicial-ajuda"> Como podemos ajudar? </p>

        <div class="lista-ajuda">

            <button class="item-ajuda" type="button"
            data-ajuda="clinica">
                <span class="icone-ajuda">🏥</span>

                <span class="texto-item-ajuda">
                    <strong>Conhecendo a Clínica</strong>
                    <span>Entenda os ambientes</span>
                </span>
            </button>

            <button class="item-ajuda" type="button"
            data-ajuda="navegacao">
                <span class="icone-ajuda">🧭</span>

                <span class="texto-item-ajuda">
                    <strong>Navegação</strong>
                    <span>Como se mover pelo aplicativo</span>
                </span>
            </button>

            <button class="item-ajuda" type="button"
            data-ajuda="agenda">
                <span class="icone-ajuda">📅</span>

                <span class="texto-item-ajuda">
                    <strong>Agenda</strong>
                    <span>Entenda os atendimentos do dia</span>
                </span>
            </button>

            <button class="item-ajuda" type="button"
            data-ajuda="paciente">
                <span class="icone-ajuda">🩺</span>

                <span class="texto-item-ajuda">
                    <strong>Atender um paciente</strong>
                    <span>Conheça o fluxo clínico</span>
                </span>
            </button>

            <button class="item-ajuda" type="button"
            data-ajuda="helena">
                <span class="icone-ajuda">👩‍⚕️</span>

                <span class="texto-item-ajuda">
                    <strong>Dra. Helena</strong>
                    <span>Conheça sua mentora</span>
                </span>
            </button>

            <button class="item-ajuda" type="button"
            data-ajuda="estudos">
                <span class="icone-ajuda">📚</span>

                <span class="texto-item-ajuda">
                    <strong>Estudos e Treinamentos</strong>
                    <span>Conheça os recursos de aprendizagem</span>
                </span>
            </button>
        </div>
        </div>

        <!-- PÁGINA DE AJUDA: CONHECENDO A CLÍNICA -->
        <div
            class="pagina-ajuda pagina-clinica-ajuda"
            data-pagina-ajuda="clinica">

        <button class="botao-voltar-ajuda" type="button">← Voltar</button>

        <h2 class="titulo-pagina-ajuda">🏥 Conhecendo a Clínica</h2>

        <p class="texto-pagina-ajuda"> • A Clínica é o principal ambiente de simulação do VetAscend.</p>

        <p class="texto-pagina-ajuda"> • Cada ambiente possui uma função dentro da rotina veterinária.</p>

        <p class="texto-pagina-ajuda"> • Durante os atendimentos, você poderá passar por diferentes setores conforme as necessidades de cada paciente.</p>

        <p class="texto-pagina-ajuda"> • Explore os ambientes e acompanhe o funcionamento da clínica ao longo do dia.</p>

        </div>

        <!-- PÁGINA DE AJUDA: NAVEGAÇÃO -->
        <div class="pagina-ajuda pagina-navegacao-ajuda" data-pagina-ajuda = "navegacao">

            <button class="botao-voltar-ajuda" 
            type="button"> Voltar </button>
            
            <h2 class="titulo-pagina-ajuda"> Navegação </h2>

            <p class="texto-pagina-ajuda"> • A barra inferior permite acessar os ambientes da clínica.</p>

            <p class="texto-pagina-ajuda"> • Deslize a barra para os lados para visualizar outros ambientes.</p>

            <p class="texto-pagina-ajuda"> • Toque no ambiente que deseja acessar.</p>
        
            <p class="texto-pagina-ajuda"> • O ambiente destacado indica onde você está no momento.</p>
        </div>

        <!-- PÁGINA DE AJUDA: AGENDA -->
        <div
            class="pagina-ajuda pagina-agenda-ajuda"
            data-pagina-ajuda="agenda">

            <button class="botao-voltar-ajuda" type="button">← Voltar</button>

            <h2 class="titulo-pagina-ajuda">📅 Agenda</h2>

            <p class="texto-pagina-ajuda">A Agenda permite acompanhar os atendimentos programados para o dia.</p>

            <p class="texto-pagina-ajuda">Nela, você pode visualizar os pacientes e os horários dos atendimentos.</p>

            <p class="texto-pagina-ajuda">Os atendimentos não precisam ser realizados na ordem apresentada.</p>

            <p class="texto-pagina-ajuda">Escolha o paciente que deseja acompanhar e siga a rotina da clínica.</p>
        </div>

        <!-- PÁGINA DE AJUDA: ATENDER UM PACIENTE -->
        
        <div
            class="pagina-ajuda pagina-paciente-ajuda"
            data-pagina-ajuda="paciente">
        
            <button class="botao-voltar-ajuda" type="button">← Voltar</button>

            <h2 class="titulo-pagina-ajuda">🩺 Atender um Paciente</h2>

            <p class="texto-pagina-ajuda">Os atendimentos simulam etapas da rotina clínica veterinária.</p>

            <p class="texto-pagina-ajuda">Durante um caso, você poderá coletar informações, avaliar o paciente e tomar decisões clínicas.</p>

            <p class="texto-pagina-ajuda">O fluxo do atendimento pode envolver anamnese, exame físico, exames complementares, diagnóstico e conduta.</p>

            <p class="texto-pagina-ajuda">Observe as informações do caso e avance utilizando seu raciocínio clínico.</p>

        </div>

        <!-- PÁGINA DE AJUDA: DRA. HELENA -->

        <div
            class="pagina-ajuda pagina-helena-ajuda"
            data-pagina-ajuda="helena">

            <button class="botao-voltar-ajuda" type="button">← Voltar</button>

            <h2 class="titulo-pagina-ajuda">👩‍⚕️ Dra. Helena</h2>

            <p class="texto-pagina-ajuda">A Dra. Helena é sua mentora dentro do VetAscend.</p>

            <p class="texto-pagina-ajuda">Durante sua jornada, ela poderá acompanhar seu desempenho e orientar seu aprendizado.</p>

            <p class="texto-pagina-ajuda">Seus feedbacks ajudam a identificar pontos importantes do raciocínio clínico e compreender seus erros.</p>

            <p class="texto-pagina-ajuda">A Dra. Helena não está aqui apenas para entregar respostas, mas para ajudar você a pensar.</p>
        </div>

        <!-- PÁGINA DE AJUDA: ESTUDOS E TREINAMENTOS -->

        <div
            class="pagina-ajuda pagina-estudos-ajuda"
            data-pagina-ajuda="estudos">

            <button class="botao-voltar-ajuda" type="button">← Voltar</button>

            <h2 class="titulo-pagina-ajuda">📚 Estudos e Treinamentos</h2>

            <p class="texto-pagina-ajuda">O VetAscend também possui recursos voltados ao estudo e à prática.</p>

            <p class="texto-pagina-ajuda">Na área de Estudos, você poderá consultar conteúdos organizados para apoiar seu aprendizado.</p>

            <p class="texto-pagina-ajuda">Nos Treinamentos, você poderá praticar através de questões, simulados, flashcards e exercícios.</p>

            <p class="texto-pagina-ajuda">Utilize esses recursos para revisar conteúdos e fortalecer seus conhecimentos.</p>
        
        </div>
    </div>`;

    document.body.appendChild(modalAjuda);
}



function criarAjuda (){
    const modalAjuda =
    document.querySelector(".modal-ajuda");

    const botaoFecharAjuda =
    document.querySelector(".botao-fechar-ajuda");

    const paginaPrincipalAjuda =
    document.querySelector(".pagina-principal-ajuda");

    const botoesVoltarAjuda =
    document.querySelectorAll(".botao-voltar-ajuda");

    const itensAjuda =
    document.querySelectorAll(".item-ajuda");

    const paginasAjuda =
    document.querySelectorAll(".pagina-ajuda");

    if (!modalAjuda){
    return;
    }

    botaoFecharAjuda.addEventListener("click", fecharAjuda);

    modalAjuda.addEventListener("click", function (event) {
        if (event.target === modalAjuda) {
            fecharAjuda();
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
}



function criarModalNotificacoes (){
    const modalExistente=
    document.querySelector(".modal-notificacoes");

    if (modalExistente){
        return;
    }

    const modalNotificacoes=
    document.createElement("div");

    modalNotificacoes.className="modal-notificacoes";

    modalNotificacoes.innerHTML=`
    <div class="conteudo-modal-notificacoes">
                
    <button class="botao-fechar-notificacoes"
    type="button"> X </button>

    <h2 class="titulo-modal-notificacoes"> 🔔 NOTIFICAÇÕES </h2>
    <p class="texto-inicial-notificacoes"> Confira suas correspondências e acompanhe as novidades da sua jornada.</p>

    <div class="lista-notificacoes">

        <!--CARTA CECÍLIA NOTIFICAÇÕES-->
        <button class="carta-notificacao carta-nao-lida"
        type="button"
        data-notificacao="cecilia">
    
        <span class="icone-carta">✉️</span>

        <span class="resumo-carta">

            <strong> Cecília </strong>
            <span>Que bom ter você por aqui!</span>

        </span>

        <span class="indicador-carta">Nova</span>

        <span class="botao-favoritar-carta"
        role="button"
        aria-label="Favoritar carta"> ⭐ </span>

        </button>

        <!--CARTA DA DRA. HELENA NOTIFICAÇÕES-->
        <button class="carta-notificacao carta-nao-lida"
        type="button"
        data-notificacao="helena">
    
        <span class="icone-carta">✉️</span>

        <span class="resumo-carta">

            <strong> Dra. Helena </strong>
            <span>Tenho uma mensagem pra você!</span>

        </span>

        <span class="indicador-carta">Nova</span>

        <span class="botao-favoritar-carta"
        role="button"
        aria-label="Favoritar carta"> ⭐ </span>

        </button>

        <!--CARTA DA ADMINISTRAÇÃO NOTIFICAÇÕES-->
        <button class="carta-notificacao"
        type="button"
        data-notificacao="administracao">
    
        <span class="icone-carta">✉️</span>

        <span class="resumo-carta">

            <strong> Administração da Clínica</strong>
            <span>Conheça melhor a rotina da clínica.</span>

        </span>

        <span class="botao-favoritar-carta"
        role="button"
        aria-label="Favoritar carta"> ⭐ </span>

        </button>

        <!--CARTA DO SISTEMA NOTIFICAÇÕES-->
        <button class="carta-notificacao"
        type="button"
        data-notificacao="vetascend">
    
        <span class="icone-carta">✉️</span>

        <span class="resumo-carta">

            <strong> VetAscend</strong>
            <span>Obrigado por fazer parde desta jornada.</span>

        </span>

        <span class="botao-favoritar-carta"
        role="button"
        aria-label="Favoritar carta"> ⭐ </span>

        </button>

    </div>

    <!-- PÁGINA DA NOTIFICAÇÃO - CECÍLIA -->

    <div
        class="pagina-notificacao" data-pagina-notificacao="cecilia">

        <button class="botao-voltar-notificacao"
        type="button">← Voltar</button>

        <h2 class="titulo-pagina-notificacao">✉️ Cecília</h2>

        <p class="texto-pagina-notificacao">Olá!</p>

        <p class="texto-pagina-notificacao">É um prazer receber você na VetAscend.</p>

        <p class="texto-pagina-notificacao">Meu nome é Cecília e estarei aqui na Recepção para ajudar você sempre que precisar.</p>

        <p class="texto-pagina-notificacao">Desejo uma ótima jornada e muitos aprendizados durante seus atendimentos!</p>

        <p class="texto-pagina-notificacao">Com carinho,</p>

        <strong class="assinatura-notificacao">Cecília 💜</strong>

    </div>

    <!-- PÁGINA DA NOTIFICAÇÃO - DRA. HELENA -->

    <div class="pagina-notificacao" data-pagina-notificacao="helena">

        <button class="botao-voltar-notificacao"
        type="button">← Voltar</button>

        <h2 class="titulo-pagina-notificacao">✉️ Dra. Helena</h2>

        <p class="texto-pagina-notificacao">Olá!</p>

        <p class="texto-pagina-notificacao">Seja muito bem-vinda ao VetAscend.</p>

        <p class="texto-pagina-notificacao">Durante sua jornada estarei ao seu lado para orientar, explicar conceitos e ajudar no seu raciocínio clínico.</p>

        <p class="texto-pagina-notificacao">Não se preocupe em acertar tudo de primeira. Cada caso será uma oportunidade para aprender.</p>

        <p class="texto-pagina-notificacao">Nos vemos em breve.</p>

        <strong class="assinatura-notificacao">Dra. Helena 👩‍⚕️</strong>

    </div>

    <!-- PÁGINA DA NOTIFICAÇÃO - ADMINISTRAÇÃO -->

    <div class="pagina-notificacao"data-pagina-notificacao="administracao">

        <button class="botao-voltar-notificacao"
        type="button">← Voltar</button>

        <h2 class="titulo-pagina-notificacao">✉️ Administração da Clínica</h2>

        <p class="texto-pagina-notificacao">Seja bem-vinda!</p>

        <p class="texto-pagina-notificacao">A clínica está pronta para receber seus primeiros atendimentos.</p>

        <p class="texto-pagina-notificacao">Conforme você evoluir, novos ambientes, recursos e funcionalidades serão desbloqueados.</p>

        <p class="texto-pagina-notificacao">Desejamos uma excelente jornada.</p>

        <strong class="assinatura-notificacao">Administração 🏥</strong>

    </div>

    <!-- PÁGINA DA NOTIFICAÇÃO - VETASCEND -->

    <div class="pagina-notificacao"data-pagina-notificacao="vetascend">

        <button class="botao-voltar-notificacao"
        type="button">← Voltar</button>

        <h2 class="titulo-pagina-notificacao">✉️ VetAscend</h2>

        <p class="texto-pagina-notificacao">Obrigado por fazer parte do VetAscend.</p>

        <p class="texto-pagina-notificacao">Nosso objetivo é tornar o aprendizado da Medicina Veterinária mais prático, envolvente e acessível.</p>

        <p class="texto-pagina-notificacao">Esperamos acompanhar sua evolução por muito tempo.</p>

        <strong class="assinatura-notificacao">Equipe VetAscend 💜</strong>

    </div>
</div>
    `;

    document.body.appendChild(modalNotificacoes);
}



function criarNotificacoes(){
    const modalNotificacoes =
    document.querySelector(".modal-notificacoes");

    const botaoFecharNotificacoes =
    document.querySelector(".botao-fechar-notificacoes");

    const cartasNotificacao =
    document.querySelectorAll(".carta-notificacao");

    const paginasNotificacao =
    document.querySelectorAll(".pagina-notificacao");

    const listaNotificacoes =
    document.querySelector(".lista-notificacoes");

    const botoesVoltarNotificacao =
    document.querySelectorAll(".botao-voltar-notificacao");

    const botoesFavoritarCarta =
    document.querySelectorAll(".botao-favoritar-carta");

    if (!modalNotificacoes){
        return;
    }

    function organizarCartas() {
        const cartasArray = Array.from(cartasNotificacao);
    
        cartasArray.sort(function (cartaA, cartaB) {
            const cartaANaoLida =
                cartaA.classList.contains("carta-nao-lida");
    
            const cartaBNaoLida =
                cartaB.classList.contains("carta-nao-lida");
    
            const cartaAFavorita =
                cartaA.classList.contains("carta-favorita");
    
            const cartaBFavorita =
                cartaB.classList.contains("carta-favorita");
    
            if (cartaANaoLida && !cartaBNaoLida) {
                return -1;
            }
    
            if (!cartaANaoLida && cartaBNaoLida) {
                return 1;
            }
    
            if (cartaAFavorita && !cartaBFavorita) {
                return -1;
            }
    
            if (!cartaAFavorita && cartaBFavorita) {
                return 1;
            }
    
            return 0;
        });
    
        cartasArray.forEach(function (carta) {
            listaNotificacoes.appendChild(carta);
        });
    }

    function abrirNotificacoes () {
        modalNotificacoes.style.display = "flex"; organizarCartas();
    }

    organizarCartas();

    setTimeout(function () {
        botaoNotificacoes=
        document.querySelector(".botao-notificacoes");
    
    
        if (botaoNotificacoes) {
        botaoNotificacoes.addEventListener("click", abrirNotificacoes);
        }
    }, 100);

    botaoFecharNotificacoes.addEventListener("click", function() {
        modalNotificacoes.style.display="none";
    });

    modalNotificacoes.addEventListener("click", function (event) {

        if (event.target===modalNotificacoes) {
            modalNotificacoes.style.display = "none";
        }
    });

    //tudo sobre as TROCAS DE CARTAS DAS NOTIFICAÇÕES

cartasNotificacao.forEach(function (carta) {

    carta.addEventListener("click", function () {

        const assuntoNotificacao = carta.dataset.notificacao;

        const paginaEscolhida =
        document.querySelector(
            `[data-pagina-notificacao="${assuntoNotificacao}"]`

        );

        if (paginaEscolhida) {

            listaNotificacoes.style.display="none";

            paginasNotificacao.forEach(function (pagina) {
                pagina.style.display="none";
            });

            paginaEscolhida.style.display="block";

            carta.classList.remove("carta-nao-lida");

            const indicadorCarta = 
            carta.querySelector(".indicador-carta");

            if (indicadorCarta) {
                indicadorCarta.style.display="none";
            }

            localStorage.setItem("notificacao-"+assuntoNotificacao, "lida");
        };

        organizarCartas();
    });

});

cartasNotificacao.forEach(function(carta) {

    const assuntoNotificacao =
    carta.dataset.notificacao;

    const estadoCarta = 
    localStorage.getItem("notificacao-" + assuntoNotificacao);

    if (estadoCarta === "lida") {
        carta.classList.remove("carta-nao-lida");

        const indicadorCarta =
        carta.querySelector(".indicador-carta");

        if(indicadorCarta) {
            indicadorCarta.style.display ="none";
        }
    }
});

//voltar para a lista de notificações 
botoesVoltarNotificacao.forEach(function (botao) {
    botao.addEventListener("click", function () {

        paginasNotificacao.forEach(function (pagina) {
            pagina.style.display="none";
        });

        listaNotificacoes.style.display="flex";
    });
});

// FAVORITAR CARTAS

botoesFavoritarCarta.forEach(function (botaoFavorito) {

    botaoFavorito.addEventListener("click", function (event) {

        event.stopPropagation();

        const carta = botaoFavorito.closest(".carta-notificacao");

        const assuntoNotificacao = carta.dataset.notificacao;

        carta.classList.toggle("carta-favorita");

        if (carta.classList.contains("carta-favorita")) {

            botaoFavorito.textContent = "★";

            localStorage.setItem(
                "favorita-" + assuntoNotificacao,"sim");

        } else {

            botaoFavorito.textContent = "☆";

            localStorage.removeItem("favorita-" + assuntoNotificacao);
        }

        organizarCartas();

    });
});

//recuperar favoritas
cartasNotificacao.forEach(function (carta) {

    const assuntoNotificacao =carta.dataset.notificacao;

    const cartaFavorita =
        localStorage.getItem("favorita-" + assuntoNotificacao);

    if (cartaFavorita === "sim") {

        carta.classList.add("carta-favorita");

        const botaoFavorito =carta.querySelector(".botao-favoritar-carta");

        if (botaoFavorito) {
            botaoFavorito.textContent = "★";}
    }

    organizarCartas();
    
});

}

// ====================================================================
//          BARRA SUPERIOR
// ====================================================================

function criarBarraSuperior(opcoes = {}) {
    const barraSuperior =
        document.getElementById("barra-superior");

    if (!barraSuperior) {
        return;
    }

    barraSuperior.innerHTML = `
        <header class="barra-superior">

            <div class="perfil-jogador">
                <div class="avatar-jogador"></div>

                <div class="dados-jogador">
                    <p class="nome-jogador">
                        Jogador
                    </p>

                    <div class="nivel-jogador">
                        <span class="texto-nivel">
                            Nível 1
                        </span>
                    </div>

                    <div class="progresso-xp">
                        <div class="barra-xp"></div>
                    </div>

                    <span class="texto-xp">
                        150/500 XP
                    </span>
                </div>
            


            <div class="informacoes-dia">
                <div class="info-data">
                    <span class="dia-data">
                        📅 17 Jun • Terça
                    </span>
                </div>

                <div class="info-hora">
                    <span class="hora-atual">
                        ⏰ 16:41 • Tarde
                    </span>
                </div>

                <div class="info-clima">
                    <span class="clima-atual">
                        ☀️ Clima: Ensolarado
                    </span>
                </div>
            </div>


            <div class="acoes-recepcao">
                <button
                    class="botao-abrir-agenda-superior"
                    type="button"
                >
                    📅
                </button>

                <button
                    class="botao-notificacoes"
                    type="button"
                >
                    🔔
                </button>

                <button
                    class="botao-ajuda"
                    type="button"
                >
                    ?
                </button>
            </div>
        </div>
    </header>
    `;


    const diaData =
        barraSuperior.querySelector(".dia-data");

    const horaAtual =
        barraSuperior.querySelector(".hora-atual");

    const barraXp =
        barraSuperior.querySelector(".barra-xp");

    const textoXp =
        barraSuperior.querySelector(".texto-xp");

    const textoNivel =
        barraSuperior.querySelector(".texto-nivel");


    function atualizarXp() {
        const porcentagemXp =
            (xpAtual / xpNecessario) * 100;

        barraXp.style.width =
            porcentagemXp + "%";

        const nivelAtual =
            Math.floor(xpAtual / xpNecessario) + 1;

        textoXp.textContent =
            xpAtual + "/" + xpNecessario + " XP";

        textoNivel.textContent =
            "Nível " + nivelAtual;
    }


    function atualizarDataHora() {
        const agora = new Date();

        const dia = agora.getDate();

        const meses = [
            "Jan","Fev","Mar","Abr","Mai","Jun",
            "Jul","Ago","Set","Out","Nov","Dez"
        ];

        const diasSemana = [
            "Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"
        ];

        const mes =meses[agora.getMonth()];

        const diaSemana =diasSemana[agora.getDay()];

        const dataFormatada ="📅 " +dia +" " +mes +" • " +diaSemana;

        const horaFormatada =
            agora.toLocaleTimeString("pt-BR",{hour: "2-digit", minute: "2-digit"}
            );

        const hora = agora.getHours();

        let periodo;

        if (hora < 12) {
            periodo = "Manhã";
        } else if (hora < 18) {
            periodo = "Tarde";
        } else {
            periodo = "Noite";
        }

        diaData.textContent = dataFormatada;

        horaAtual.textContent ="⏰ " +horaFormatada +" • " +periodo;
    }


    atualizarXp();
    atualizarDataHora();


    const botaoAgendaSuperior =
        barraSuperior.querySelector(".botao-abrir-agenda-superior");

    const botaoNotificacoes =
        barraSuperior.querySelector(".botao-notificacoes");

    const botaoAjuda =
        barraSuperior.querySelector(".botao-ajuda");


    // A Agenda pertence completamente ao componentes.js.
    if (botaoAgendaSuperior) {
        botaoAgendaSuperior.addEventListener("click",abrirAgenda);
    }


    if (botaoNotificacoes && opcoes.aoClicarNotificacoes) {
        botaoNotificacoes.addEventListener("click",opcoes.aoClicarNotificacoes);
    }


    if (botaoAjuda) {
        botaoAjuda.addEventListener("click",abrirAjuda);
    }


    criarAgenda();
    criarModalAjuda();
    criarAjuda();
    criarModalNotificacoes();
    criarNotificacoes();
}


// ======================================================
//          BARRA DE NAVEGAÇÃO
// ======================================================

function criarBarraNavegacao(ambienteAtivo) {
    const areaNavegacao=
    document.createElement("div");

    areaNavegacao.className="area-navegacao-ambientes";

    const barraNavegacao=
    document.createElement("nav");

    barraNavegacao.className="barra-navegacao-ambientes";

    barraNavegacao.innerHTML=`

    <button class="item-ambiente botao-recepcao"
    data-tela="recepcao"
    type="button">
        <span class="icone-ambiente">🏠</span>
        <span class="nome-ambiente">RECEPÇÃO</span>
    </button>

    <button class="item-ambiente botao-consultorio" 
    data-tela="consultorio"
    type="button">
        <span class="icone-ambiente">🩺</span>
        <span class="nome-ambiente">CONSULTÓRIO</span>
    </button>

    <button class="item-ambiente" 
    type="button">
        <span class="icone-ambiente">🐾</span>
        <span class="nome-ambiente">SALA DE ESPERA</span>
    </button>

    <button class="item-ambiente" 
    type="button">
        <span class="icone-ambiente">🔬</span>
        <span class="nome-ambiente">LABORATÓRIO</span>
    </button> 
    
    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">🩻</span>
        <span class="nome-ambiente">CENTRO DE IMAGEM</span>
    </button>    

    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">🛏️</span>
        <span class="nome-ambiente">INTERNAÇÃO</span>
    </button>

    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">🩹</span>
        <span class="nome-ambiente">CENTRO CIRÚRGICO</span>
    </button>

    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">💊</span>
        <span class="nome-ambiente">FARMÁCIA</span>
    </button>

    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">📈</span>
        <span class="nome-ambiente">ADMINISTRAÇÃO</span>
    </button>

    <button class="item-ambiente" type="button">
        <span class="icone-ambiente">👤</span>
        <span class="nome-ambiente">PERFIL</span>
    </button>
    `;

    const botaoAtivo=
    barraNavegacao.querySelector(`.botao-${ambienteAtivo}`);

    if (botaoAtivo){
        botaoAtivo.classList.add("ambiente-ativo");
    }

    const botoesNavegacao=
    barraNavegacao.querySelectorAll("[data-tela]");

    botoesNavegacao.forEach((botao) =>{
        botao.addEventListener("click", () =>{

            const tela=
            botao.dataset.tela;

            window.location.href= `${tela}.html`;
        });
    });

    areaNavegacao.appendChild(barraNavegacao);

    document.body.appendChild(areaNavegacao);
}


// ===========================================
// Painel de ação 
// ===========================================

function criarPainelAcao (titulo,texto, textoBotao, idBotao) {

    return `
    
        <section class="painel-acao">

            <h2 class="painel-titulo"> ${titulo} </h2>

            <p class="painel-texto"> ${texto} </p>

            <button
            id="${idBotao}"
            class="painel-botao"> ${textoBotao} </button>

        </section>
    `;
}