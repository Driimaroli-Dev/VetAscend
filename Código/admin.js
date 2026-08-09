/* ==========================================================
   VETASCEND — CENTRO DE ADMINISTRAÇÃO
========================================================== */

"use strict";

/* ==========================================================
   ELEMENTOS GERAIS
========================================================== */

const telas = document.querySelectorAll(".tela-admin");
const itensMenu = document.querySelectorAll(".item-menu");
const barraLateral = document.querySelector("#barra-lateral");
const fundoMenu = document.querySelector("#fundo-menu-mobile");
const botaoAbrirMenu = document.querySelector("#botao-menu-mobile");
const botaoFecharMenu = document.querySelector("#botao-fechar-menu-mobile");
const tituloPagina = document.querySelector("#titulo-pagina-admin");
const descricaoPagina = document.querySelector("#descricao-pagina-admin");
const areaNotificacoes = document.getElementById("area-notificacoes");

/* ==========================================================
   ELEMENTOS DO MÓDULO DOENÇAS
========================================================== */

const modalDoenca = document.querySelector("#modal-doenca");
const tituloModalDoenca = document.querySelector("#titulo-modal-doenca");
const formularioDoenca = document.querySelector("#formulario-doenca");
const botaoNovaDoenca = document.querySelector("#botao-nova-doenca");
const botaoFecharModal = document.querySelector("#fechar-modal-doenca");
const botaoCancelarDoenca = document.querySelector("#botao-cancelar-doenca");
const botaoSalvarDoenca = document.querySelector("#botao-salvar-doenca");
const corpoTabelaDoencas = document.querySelector("#lista-doencas");

const campoNomeDoenca = document.querySelector("#nome-doenca");
const campoNomeCientifico = document.querySelector("#nome-cientifico-doenca");
const campoCategoria = document.querySelector("#categoria-doenca");
const campoDificuldade = document.querySelector("#dificuldade-doenca");
const campoStatus = document.querySelector("#status-doenca");
const campoResumo = document.querySelector("#resumo-doenca");
const campoEtiologia = document.querySelector("#etiologia-doenca");
const campoSistema = document.querySelector("#sistema-doenca");
const campoSinais = document.querySelector("#sinais-doenca");
const campoExames = document.querySelector("#exames-doenca");
const campoTratamento = document.querySelector("#tratamento-doenca");
const campoPrognostico = document.querySelector("#prognostico-doenca");
const campoReferencias = document.querySelector("#referencias-doenca");
const campoImagens = document.querySelector("#imagens-doenca");

const pesquisaDoenca = document.querySelector("#pesquisa-doenca");
const filtroEspecie = document.querySelector("#filtro-especie");
const filtroSistema = document.querySelector("#filtro-sistema");
const filtroDificuldade = document.querySelector("#filtro-dificuldade");
const filtroStatus = document.querySelector("#filtro-status");

const abasDoenca = document.querySelectorAll("#modal-doenca .aba");
const paginasDoenca = document.querySelectorAll("#modal-doenca .pagina-modal");

const barraProgressoDoenca = document.getElementById("barra-progresso-doenca");
const textoProgressoDoenca = document.getElementById("texto-progresso-doenca");
const porcentagemProgressoDoenca = document.getElementById("porcentagem-progresso-doenca");


/*ELEMENTOS DO FORMULARIO */
const campoTipoCausa = document.getElementById("tipo-causa-doenca");
const campoAgenteEtiologico = document.getElementById("agente-etiologico-doenca");
const campoTransmissao = document.getElementById("transmissao-doenca");
const campoFatoresPredisponentes = document.getElementById("fatores-predisponentes-doenca");
const campoEtiologiaDetalhada = document.getElementById("etiologia-detalhada-doenca");
const campoObservacoesEspecies = document.getElementById("observacoes-especies-doenca");
const campoObservacoesSistemas = document.getElementById("observacoes-sistemas");

let idDoencaEmEdicao = null;

/* ==========================================================
   ELEMENTOS DO MÓDULO NOVO CASO
========================================================== */

const botaoNovoCaso = document.getElementById("botao-novo-caso");
const modalCaso = document.getElementById("modal-caso");

const tituloModalCaso = document.getElementById("titulo-modal-caso");

const formularioCaso = document.getElementById("formulario-caso");

const botaoFecharModalCaso = document.getElementById("fechar-modal-caso");

const botaoCancelarCaso = document.getElementById("botao-cancelar-caso");

const botaoSalvarCaso = document.getElementById("botao-salvar-caso");

const campoTituloCaso = document.getElementById("titulo-caso");

const campoDoencaCaso = document.getElementById("doenca-caso");

const campoEspecieCaso = document.getElementById("especie-caso");

const campoDificuldadeCaso = document.getElementById("dificuldade-caso");

const campoTipoAtendimentoCaso = document.getElementById("tipo-atendimento-caso");

const campoStatusCaso = document.getElementById("status-caso");

const campoNomePacienteCaso = document.getElementById("nome-paciente-caso");

const campoSexoPacienteCaso = document.getElementById("sexo-paciente-caso");

const campoIdadePacienteCaso = document.getElementById("idade-paciente-caso");

const campoRacaPacienteCaso = document.getElementById("raca-paciente-caso");

const campoPesoPacienteCaso = document.getElementById("peso-paciente-caso");

const campoNomeTutorCaso = document.getElementById("nome-tutor-caso");

const campoQueixaPrincipalCaso = document.getElementById("queixa-principal-caso");

const campoHistoriaClinicaCaso = document.getElementById("historia-clinica-caso");

const corpoTabelaCasos = document.getElementById("lista-casos");

let idCasoEmEdicao = null;

/* ==========================================================
   ELEMENTOS DO GERADOR DE PLANTÕES
========================================================== */

const botaoNovoPlantao = document.getElementById("botao-novo-plantao");

const modalPlantao = document.getElementById("modal-plantao");

const tituloModalPlantao = document.getElementById("titulo-modal-plantao");

const formularioPlantao = document.getElementById("formulario-plantao");

const botaoFecharModalPlantao = document.getElementById("fechar-modal-plantao");

const botaoCancelarPlantao = document.getElementById("botao-cancelar-plantao");

const botaoSalvarRascunhoPlantao = document.getElementById("botao-salvar-rascunho-plantao");

const botaoGerarPlantao = document.getElementById("botao-gerar-plantao");

const botaoGerarPreviaPlantao = document.getElementById("botao-gerar-previa-plantao");

const botaoLimparPreviaPlantao = document.getElementById("botao-limpar-previa-plantao");

const campoNomePlantao = document.getElementById("nome-plantao");

const campoDataPlantao = document.getElementById("data-plantao");

const campoTurnoPlantao = document.getElementById("turno-plantao");

const campoHorarioInicioPlantao = document.getElementById("horario-inicio-plantao");

const campoHorarioFimPlantao = document.getElementById("horario-fim-plantao");

const campoStatusPlantao = document.getElementById("status-plantao");

const campoQuantidadePacientesPlantao =
    document.getElementById("quantidade-pacientes-novo-plantao");

const campoDificuldadePlantao =
    document.getElementById("dificuldade-novo-plantao");

const campoFrequenciaEmergenciasPlantao =
    document.getElementById("frequencia-emergencias-plantao");

const campoRepeticaoCasosPlantao =
    document.getElementById("repeticao-casos-plantao");

const campoIntervaloAtendimentosPlantao =
    document.getElementById("intervalo-atendimentos-plantao");

    const pesquisaBasesPlantao =
    document.getElementById("pesquisa-bases-plantao");

const selecionarTodasBasesPlantao =
    document.getElementById("selecionar-todas-bases-plantao");

const listaBasesDisponiveisPlantao =
    document.getElementById("lista-bases-disponiveis-plantao");

const quantidadeBasesDisponiveisPlantao =
    document.getElementById("quantidade-bases-disponiveis-plantao");

const quantidadeBasesSelecionadasPlantao =
    document.getElementById("quantidade-bases-selecionadas-plantao");

const tituloBasesPlantao =
    document.getElementById("titulo-bases-plantao");

const descricaoBasesPlantao =
    document.getElementById("descricao-bases-plantao");

const listaPreviaPacientesPlantao =
    document.getElementById("lista-previa-pacientes-plantao");

const corpoTabelaPlantoes =
    document.getElementById("corpo-tabela-plantoes");

let idPlantaoEmEdicao = null;

let previaPacientesPlantao = [];


/* ==========================================================
   DADOS DAS TELAS
========================================================== */

const paginas = {
    dashboard: { titulo: "Dashboard", descricao: "Gerencie todo o ecossistema do VetAscend." },
    doencas: { titulo: "Banco de Doenças", descricao: "Cadastro das doenças utilizadas em todo o sistema." },
    casos: { titulo: "Casos Clínicos", descricao: "Gerenciamento dos casos simulados." },
    exames: { titulo: "Exames", descricao: "Banco de exames laboratoriais e de imagem." },
    protocolos: { titulo: "Protocolos", descricao: "Protocolos clínicos e procedimentos." },
    plantoes: { titulo: "Gerador de Plantões", descricao: "Configuração dos plantões automáticos." },
    farmacos: { titulo: "Fármacos", descricao: "Cadastro de medicamentos." },
    biblioteca: { titulo: "Biblioteca", descricao: "Conteúdos didáticos." },
    questoes: { titulo: "Questões e Simulados", descricao: "Gerenciamento dos exercícios." },
    flashcards: { titulo: "Flashcards", descricao: "Banco de flashcards." },
    referencias: { titulo: "Tabelas de Referência", descricao: "Valores fisiológicos e tabelas." },
    usuarios: { titulo: "Usuários", descricao: "Gerenciamento dos usuários." },
    configuracoes: { titulo: "Configurações", descricao: "Preferências do sistema." }
};

/* ==========================================================
   NAVEGAÇÃO
========================================================== */

function abrirTela(nomeTela) {
    telas.forEach(tela => tela.classList.remove("ativa"));

    const telaSelecionada = document.querySelector("#tela-" + nomeTela);
    if (telaSelecionada) telaSelecionada.classList.add("ativa");

    itensMenu.forEach(botao => botao.classList.remove("ativo"));

    const botaoSelecionado = document.querySelector(`[data-secao="${nomeTela}"]`);
    if (botaoSelecionado) botaoSelecionado.classList.add("ativo");

    if (paginas[nomeTela]) {
        tituloPagina.textContent = paginas[nomeTela].titulo;
        descricaoPagina.textContent = paginas[nomeTela].descricao;
    }
}

itensMenu.forEach(botao => {
    botao.addEventListener("click", () => {
        abrirTela(botao.dataset.secao);
        fecharMenuMobile();
    });
});

document.querySelectorAll("[data-atalho]").forEach(atalho => {
    atalho.addEventListener("click", () => abrirTela(atalho.dataset.atalho));
});

/* ==========================================================
   MENU MOBILE
========================================================== */

function abrirMenuMobile() {
    barraLateral?.classList.add("ativa");
    fundoMenu?.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharMenuMobile() {
    barraLateral?.classList.remove("ativa");
    fundoMenu?.classList.remove("ativo");
    document.body.style.overflow = "";
}

botaoAbrirMenu?.addEventListener("click", abrirMenuMobile);
botaoFecharMenu?.addEventListener("click", fecharMenuMobile);
fundoMenu?.addEventListener("click", fecharMenuMobile);

/* ==========================================================
   UTILITÁRIOS
========================================================== */

function gerarProximoId(lista) {
    if (!lista.length) return 1;
    return Math.max(...lista.map(item => Number(item.id) || 0)) + 1;
}

function escaparHTML(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function atualizarTexto(seletor, valor) {
    const elemento = document.querySelector(seletor);
    if (elemento) elemento.textContent = valor;
}

function linhasParaArray(valor) {
    return String(valor || "")
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean);
}

function arrayParaLinhas(lista) {
    return Array.isArray(lista) ? lista.join("\n") : "";
}

function dataAtualFormatada() {
    return new Intl.DateTimeFormat("pt-BR").format(new Date());
}

function mostrarNotificacao(
    mensagem,
    tipo = "info",
    titulo = ""
) {
    if (!areaNotificacoes) {
        console.log(mensagem);
        return;
    }

    const icones = {
        sucesso: "✓",
        aviso: "!",
        erro: "✕",
        info: "i"
    };

    const titulos = {
        sucesso: "Tudo certo",
        aviso: "Atenção",
        erro: "Ocorreu um erro",
        info: "Informação"
    };

    const notificacao = document.createElement("div");

    notificacao.className = `notificacao ${tipo}`;

    notificacao.innerHTML = `
        <div class="notificacao__icone">
            ${icones[tipo] || icones.info}
        </div>

        <div class="notificacao__conteudo">
            <strong>
                ${escaparHTML(titulo || titulos[tipo] || titulos.info)}
            </strong>

            <span>
                ${escaparHTML(mensagem)}
            </span>
        </div>

        <button
            class="notificacao__fechar"
            type="button"
            aria-label="Fechar notificação">
            ✕
        </button>
    `;

    const removerNotificacao = () => {
        notificacao.classList.add("saindo");

        setTimeout(() => {
            notificacao.remove();
        }, 200);
    };

    notificacao
        .querySelector(".notificacao__fechar")
        .addEventListener("click", removerNotificacao);

    areaNotificacoes.appendChild(notificacao);

    setTimeout(removerNotificacao, 3500);
}

/* ==========================================================
   ABAS DO MODAL
========================================================== */

function abrirAbaDoenca(nomeAba) {
    abasDoenca.forEach(aba => {
        aba.classList.toggle("ativa", aba.dataset.etapa === nomeAba);
    });

    paginasDoenca.forEach(pagina => {
        pagina.classList.toggle("ativa", pagina.dataset.pagina === nomeAba);
    });
}

abasDoenca.forEach(aba => {
    aba.addEventListener("click", () => abrirAbaDoenca(aba.dataset.etapa));
});

/* ==========================================================
   MODAL DE DOENÇA
========================================================== */

function limparFormularioDoenca() {
    formularioDoenca?.reset();
    document.querySelectorAll('input[name="especies-doenca"]').forEach(campo => {
        campo.checked = false;
    });
    campoDificuldade.value = "Fácil";
    campoStatus.value = "Ativa";
    idDoencaEmEdicao = null;
    abrirAbaDoenca("informacoes");

    if (campoTipoCausa) {
        campoTipoCausa.value = "";
    }
    
    if (campoAgenteEtiologico) {
        campoAgenteEtiologico.value = "";
    }
    
    if (campoTransmissao) {
        campoTransmissao.value = "";
    }
    
    if (campoFatoresPredisponentes) {
        campoFatoresPredisponentes.value = "";
    }
    
    if (campoEtiologiaDetalhada) {
        campoEtiologiaDetalhada.value = "";
    }

    document
    .querySelectorAll('input[name="especies-doenca"]')
    .forEach(campo => {
        campo.checked = false;
    });

    document
    .querySelectorAll('input[name="sistemas-doenca"]')
    .forEach(campo => {
        campo.checked = false;
    });

if (campoObservacoesSistemas) {
    campoObservacoesSistemas.value = "";
}

document
    .querySelectorAll('input[name="sexo-acometido"]')
    .forEach(campo => {
        campo.checked =
            campo.value === "Ambos";
    });

document
    .querySelectorAll(
        'input[name="faixa-etaria-doenca"]'
    )
    .forEach(campo => {
        campo.checked = false;
    });

if (campoObservacoesEspecies) {
    campoObservacoesEspecies.value = "";
}

}

function abrirModalDoencaNova() {
    limparFormularioDoenca();

    tituloModalDoenca.textContent = "Nova Doença";
    botaoSalvarDoenca.textContent = "Salvar Doença";
    modalDoenca?.classList.add("ativo");
    document.body.style.overflow = "hidden";
    campoNomeDoenca?.focus();
}

function fecharModalDoenca() {
    modalDoenca?.classList.remove("ativo");
    document.body.style.overflow = "";
}

function obterEspeciesSelecionadas() {
    return [...document.querySelectorAll('input[name="especies-doenca"]:checked')]
        .map(campo => campo.value);
}

function obterSistemasSelecionados () {

    return Array.from(
        document.querySelectorAll(
            `input[name="sistemas-doenca"]:checked`
        )
    ).map(function (campo) {
        return campo.value;
    });
}

function preencherFormularioDoenca(doenca) {
    campoNomeDoenca.value = doenca.nome || "";
    campoNomeCientifico.value = doenca.nomeCientifico || "";
    campoCategoria.value = doenca.categoria || "";
    campoDificuldade.value = doenca.dificuldade || "Fácil";
    campoStatus.value = doenca.status || "Ativa";
    campoResumo.value = doenca.resumo || "";

    const etiologia = doenca.etiologia || {};
        campoTipoCausa.value = etiologia.tipoCausa || "";
        campoAgenteEtiologico.value = etiologia.agenteEtiologico || "";
        campoTransmissao.value = etiologia.transmissao || "";
        campoFatoresPredisponentes.value = etiologia.fatoresPredisponentes || "";
        campoEtiologiaDetalhada.value = etiologia.descricao ||
        (typeof doenca.etiologia === "string" ? doenca.etiologia: "");

        if (campoSistema) {
    campoSistema.value = doenca.sistema || "";}
    if (campoSinais) {
        campoSinais.value =
            arrayParaLinhas(doenca.sinaisClinicos);
    }
    
    if (campoExames) {
        campoExames.value =
            arrayParaLinhas(doenca.examesRecomendados);
    }
    
    if (campoTratamento) {
        campoTratamento.value =
            doenca.tratamento || "";
    }
    
    if (campoPrognostico) {
        campoPrognostico.value =
            doenca.prognostico || "";
    }
    
    if (campoReferencias) {
        campoReferencias.value =
            arrayParaLinhas(doenca.referencias);
    }
    
    if (campoImagens) {
        campoImagens.value =
            arrayParaLinhas(doenca.imagens);
    }

    const especies = Array.isArray(doenca.especies) ? doenca.especies : [];
    document.querySelectorAll('input[name="especies-doenca"]').forEach(campo => {
        campo.checked = especies.includes(campo.value);
    });

    const sexoAcometido =
    doenca.sexoAcometido || "Ambos";

    document
    .querySelectorAll('input[name="sexo-acometido"]')
    .forEach(campo => {
        campo.checked =
            campo.value === sexoAcometido;
    });

    const faixasEtarias =
    Array.isArray(doenca.faixasEtarias)
        ? doenca.faixasEtarias
        : [];

    document
    .querySelectorAll(
        'input[name="faixa-etaria-doenca"]'
    )
    .forEach(campo => {
        campo.checked =
            faixasEtarias.includes(campo.value);
    });

    campoObservacoesEspecies.value =
    doenca.observacoesEspecies || "";


const sistemas = Array.isArray(doenca.sistemas)
    ? doenca.sistemas
    : [];

document.querySelectorAll('input[name="sistemas-doenca"]').forEach(campo => {
    campo.checked = sistemas.includes(campo.value);
});

campoObservacoesSistemas.value =
    doenca.observacoesSistemas || "";

}
function editarDoenca(id) {
    const doenca = bancoVetAscend.doencas.find(item => Number(item.id) === Number(id));
    if (!doenca) return;

    idDoencaEmEdicao = doenca.id;
    preencherFormularioDoenca(doenca);
    abrirAbaDoenca("informacoes");
    tituloModalDoenca.textContent = "Editar Doença";
    botaoSalvarDoenca.textContent = "Salvar Alterações";
    modalDoenca.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function salvarDoenca() {
    const nome = campoNomeDoenca.value.trim();

    if (!nome) {
        mostrarNotificacao(
            "Informe o nome da doença antes de salvar.",
            "aviso"
        );
        abrirAbaDoenca("informacoes");
        campoNomeDoenca.focus();
        return;
    }

    const nomeJaExiste = bancoVetAscend.doencas.some(doenca =>
        doenca.nome.trim().toLowerCase() === nome.toLowerCase() &&
        Number(doenca.id) !== Number(idDoencaEmEdicao)
    );

    if (nomeJaExiste) {
        alert("Já existe uma doença cadastrada com esse nome.");
        abrirAbaDoenca("informacoes");
        campoNomeDoenca.focus();
        return;
    }

    const sexoAcometido =
    document.querySelector(
        'input[name="sexo-acometido"]:checked'
    )?.value || "Ambos";

    const faixasEtarias =
    Array.from(
        document.querySelectorAll(
            'input[name="faixa-etaria-doenca"]:checked'
        )
    ).map(campo => campo.value);

    const dados = {
        nome,
        nomeCientifico: campoNomeCientifico.value.trim(),
        categoria: campoCategoria.value,
        dificuldade: campoDificuldade.value,
        status: campoStatus.value,
        resumo: campoResumo.value.trim(),

        etiologia: {
            tipoCausa: campoTipoCausa?.value || "",
            agenteEtiologico:
                campoAgenteEtiologico?.value.trim() || "",
            transmissao:
                campoTransmissao?.value.trim() || "",
            fatoresPredisponentes:
                campoFatoresPredisponentes?.value.trim() || "",
            descricao:
                campoEtiologiaDetalhada?.value.trim() || ""
        },

        especies: obterEspeciesSelecionadas(),

        sexoAcometido: sexoAcometido,

        faixasEtarias: faixasEtarias,

        observacoesEspecies: campoObservacoesEspecies?.value.trim() || "",

        sistemas: obterSistemasSelecionados(),

        observacoesSistemas: campoObservacoesSistemas?.value.trim()||"",

        sistema: campoSistema?.value || "",

    sinaisClinicos:
    linhasParaArray(campoSinais?.value || ""),
    examesRecomendados:
    linhasParaArray(campoExames?.value || ""),
    tratamento:
    campoTratamento?.value.trim() || "",
    prognostico:
    campoPrognostico?.value.trim() || "",
    referencias:
    linhasParaArray(campoReferencias?.value || ""),
    imagens:
    linhasParaArray(campoImagens?.value || ""),
        atualizacao: dataAtualFormatada()
    };

    if (idDoencaEmEdicao !== null) {
        const indice = bancoVetAscend.doencas.findIndex(
            doenca => Number(doenca.id) === Number(idDoencaEmEdicao)
        );

        if (indice !== -1) {
            bancoVetAscend.doencas[indice] = {
                ...bancoVetAscend.doencas[indice],
                ...dados
            };
        }
    } else {
        bancoVetAscend.doencas.push({
            id: gerarProximoId(bancoVetAscend.doencas),
            casosVinculados: 0,
            ...dados
        });
    }

    salvarBanco();
    atualizarModuloDoencas();

    mostrarNotificacao(
        "A doença foi salva no Banco de Doenças.",
        "sucesso",
        "Doença salva"
    );
    
    fecharModalDoenca();
}

function duplicarDoenca(id) {
    const original = bancoVetAscend.doencas.find(item => Number(item.id) === Number(id));
    if (!original) return;

    let nomeCopia = `${original.nome} (Cópia)`;
    let contador = 2;

    while (bancoVetAscend.doencas.some(item => item.nome.toLowerCase() === nomeCopia.toLowerCase())) {
        nomeCopia = `${original.nome} (Cópia ${contador})`;
        contador += 1;
    }

    const copia = JSON.parse(JSON.stringify(original));
    copia.id = gerarProximoId(bancoVetAscend.doencas);
    copia.nome = nomeCopia;
    copia.status = "Rascunho";
    copia.casosVinculados = 0;
    copia.atualizacao = dataAtualFormatada();

    bancoVetAscend.doencas.push(copia);
    salvarBanco();
    atualizarModuloDoencas();
}

function excluirDoenca(id) {
    const doenca = bancoVetAscend.doencas.find(item => Number(item.id) === Number(id));
    if (!doenca) return;

    const confirmou = confirm(`Excluir "${doenca.nome}"? Essa ação não pode ser desfeita.`);
    if (!confirmou) return;

    bancoVetAscend.doencas = bancoVetAscend.doencas.filter(
        item => Number(item.id) !== Number(id)
    );

    salvarBanco();
    atualizarModuloDoencas();
}

function visualizarDoenca(id) {
    const doenca = bancoVetAscend.doencas.find(item => Number(item.id) === Number(id));
    if (!doenca) return;

    const especies = doenca.especies?.length ? doenca.especies.join(", ") : "Não informado";
    alert(
        `${doenca.nome}\n\n` +
        `Resumo: ${doenca.resumo || "Não informado"}\n` +
        `Espécies: ${especies}\n` +
        `Sistema: ${doenca.sistema || "Não informado"}\n` +
        `Dificuldade: ${doenca.dificuldade || "Não informado"}\n` +
        `Status: ${doenca.status || "Não informado"}`
    );
}



/* ==========================================================
   MODAL DE CASO CLÍNICO
========================================================== */

function preencherListaDoencasCaso() {
    if (!campoDoencaCaso) return;

    campoDoencaCaso.innerHTML = `
        <option value="">
            Selecione uma doença
        </option>
    `;

    const doencasAtivas = bancoVetAscend.doencas
        .filter(doenca => doenca.status === "Ativa")
        .sort((a, b) =>
            a.nome.localeCompare(b.nome, "pt-BR")
        );

    doencasAtivas.forEach(doenca => {
        const opcao = document.createElement("option");

        opcao.value = doenca.id;
        opcao.textContent = doenca.nome;

        campoDoencaCaso.appendChild(opcao);
    });
}

function obterDoencaSelecionadaCaso() {
    const idDoenca = Number(campoDoencaCaso?.value);

    if (!idDoenca) return null;

    return bancoVetAscend.doencas.find(
        doenca => Number(doenca.id) === idDoenca
    ) || null;
}

function preencherEspeciesDoCaso(doenca) {
    if (!campoEspecieCaso) return;

    campoEspecieCaso.innerHTML = `
        <option value="">
            Selecione uma espécie
        </option>
    `;

    const especies = Array.isArray(doenca?.especies)
        ? doenca.especies
        : [];

    especies.forEach(especie => {
        const opcao = document.createElement("option");

        opcao.value = especie;
        opcao.textContent = especie;

        campoEspecieCaso.appendChild(opcao);
    });

    if (especies.length === 1) {
        campoEspecieCaso.value = especies[0];
    }
}

function aplicarDadosDaDoencaNoCaso() {
    const doenca = obterDoencaSelecionadaCaso();

    if (!doenca) {
        preencherEspeciesDoCaso(null);
        return;
    }

    preencherEspeciesDoCaso(doenca);

    if (
        campoTituloCaso &&
        !campoTituloCaso.value.trim()
    ) {
        campoTituloCaso.value =
            `Caso clínico — ${doenca.nome}`;
    }

    if (campoDificuldadeCaso) {
        campoDificuldadeCaso.value =
            doenca.dificuldade || "Fácil";
    }
}

function limparFormularioCaso() {
    formularioCaso?.reset();

    idCasoEmEdicao = null;

    preencherListaDoencasCaso();
    preencherEspeciesDoCaso(null);

    if (campoDificuldadeCaso) {
        campoDificuldadeCaso.value = "Fácil";
    }

    if (campoTipoAtendimentoCaso) {
        campoTipoAtendimentoCaso.value = "Consulta";
    }

    if (campoStatusCaso) {
        campoStatusCaso.value = "Rascunho";
    }
}

function abrirModalNovoCaso() {
    limparFormularioCaso();

    if (tituloModalCaso) {
        tituloModalCaso.textContent =
            "Novo Caso Clínico";
    }

    if (botaoSalvarCaso) {
        botaoSalvarCaso.textContent =
            "Salvar Caso";
    }

    modalCaso?.classList.add("ativo");

    document.body.style.overflow = "hidden";

    campoTituloCaso?.focus();
}

function fecharModalCaso() {
    modalCaso?.classList.remove("ativo");

    document.body.style.overflow = "";
}

function salvarCaso() {
    const titulo =
        campoTituloCaso?.value.trim() || "";

    const doenca =
        obterDoencaSelecionadaCaso();

    if (!titulo) {
        mostrarNotificacao(
            "Informe o título do caso clínico.",
            "aviso"
        );

        campoTituloCaso?.focus();
        return;
    }

    if (!doenca) {
        mostrarNotificacao(
            "Selecione a doença relacionada ao caso.",
            "aviso"
        );

        campoDoencaCaso?.focus();
        return;
    }

    const dadosCaso = {
        titulo,

        doencaId: doenca.id,
        doencaNome: doenca.nome,

        especie:
            campoEspecieCaso?.value || "",

        dificuldade:
            campoDificuldadeCaso?.value ||
            doenca.dificuldade ||
            "Fácil",

        tipoAtendimento:
            campoTipoAtendimentoCaso?.value ||
            "Consulta",

        status:
            campoStatusCaso?.value ||
            "Rascunho",

        paciente: {
            nome:
                campoNomePacienteCaso?.value.trim() || "",

            sexo:
                campoSexoPacienteCaso?.value || "",

            idade:
                campoIdadePacienteCaso?.value.trim() || "",

            raca:
                campoRacaPacienteCaso?.value.trim() || "",

            peso:
                campoPesoPacienteCaso?.value.trim() || ""
        },

        tutor: {
            nome:
                campoNomeTutorCaso?.value.trim() || ""
        },

        queixaPrincipal:
            campoQueixaPrincipalCaso?.value.trim() || "",

        historiaClinica:
            campoHistoriaClinicaCaso?.value.trim() || "",

        baseDoenca: {
            categoria:
                doenca.categoria || "",

            sistemas:
                Array.isArray(doenca.sistemas)
                    ? [...doenca.sistemas]
                    : [],

            sinaisClinicos:
                Array.isArray(doenca.sinaisClinicos)
                    ? [...doenca.sinaisClinicos]
                    : [],

            examesRecomendados:
                Array.isArray(doenca.examesRecomendados)
                    ? [...doenca.examesRecomendados]
                    : [],

            tratamento:
                doenca.tratamento || "",

            prognostico:
                doenca.prognostico || ""
        },

        atualizacao:
            dataAtualFormatada()
    };

    if (!Array.isArray(bancoVetAscend.casos)) {
        bancoVetAscend.casos = [];
    }

    if (idCasoEmEdicao !== null) {
        const indice =
            bancoVetAscend.casos.findIndex(
                caso =>
                    Number(caso.id) ===
                    Number(idCasoEmEdicao)
            );

        if (indice !== -1) {
            bancoVetAscend.casos[indice] = {
                ...bancoVetAscend.casos[indice],
                ...dadosCaso
            };
        }
    } else {
        bancoVetAscend.casos.push({
            id: gerarProximoId(
                bancoVetAscend.casos
            ),

            ...dadosCaso
        });

        doenca.casosVinculados =
            (Number(doenca.casosVinculados) || 0) + 1;
    }

    salvarBanco();

    renderizarTabelaCasos();
    atualizarResumoCasos();

    atualizarResumoDoencas();
    renderizarTabelaDoencas();
    atualizarDashboard();

    mostrarNotificacao(
        "O caso clínico foi salvo com sucesso.",
        "sucesso",
        "Caso salvo"
    );

    fecharModalCaso();
}

function visualizarCaso (id){
    const caso= bancoVetAscend.casos.find(
        item=> Number(item.id) === Number(id)
    );

    if(!caso){
        mostrarNotificacao(
            "O caso clínico não foi encontrado.", "erro"
        );
        return;
    }

    const paciente = caso.paciente || {};
    const tutor = caso.tutor || {};

    alert(
        `${caso.titulo || "Caso clínico"}\n\n` +
        `Doença: ${caso.doencaNome || "Não informada"}\n` +
        `Espécie: ${caso.especie || "Não informada"}\n` +
        `Dificuldade: ${caso.dificuldade || "Não informada"}\n` +
        `Tipo de atendimento: ${caso.tipoAtendimento || "Não informado"}\n` +
        `Status: ${caso.status || "Rascunho"}\n\n` +

        `Paciente: ${paciente.nome || "Não informado"}\n` +
        `Sexo: ${paciente.sexo || "Não informado"}\n` +
        `Idade: ${paciente.idade || "Não informada"}\n` +
        `Raça: ${paciente.raca || "Não informada"}\n` +
        `Peso: ${paciente.peso || "Não informado"}\n\n` +

        `Tutor: ${tutor.nome || "Não informado"}\n\n` +

        `Queixa principal:\n` +
        `${caso.queixaPrincipal || "Não informada"}\n\n` +

        `História clínica:\n` +
        `${caso.historiaClinica || "Não informada"}`
    );
}


function preencherFormularioCaso(caso) {
    preencherListaDoencasCaso();

    if (campoTituloCaso) {
        campoTituloCaso.value =
            caso.titulo || "";
    }

    if (campoDoencaCaso) {
        campoDoencaCaso.value =
            String(caso.doencaId || "");
    }

    const doencaRelacionada =
        bancoVetAscend.doencas.find(
            doenca =>
                Number(doenca.id) ===
                Number(caso.doencaId)
        );

    preencherEspeciesDoCaso(
        doencaRelacionada || null
    );

    if (campoEspecieCaso) {
        campoEspecieCaso.value =
            caso.especie || "";
    }

    if (campoDificuldadeCaso) {
        campoDificuldadeCaso.value =
            caso.dificuldade || "Fácil";
    }

    if (campoTipoAtendimentoCaso) {
        campoTipoAtendimentoCaso.value =
            caso.tipoAtendimento || "Consulta";
    }

    if (campoStatusCaso) {
        campoStatusCaso.value =
            caso.status || "Rascunho";
    }

    const paciente = caso.paciente || {};
    const tutor = caso.tutor || {};

    if (campoNomePacienteCaso) {
        campoNomePacienteCaso.value =
            paciente.nome || "";
    }

    if (campoSexoPacienteCaso) {
        campoSexoPacienteCaso.value =
            paciente.sexo || "";
    }

    if (campoIdadePacienteCaso) {
        campoIdadePacienteCaso.value =
            paciente.idade || "";
    }

    if (campoRacaPacienteCaso) {
        campoRacaPacienteCaso.value =
            paciente.raca || "";
    }

    if (campoPesoPacienteCaso) {
        campoPesoPacienteCaso.value =
            paciente.peso || "";
    }

    if (campoNomeTutorCaso) {
        campoNomeTutorCaso.value =
            tutor.nome || "";
    }

    if (campoQueixaPrincipalCaso) {
        campoQueixaPrincipalCaso.value =
            caso.queixaPrincipal || "";
    }

    if (campoHistoriaClinicaCaso) {
        campoHistoriaClinicaCaso.value =
            caso.historiaClinica || "";
    }
}



function editarCaso(id) {
    const caso = bancoVetAscend.casos.find(
        item => Number(item.id) === Number(id)
    );

    if (!caso) {
        mostrarNotificacao(
            "O caso clínico não foi encontrado.",
            "erro"
        );
        return;
    }

    idCasoEmEdicao = caso.id;

    preencherFormularioCaso(caso);

    if (tituloModalCaso) {
        tituloModalCaso.textContent =
            "Editar Caso Clínico";
    }

    if (botaoSalvarCaso) {
        botaoSalvarCaso.textContent =
            "Salvar Alterações";
    }

    modalCaso?.classList.add("ativo");

    document.body.style.overflow = "hidden";

    campoTituloCaso?.focus();
}


function excluirCaso(id) {
    const caso = bancoVetAscend.casos.find(
        item => Number(item.id) === Number(id)
    );

    if (!caso) {
        mostrarNotificacao(
            "O caso clínico não foi encontrado.",
            "erro"
        );
        return;
    }

    const confirmou = confirm(
        `Excluir o caso "${caso.titulo}"?\n\n` +
        `Essa ação não poderá ser desfeita.`
    );

    if (!confirmou) return;

    bancoVetAscend.casos =
        bancoVetAscend.casos.filter(
            item =>
                Number(item.id) !== Number(id)
        );

    const doencaRelacionada =
        bancoVetAscend.doencas.find(
            doenca =>
                Number(doenca.id) ===
                Number(caso.doencaId)
        );

    if (doencaRelacionada) {
        doencaRelacionada.casosVinculados =
            Math.max(
                0,
                (Number(
                    doencaRelacionada.casosVinculados
                ) || 0) - 1
            );
    }

    salvarBanco();

    renderizarTabelaCasos();
    atualizarResumoCasos();

    renderizarTabelaDoencas();
    atualizarResumoDoencas();

    atualizarDashboard();

    mostrarNotificacao(
        "O caso clínico foi excluído.",
        "sucesso",
        "Caso excluído"
    );
}



/* ==========================================================
   GERADOR DE PLANTÕES
========================================================== */

function obterFonteGeracaoPlantao() {
    return document.querySelector(
        'input[name="fonte-geracao-plantao"]:checked'
    )?.value || "Doencas";
}

function obterPerfilPlantao() {
    return document.querySelector(
        'input[name="perfil-plantao"]:checked'
    )?.value || "Aleatório";
}

function obterIdsBasesSelecionadasPlantao() {
    return Array.from(
        document.querySelectorAll(
            'input[name="base-plantao"]:checked'
        )
    ).map(campo => campo.value);
}

function embaralharLista(lista) {
    const copia = [...lista];

    for (let indice = copia.length - 1; indice > 0; indice--) {
        const posicao = Math.floor(
            Math.random() * (indice + 1)
        );

        const temporario = copia[indice];

        copia[indice] = copia[posicao];
        copia[posicao] = temporario;
    }

    return copia;
}

function escolherItemAleatorio(lista) {
    if (!Array.isArray(lista) || !lista.length) {
        return "";
    }

    const indice = Math.floor(
        Math.random() * lista.length
    );

    return lista[indice];
}

function dataAtualISO() {
    const agora = new Date();

    const ano = agora.getFullYear();

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        agora.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function formatarDataPlantao(data) {
    if (!data) return "Não informada";

    const partes = data.split("-");

    if (partes.length !== 3) {
        return data;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function horarioParaMinutos(horario) {
    if (!horario) return 0;

    const partes = horario.split(":");

    const horas = Number(partes[0]) || 0;
    const minutos = Number(partes[1]) || 0;

    return horas * 60 + minutos;
}

function minutosParaHorario(totalMinutos) {
    const minutosDoDia =
        ((totalMinutos % 1440) + 1440) % 1440;

    const horas = Math.floor(
        minutosDoDia / 60
    );

    const minutos =
        minutosDoDia % 60;

    return (
        String(horas).padStart(2, "0") +
        ":" +
        String(minutos).padStart(2, "0")
    );
}

function obterDoencasAtivasPlantao() {
    const doencas = Array.isArray(
        bancoVetAscend.doencas
    )
        ? bancoVetAscend.doencas
        : [];

    return doencas.filter(
        doenca => doenca.status === "Ativa"
    );
}

function obterCasosManuaisPlantao() {
    const casos = Array.isArray(
        bancoVetAscend.casos
    )
        ? bancoVetAscend.casos
        : [];

    return casos.filter(
        caso => caso.status !== "Arquivado"
    );
}

function doencaCombinaComPerfil(
    doenca,
    perfil
) {
    if (
        perfil === "Aleatório" ||
        perfil === "Clínica Geral" ||
        perfil === "Emergências"
    ) {
        return true;
    }

    const sistemas = Array.isArray(
        doenca.sistemas
    )
        ? doenca.sistemas
        : [];

    const relacaoPerfilSistema = {
        Reprodução: "Reprodutor",
        Dermatologia: "Tegumentar",
        Gastroenterologia: "Digestório",
        Neurologia: "Nervoso",
        Respiratório: "Respiratório"
    };

    const sistemaEsperado =
        relacaoPerfilSistema[perfil];

    if (!sistemaEsperado) {
        return true;
    }

    return sistemas.includes(
        sistemaEsperado
    );
}

function obterBasesDisponiveisPlantao() {
    const fonte =
        obterFonteGeracaoPlantao();

    const perfil =
        obterPerfilPlantao();

    const doencas =
        obterDoencasAtivasPlantao()
            .filter(doenca =>
                doencaCombinaComPerfil(
                    doenca,
                    perfil
                )
            )
            .map(doenca => ({
                chave: `doenca-${doenca.id}`,
                tipo: "Doenca",
                id: doenca.id,
                titulo: doenca.nome,
                subtitulo:
                    (
                        doenca.especies || []
                    ).join(" • ") ||
                    "Espécie não informada",
                dificuldade:
                    doenca.dificuldade ||
                    "Não informada"
            }));

    const casos =
        obterCasosManuaisPlantao()
            .map(caso => ({
                chave: `caso-${caso.id}`,
                tipo: "Caso",
                id: caso.id,
                titulo: caso.titulo,
                subtitulo:
                    caso.doencaNome ||
                    "Doença não informada",
                dificuldade:
                    caso.dificuldade ||
                    "Não informada"
            }));

    if (fonte === "Doencas") {
        return doencas;
    }

    if (fonte === "Casos") {
        return casos;
    }

    return [...doencas, ...casos];
}

function renderizarBasesDisponiveisPlantao(
    lista = obterBasesDisponiveisPlantao()
) {
    if (!listaBasesDisponiveisPlantao) {
        return;
    }

    listaBasesDisponiveisPlantao.innerHTML =
        "";

    const fonte =
        obterFonteGeracaoPlantao();

    if (tituloBasesPlantao) {
        tituloBasesPlantao.textContent =
            fonte === "Doencas"
                ? "Doenças disponíveis"
                : fonte === "Casos"
                    ? "Casos manuais disponíveis"
                    : "Doenças e casos disponíveis";
    }

    if (descricaoBasesPlantao) {
        descricaoBasesPlantao.textContent =
            fonte === "Doencas"
                ? "Selecione as doenças usadas para gerar casos automaticamente."
                : fonte === "Casos"
                    ? "Selecione os casos especiais usados no plantão."
                    : "Selecione doenças e casos especiais para combinar as duas fontes.";
    }

    if (!lista.length) {
        listaBasesDisponiveisPlantao.innerHTML = `
            <div class="estado-vazio">
                <div class="estado-vazio__icone">
                    🦠
                </div>

                <h3>
                    Nenhuma base disponível
                </h3>

                <p>
                    Verifique o perfil escolhido e os
                    registros ativos nos bancos.
                </p>
            </div>
        `;

        atualizarResumoBasesPlantao();
        return;
    }

    lista.forEach(base => {
        const item =
            document.createElement("label");

        item.className =
            "item-caso-disponivel-plantao";

        item.innerHTML = `
            <input
                type="checkbox"
                name="base-plantao"
                value="${escaparHTML(base.chave)}">

            <div class="item-caso-disponivel__conteudo">

                <strong>
                    ${escaparHTML(base.titulo)}
                </strong>

                <span>
                    ${
                        base.tipo === "Doenca"
                            ? "🦠 Doença"
                            : "📋 Caso manual"
                    }
                    •
                    ${escaparHTML(base.subtitulo)}
                    •
                    ${escaparHTML(base.dificuldade)}
                </span>

            </div>

            <span class="item-caso-disponivel__check">
                ✓
            </span>
        `;

        listaBasesDisponiveisPlantao
            .appendChild(item);
    });

    atualizarResumoBasesPlantao();
}

function atualizarResumoBasesPlantao() {
    const disponiveis =
        document.querySelectorAll(
            'input[name="base-plantao"]'
        ).length;

    const selecionados =
        document.querySelectorAll(
            'input[name="base-plantao"]:checked'
        ).length;

    if (quantidadeBasesDisponiveisPlantao) {
        quantidadeBasesDisponiveisPlantao
            .textContent = disponiveis;
    }

    if (quantidadeBasesSelecionadasPlantao) {
        quantidadeBasesSelecionadasPlantao
            .textContent = selecionados;
    }

    if (selecionarTodasBasesPlantao) {
        selecionarTodasBasesPlantao.checked =
            disponiveis > 0 &&
            selecionados === disponiveis;
    }
}

function filtrarBasesDisponiveisPlantao() {
    const termo =
        (
            pesquisaBasesPlantao?.value ||
            ""
        )
            .trim()
            .toLowerCase();

    const bases =
        obterBasesDisponiveisPlantao();

    const filtradas =
        bases.filter(base => {
            const texto = [
                base.titulo,
                base.subtitulo,
                base.dificuldade,
                base.tipo
            ]
                .join(" ")
                .toLowerCase();

            return (
                !termo ||
                texto.includes(termo)
            );
        });

    renderizarBasesDisponiveisPlantao(
        filtradas
    );
}


function limparPreviaPlantao() {
    previaPacientesPlantao = [];

    if (!listaPreviaPacientesPlantao) return;

    listaPreviaPacientesPlantao.innerHTML = `
        <div class="estado-vazio">
            <div class="estado-vazio__icone">
                🐾
            </div>

            <h3>
                Nenhum paciente gerado
            </h3>

            <p>
                Configure o plantão e clique
                em Gerar prévia.
            </p>
        </div>
    `;
}

function limparFormularioPlantao() {
    formularioPlantao?.reset();

    idPlantaoEmEdicao = null;

    previaPacientesPlantao = [];

    if (campoDataPlantao) {
        campoDataPlantao.value =
            dataAtualISO();
    }

    if (campoTurnoPlantao) {
        campoTurnoPlantao.value =
            "Manhã";
    }

    if (campoHorarioInicioPlantao) {
        campoHorarioInicioPlantao.value =
            "08:00";
    }

    if (campoHorarioFimPlantao) {
        campoHorarioFimPlantao.value =
            "17:00";
    }

    if (campoStatusPlantao) {
        campoStatusPlantao.value =
            "Rascunho";
    }

    if (campoQuantidadePacientesPlantao) {
        campoQuantidadePacientesPlantao.value =
            "5";
    }

    if (campoDificuldadePlantao) {
        campoDificuldadePlantao.value =
            "Variada";
    }

    if (campoFrequenciaEmergenciasPlantao) {
        campoFrequenciaEmergenciasPlantao.value =
            "Moderada";
    }

    if (campoRepeticaoCasosPlantao) {
        campoRepeticaoCasosPlantao.value =
            "Evitar";
    }

    if (campoIntervaloAtendimentosPlantao) {
        campoIntervaloAtendimentosPlantao.value =
            "60";
    }

    document
    .querySelectorAll(
        'input[name="fonte-geracao-plantao"]'
    )
    .forEach(campo => {
        campo.checked =
            campo.value === "Doencas";
    });

document
    .querySelectorAll(
        'input[name="perfil-plantao"]'
    )
    .forEach(campo => {
        campo.checked =
            campo.value === "Aleatório";
    });

if (pesquisaBasesPlantao) {
    pesquisaBasesPlantao.value = "";
}

if (selecionarTodasBasesPlantao) {
    selecionarTodasBasesPlantao.checked =
        false;
}

renderizarBasesDisponiveisPlantao();

    limparPreviaPlantao();
}

function abrirModalNovoPlantao() {
    limparFormularioPlantao();

    renderizarBasesDisponiveisPlantao();

    if (tituloModalPlantao) {
        tituloModalPlantao.textContent =
            "Novo Plantão";
    }

    if (botaoGerarPlantao) {
        botaoGerarPlantao.textContent =
            "🎲 Gerar Plantão";
    }

    modalPlantao?.classList.add("ativo");

    document.body.style.overflow =
        "hidden";

    campoNomePlantao?.focus();
}

function fecharModalPlantao() {
    modalPlantao?.classList.remove("ativo");

    document.body.style.overflow = "";
}


function definirTipoAtendimentoPlantao() {
    const frequencia =
        campoFrequenciaEmergenciasPlantao
            ?.value || "Moderada";

    const numero = Math.random();

    const limitesEmergencia = {
        Nenhuma: 0,
        Baixa: 0.15,
        Moderada: 0.30,
        Alta: 0.50
    };

    const limite =
        limitesEmergencia[frequencia] || 0;

    if (numero < limite) {
        return "Emergência";
    }

    if (numero < limite + 0.20) {
        return "Prioritário";
    }

    if (numero < limite + 0.30) {
        return "Retorno";
    }

    return "Consulta";
}

function obterBasesSelecionadasParaGeracao() {
    const chaves =
        obterIdsBasesSelecionadasPlantao();

    const basesDisponiveis =
        obterBasesDisponiveisPlantao();

    if (!chaves.length) {
        return basesDisponiveis;
    }

    return basesDisponiveis.filter(
        base =>
            chaves.includes(base.chave)
    );
}


function escolherEspecieDaDoenca(doenca) {
    const especies =
        Array.isArray(doenca.especies)
            ? doenca.especies
            : [];

    return escolherItemAleatorio(especies) ||
        "Canina";
}
    
    function gerarSexoPelaDoenca(doenca) {
        const sexoCadastrado = String(
            doenca.sexoAcometido || "Ambos"
        )
            .trim()
            .toLowerCase();
    
        if (
            sexoCadastrado === "fêmea" ||
            sexoCadastrado === "fêmeas" ||
            sexoCadastrado === "femea" ||
            sexoCadastrado === "femeas"
        ) {
            return "Fêmea";
        }
    
        if (
            sexoCadastrado === "macho" ||
            sexoCadastrado === "machos"
        ) {
            return "Macho";
        }
    
        return escolherItemAleatorio([
            "Fêmea",
            "Macho"
        ]);
    }

function gerarIdadePelaDoenca(doenca) {
    const faixas =
        Array.isArray(doenca.faixasEtarias)
            ? doenca.faixasEtarias
            : [];

    const faixa =
        escolherItemAleatorio(faixas) ||
        "Adultos";

    const idades = {
        Filhotes: [
            "3 meses",
            "5 meses",
            "8 meses",
            "11 meses"
        ],

        Jovens: [
            "1 ano",
            "2 anos"
        ],

        Adultos: [
            "3 anos",
            "4 anos",
            "5 anos",
            "6 anos"
        ],

        Idosos: [
            "8 anos",
            "10 anos",
            "12 anos",
            "14 anos"
        ]
    };

    return escolherItemAleatorio(
        idades[faixa] || idades.Adultos
    );
}

function gerarRacaAutomatica(especie) {
    const racas = {
        Canina: [
            "SRD",
            "Shih-tzu",
            "Golden Retriever",
            "Labrador",
            "Poodle",
            "Pinscher"
        ],

        Felina: [
            "SRD",
            "Siamês",
            "Persa",
            "Maine Coon"
        ],

        Equina: [
            "Mangalarga",
            "Quarto de Milha",
            "SRD"
        ],

        Bovina: [
            "Nelore",
            "Holandesa",
            "Girolando"
        ],

        Aves: [
            "Calopsita",
            "Papagaio",
            "Periquito"
        ],

        Lagomorfos: [
            "Mini Lop",
            "Lion Head",
            "SRD"
        ]
    };

    return escolherItemAleatorio(
        racas[especie] || ["SRD"]
    );
}

function gerarCasoAutomaticoDaDoenca(
    doenca
) {
    const especie =
        escolherEspecieDaDoenca(doenca);

        const nomesFemininos = [
            "Luna",
            "Mel",
            "Nina",
            "Sol",
            "Amora",
            "Pipoca",
            "Maya",
            "Belinha",
            "Pandora",
            "Kiara",
            "Lola",
            "Jade",
            "Meg",
            "Aurora",
            "Frida"
        ];
        
        const nomesMasculinos = [
            "Thor",
            "Romeu",
            "Theo",
            "Simba",
            "Fred",
            "Max",
            "Bob",
            "Luke",
            "Apolo",
            "Jack",
            "Bento",
            "Sirius",
            "Chico",
            "Toby",
            "Zeus"
        ];

    const nomesTutores = [
        "Ana",
        "Carlos",
        "Mariana",
        "João",
        "Fernanda",
        "Lucas",
        "Patrícia",
        "Rafael"
    ];

    const sinais =
        Array.isArray(
            doenca.sinaisClinicos
        )
            ? embaralharLista(
                doenca.sinaisClinicos
            ).slice(0, 4)
            : [];

    const queixa =
        sinais.length
            ? sinais.slice(0, 2).join(" e ")
            : doenca.resumo ||
              "Alteração clínica em avaliação";

    const sexo =
        gerarSexoPelaDoenca(doenca);

    const nomePaciente =
    sexo === "Fêmea"
    ? escolherItemAleatorio(nomesFemininos)
    : escolherItemAleatorio(nomesMasculinos);    

    const idade =
        gerarIdadePelaDoenca(doenca);

    return {
        origem: "DoencaAutomatica",

        casoId: null,

        casoTitulo:
            `Caso automático — ${doenca.nome}`,

        doencaId:
            doenca.id,

        doencaNome:
            doenca.nome,

        especie,

        dificuldade:
            doenca.dificuldade ||
            "Intermediária",

        nomePaciente,

        sexo,

        idade,

        raca:
            gerarRacaAutomatica(
                especie
            ),

        peso: "",

        nomeTutor:
            escolherItemAleatorio(
                nomesTutores
            ),

        queixaPrincipal:
            queixa,

        historiaClinica:
            `O tutor relata evolução compatível com ${doenca.nome}. ` +
            (
                sinais.length
                    ? `Os principais sinais observados são: ${sinais.join(", ")}.`
                    : doenca.resumo || ""
            ),

        sinaisGerados:
            sinais,

        examesRecomendados:
            Array.isArray(
                doenca.examesRecomendados
            )
                ? [...doenca.examesRecomendados]
                : [],

        tratamentoBase:
            doenca.tratamento || "",

        prognostico:
            doenca.prognostico || ""
    };
}


function gerarPreviaPlantao() {
    const bases =
        obterBasesSelecionadasParaGeracao();

    if (!bases.length) {
        mostrarNotificacao(
            "Nenhuma doença ou caso está disponível para gerar o plantão.",
            "aviso"
        );
        return;
    }

    const quantidade =
        Number(
            campoQuantidadePacientesPlantao
                ?.value
        ) || 5;

    const permitirRepeticao =
        campoRepeticaoCasosPlantao?.value ===
        "Permitir";

    if (
        !permitirRepeticao &&
        quantidade > bases.length
    ) {
        mostrarNotificacao(
            `Existem apenas ${bases.length} bases disponíveis. Permita repetições ou reduza a quantidade de pacientes.`,
            "aviso"
        );
        return;
    }

    const horarioInicial =
        horarioParaMinutos(
            campoHorarioInicioPlantao?.value ||
            "08:00"
        );

    const intervalo =
        Number(
            campoIntervaloAtendimentosPlantao
                ?.value
        ) || 60;

    const basesEmbaralhadas =
        embaralharLista(bases);

    previaPacientesPlantao = [];

    for (
        let indice = 0;
        indice < quantidade;
        indice++
    ) {
        const base =
            permitirRepeticao
                ? escolherItemAleatorio(bases)
                : basesEmbaralhadas[indice];

        let pacienteGerado;

        if (base.tipo === "Doenca") {
            const doenca =
                bancoVetAscend.doencas.find(
                    item =>
                        Number(item.id) ===
                        Number(base.id)
                );

            if (!doenca) continue;

            pacienteGerado =
                gerarCasoAutomaticoDaDoenca(
                    doenca
                );
        } else {
            const caso =
                bancoVetAscend.casos.find(
                    item =>
                        Number(item.id) ===
                        Number(base.id)
                );

            if (!caso) continue;

            const paciente =
                caso.paciente || {};

            const tutor =
                caso.tutor || {};

            pacienteGerado = {
                origem: "CasoManual",

                casoId: caso.id,

                casoTitulo:
                    caso.titulo || "",

                doencaId:
                    caso.doencaId || null,

                doencaNome:
                    caso.doencaNome || "",

                especie:
                    caso.especie ||
                    "Não informada",

                dificuldade:
                    caso.dificuldade ||
                    "Não informada",

                nomePaciente:
                    paciente.nome ||
                    "Paciente",

                sexo:
                    paciente.sexo || "",

                idade:
                    paciente.idade || "",

                raca:
                    paciente.raca || "SRD",

                peso:
                    paciente.peso || "",

                nomeTutor:
                    tutor.nome ||
                    "Tutor",

                queixaPrincipal:
                    caso.queixaPrincipal ||
                    "Queixa não informada",

                historiaClinica:
                    caso.historiaClinica || ""
            };
        }

        previaPacientesPlantao.push({
            id: indice + 1,

            ...pacienteGerado,

            tipoAtendimento:
                definirTipoAtendimentoPlantao(),

            horario:
                minutosParaHorario(
                    horarioInicial +
                    indice * intervalo
                ),

            statusAtendimento:
                "Aguardando"
        });
    }

    renderizarPreviaPlantao();
}


function renderizarPreviaPlantao() {
    if (!listaPreviaPacientesPlantao) return;

    listaPreviaPacientesPlantao.innerHTML = "";

    if (!previaPacientesPlantao.length) {
        limparPreviaPlantao();
        return;
    }

    previaPacientesPlantao.forEach(
        paciente => {
            const item =
                document.createElement("article");

            item.className =
                "item-previa-paciente";

                item.innerHTML = `
                <div class="item-previa-paciente__horario">
                    ${escaparHTML(
                        paciente.horario
                    )}
                </div>
            
                <div class="item-previa-paciente__conteudo">
            
                    <strong>
                        ${escaparHTML(
                            paciente.nomePaciente
                        )}
                    </strong>
            
                    <span>
                        ${escaparHTML(
                            paciente.especie
                        )}
                        •
                        ${escaparHTML(
                            paciente.raca
                        )}
                        •
                        ${escaparHTML(
                            paciente.sexo ||
                            "Sexo não informado"
                        )}
                        • Tutor:
                        ${escaparHTML(
                            paciente.nomeTutor
                        )}
                    </span>
            
                    <small>
                        ${escaparHTML(
                            paciente.casoTitulo
                        )}
                    </small>
            
                    <button
                        type="button"
                        class="botao-ver-detalhes-paciente"
                        data-ver-paciente="${paciente.id}">
            
                        Ver detalhes
            
                    </button>
            
                    <div
                        class="detalhes-paciente-gerado"
                        data-detalhes-paciente="${paciente.id}"
                        hidden>
            
                        <p>
                            <strong>Doença:</strong>
                            ${escaparHTML(
                                paciente.doencaNome ||
                                "Não informada"
                            )}
                        </p>
            
                        <p>
                            <strong>Paciente:</strong>
                            ${escaparHTML(
                                paciente.nomePaciente
                            )}
                        </p>
            
                        <p>
                            <strong>Sexo:</strong>
                            ${escaparHTML(
                                paciente.sexo ||
                                "Não informado"
                            )}
                        </p>
            
                        <p>
                            <strong>Idade:</strong>
                            ${escaparHTML(
                                paciente.idade ||
                                "Não informada"
                            )}
                        </p>
            
                        <p>
                            <strong>Raça:</strong>
                            ${escaparHTML(
                                paciente.raca ||
                                "Não informada"
                            )}
                        </p>
            
                        <p>
                            <strong>Tutor:</strong>
                            ${escaparHTML(
                                paciente.nomeTutor ||
                                "Não informado"
                            )}
                        </p>
            
                        <p>
                            <strong>Queixa principal:</strong>
                            ${escaparHTML(
                                paciente.queixaPrincipal ||
                                "Não informada"
                            )}
                        </p>
            
                        <p>
                            <strong>História clínica:</strong>
                            ${escaparHTML(
                                paciente.historiaClinica ||
                                "Não informada"
                            )}
                        </p>
            
                        <p>
                            <strong>Sinais gerados:</strong>
                            ${escaparHTML(
                                Array.isArray(
                                    paciente.sinaisGerados
                                ) &&
                                paciente.sinaisGerados.length
                                    ? paciente.sinaisGerados.join(", ")
                                    : "Não informados"
                            )}
                        </p>
            
                        <p>
                            <strong>Exames recomendados:</strong>
                            ${escaparHTML(
                                Array.isArray(
                                    paciente.examesRecomendados
                                ) &&
                                paciente.examesRecomendados.length
                                    ? paciente.examesRecomendados.join(", ")
                                    : "Não informados"
                            )}
                        </p>
            
                        <p>
                            <strong>Tratamento-base:</strong>
                            ${escaparHTML(
                                paciente.tratamentoBase ||
                                "Não informado"
                            )}
                        </p>
            
                        <p>
                            <strong>Prognóstico:</strong>
                            ${escaparHTML(
                                paciente.prognostico ||
                                "Não informado"
                            )}
                        </p>
            
                    </div>
            
                </div>
            
                <span class="badge ${obterClasseTipoAtendimento(
                    paciente.tipoAtendimento
                )}">
                    ${escaparHTML(
                        paciente.tipoAtendimento
                    )}
                </span>
            `;

            listaPreviaPacientesPlantao
                .appendChild(item);
        }
    );
}

function obterClasseTipoAtendimento(tipo) {
    return {
        Consulta: "badge-ativo",
        Retorno: "badge-rascunho",
        Prioritário: "badge-intermediario",
        Emergência: "badge-dificil"
    }[tipo] || "";
}



function obterDadosPlantao(statusForcado = "") {
    return {
        nome:
            campoNomePlantao?.value.trim() ||
            "",

        data:
            campoDataPlantao?.value || "",

        turno:
            campoTurnoPlantao?.value ||
            "Manhã",

        horarioInicio:
            campoHorarioInicioPlantao
                ?.value || "",

        horarioFim:
            campoHorarioFimPlantao
                ?.value || "",

        status:
            statusForcado ||
            campoStatusPlantao?.value ||
            "Rascunho",

        configuracao: {
            quantidadePacientes:
                Number(
                    campoQuantidadePacientesPlantao
                        ?.value
                ) || 5,

            dificuldade:
                campoDificuldadePlantao
                    ?.value || "Variada",

            frequenciaEmergencias:
                campoFrequenciaEmergenciasPlantao
                    ?.value || "Moderada",

            repeticaoCasos:
                campoRepeticaoCasosPlantao
                    ?.value || "Evitar",

            intervaloAtendimentos:
                Number(
                    campoIntervaloAtendimentosPlantao
                        ?.value
                ) || 60,

                fonteGeracao:
                obterFonteGeracaoPlantao(),
            
            perfilPlantao:
                obterPerfilPlantao(),
            
            basesSelecionadas:
                obterIdsBasesSelecionadasPlantao()
        },

        pacientes:
            JSON.parse(
                JSON.stringify(
                    previaPacientesPlantao
                )
            ),

        atualizacao:
            dataAtualFormatada()
    };
}

function validarPlantao() {
    const nome =
        campoNomePlantao?.value.trim() || "";

    if (!nome) {
        mostrarNotificacao(
            "Informe o nome do plantão.",
            "aviso"
        );

        campoNomePlantao?.focus();
        return false;
    }

    if (!campoDataPlantao?.value) {
        mostrarNotificacao(
            "Informe a data do plantão.",
            "aviso"
        );

        campoDataPlantao?.focus();
        return false;
    }

    return true;
}

function salvarPlantao(statusForcado = "") {
    if (!validarPlantao()) return;

    const dadosPlantao =
        obterDadosPlantao(statusForcado);

    if (!Array.isArray(
        bancoVetAscend.plantoes
    )) {
        bancoVetAscend.plantoes = [];
    }

    if (idPlantaoEmEdicao !== null) {
        const indice =
            bancoVetAscend.plantoes.findIndex(
                plantao =>
                    Number(plantao.id) ===
                    Number(idPlantaoEmEdicao)
            );

        if (indice !== -1) {
            bancoVetAscend.plantoes[indice] = {
                ...bancoVetAscend.plantoes[indice],
                ...dadosPlantao
            };
        }
    } else {
        bancoVetAscend.plantoes.push({
            id: gerarProximoId(
                bancoVetAscend.plantoes
            ),

            ...dadosPlantao
        });
    }

    salvarBanco();

    renderizarTabelaPlantoes();
    atualizarResumoPlantoes();
    atualizarDashboard();

    mostrarNotificacao(
        statusForcado === "Rascunho"
            ? "O plantão foi salvo como rascunho."
            : "O plantão foi gerado com sucesso.",
        "sucesso",
        statusForcado === "Rascunho"
            ? "Rascunho salvo"
            : "Plantão gerado"
    );

    fecharModalPlantao();
}

function salvarRascunhoPlantao() {
    salvarPlantao("Rascunho");
}

function gerarPlantaoFinal() {
    if (!previaPacientesPlantao.length) {
        gerarPreviaPlantao();

        if (!previaPacientesPlantao.length) {
            return;
        }
    }

    const statusEscolhido =
        campoStatusPlantao?.value;

    const statusFinal =
        statusEscolhido === "Rascunho"
            ? "Atual"
            : statusEscolhido || "Atual";

    salvarPlantao(statusFinal);
}



/* ==========================================================
   PESQUISA E FILTROS
========================================================== */

function aplicarFiltrosDoencas() {
    const termo = (pesquisaDoenca?.value || "").trim().toLowerCase();
    const especie = filtroEspecie?.value || "";
    const sistema = filtroSistema?.value || "";
    const dificuldade = filtroDificuldade?.value || "";
    const status = filtroStatus?.value || "";

    const filtradas = bancoVetAscend.doencas.filter(doenca => {
        const texto = [
            doenca.nome,
            doenca.nomeCientifico,
            doenca.resumo,
            doenca.categoria,
            doenca.sistema,
            ...(doenca.especies || [])
        ].join(" ").toLowerCase();

        return (
            (!termo || texto.includes(termo)) &&
            (!especie || (doenca.especies || []).includes(especie)) &&
            (!sistema || doenca.sistema === sistema) &&
            (!dificuldade || doenca.dificuldade === dificuldade) &&
            (!status || doenca.status === status)
        );
    });

    renderizarTabelaDoencas(filtradas);
}

[pesquisaDoenca, filtroEspecie, filtroSistema, filtroDificuldade, filtroStatus]
    .filter(Boolean)
    .forEach(campo => {
        campo.addEventListener(campo.tagName === "INPUT" ? "input" : "change", aplicarFiltrosDoencas);
    });

/* ==========================================================
   TABELA DE DOENÇAS
========================================================== */

function renderizarTabelaDoencas(lista = bancoVetAscend.doencas) {
    if (!corpoTabelaDoencas) return;

    corpoTabelaDoencas.innerHTML = "";

    if (!lista.length) {
        corpoTabelaDoencas.innerHTML = criarLinhaSemResultados();
        atualizarRodapeTabela(0);
        return;
    }

    lista.forEach(doenca => {
        const linha = document.createElement("tr");
        linha.dataset.id = doenca.id;

        linha.innerHTML = `
            <td>
                <div class="celula-principal">
                    <div class="icone-tabela">🦠</div>
                    <div>
                        <strong>${escaparHTML(doenca.nome)}</strong>
                        <small>${escaparHTML(doenca.resumo || "Sem resumo")}</small>
                    </div>
                </div>
            </td>

            <td>
                ${(doenca.especies || []).map(escaparHTML).join(" • ") || "Não informado"}
            </td>

            <td>${escaparHTML(doenca.sistema || "Não informado")}</td>

            <td>
                <span class="badge ${obterClasseDificuldade(doenca.dificuldade)}">
                    ${escaparHTML(doenca.dificuldade || "Não informado")}
                </span>
            </td>

            <td>${Number(doenca.casosVinculados) || 0}</td>

            <td>
                <span class="badge ${obterClasseStatus(doenca.status)}">
                    ${escaparHTML(doenca.status || "Rascunho")}
                </span>
            </td>

            <td>${escaparHTML(doenca.atualizacao || "—")}</td>

            <td>
                <div class="acoes-tabela">
                    <button class="botao-icone tooltip" type="button" data-acao="visualizar" data-id="${doenca.id}" title="Visualizar">👁️</button>
                    <button class="botao-icone tooltip" type="button" data-acao="editar" data-id="${doenca.id}" title="Editar">✏️</button>
                    <button class="botao-icone tooltip" type="button" data-acao="duplicar" data-id="${doenca.id}" title="Duplicar">📋</button>
                    <button class="botao-icone perigo tooltip" type="button" data-acao="excluir" data-id="${doenca.id}" title="Excluir">🗑️</button>
                </div>
            </td>
        `;

        corpoTabelaDoencas.appendChild(linha);
    });

    atualizarRodapeTabela(lista.length);
}

corpoTabelaDoencas?.addEventListener("click", evento => {
    const botao = evento.target.closest("[data-acao]");
    if (!botao) return;

    const id = Number(botao.dataset.id);
    const acao = botao.dataset.acao;

    if (acao === "visualizar") visualizarDoenca(id);
    if (acao === "editar") editarDoenca(id);
    if (acao === "duplicar") duplicarDoenca(id);
    if (acao === "excluir") excluirDoenca(id);
});

corpoTabelaCasos?.addEventListener(
    "click",
    evento => {
        const botao = evento.target.closest(
            "button[data-acao-caso]"
        );

        if (!botao) return;

        const id = Number(
            botao.getAttribute("data-id")
        );

        const acao = botao.getAttribute(
            "data-acao-caso"
        );

        if (acao === "visualizar") {
            visualizarCaso(id);
            return;
        }

        if (acao === "editar") {
            editarCaso(id);
            return;
        }

        if (acao === "excluir") {
            excluirCaso(id);
        }
    }
);

function criarLinhaSemResultados() {
    return `
        <tr>
            <td colspan="8">
                <div class="estado-vazio">
                    <div class="estado-vazio__icone">🔎</div>
                    <h3>Nenhuma doença encontrada</h3>
                    <p>Tente alterar os termos da pesquisa ou os filtros selecionados.</p>
                </div>
            </td>
        </tr>
    `;
}

function obterClasseDificuldade(dificuldade) {
    return {
        "Fácil": "badge-facil",
        "Intermediária": "badge-intermediario",
        "Difícil": "badge-dificil"
    }[dificuldade] || "";
}

function obterClasseStatus(status) {
    return {
        "Ativa": "badge-ativo",
        "Rascunho": "badge-rascunho",
        "Arquivada": "badge-arquivado"
    }[status] || "";
}

function atualizarRodapeTabela(quantidade) {
    const textoRodape = document.querySelector("#tela-doencas .rodape-tabela > span");
    if (textoRodape) {
        textoRodape.textContent = `Mostrando ${quantidade} de ${bancoVetAscend.doencas.length} doenças`;
    }
}


/* ==========================================================
   TABELA DE CASOS CLÍNICOS
========================================================== */

function renderizarTabelaCasos() {

    if (!corpoTabelaCasos) return;

    const casos = Array.isArray(bancoVetAscend.casos)
        ? bancoVetAscend.casos
        : [];

    corpoTabelaCasos.innerHTML = "";

    if (!casos.length) {
        corpoTabelaCasos.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="estado-vazio">
                        <div class="estado-vazio__icone">
                            📋
                        </div>

                        <h3>
                            Nenhum caso clínico cadastrado
                        </h3>

                        <p>
                            Clique em Novo Caso para criar
                            a primeira simulação clínica.
                        </p>
                    </div>
                </td>
            </tr>
        `;

        atualizarResumoCasos();
        atualizarRodapeCasos(0);
        return;
    }

    casos.forEach(caso => {
        const linha = document.createElement("tr");

        linha.dataset.id = caso.id;

        linha.innerHTML = `
            <td>
                <div class="celula-principal">

                    <div class="icone-tabela">
                        📋
                    </div>

                    <div>
                        <strong>
                            ${escaparHTML(caso.titulo)}
                        </strong>

                        <small>
                            ${escaparHTML(
                                caso.queixaPrincipal ||
                                "Sem queixa principal"
                            )}
                        </small>
                    </div>

                </div>
            </td>

            <td>
                ${escaparHTML(
                    caso.especie ||
                    "Não informada"
                )}
            </td>

            <td>
                ${escaparHTML(
                    caso.doencaNome ||
                    "Não informada"
                )}
            </td>

            <td>
                <span class="badge ${obterClasseDificuldade(
                    caso.dificuldade
                )}">
                    ${escaparHTML(
                        caso.dificuldade ||
                        "Não informada"
                    )}
                </span>
            </td>

            <td>
                <span class="badge ${obterClasseStatusCaso(
                    caso.status
                )}">
                    ${escaparHTML(
                        caso.status ||
                        "Rascunho"
                    )}
                </span>
            </td>

            <td>
                ${escaparHTML(
                    caso.atualizacao || "—"
                )}
            </td>

            <td>
                <div class="acoes-tabela">

                    <button
                        class="botao-icone tooltip"
                        type="button"
                        data-acao-caso="visualizar"
                        data-id="${caso.id}"
                        title="Visualizar">

                        👁️

                    </button>

                    <button
                        class="botao-icone tooltip"
                        type="button"
                        data-acao-caso="editar"
                        data-id="${caso.id}"
                        title="Editar">

                        ✏️

                    </button>

                    <button
                        class="botao-icone perigo tooltip"
                        type="button"
                        data-acao-caso="excluir"
                        data-id="${caso.id}"
                        title="Excluir">

                        🗑️

                    </button>

                </div>
            </td>
        `;

        corpoTabelaCasos.appendChild(linha);
    });

    atualizarResumoCasos();
    atualizarRodapeCasos(casos.length);
}


function atualizarResumoCasos() {
    const casos = Array.isArray(bancoVetAscend.casos)
        ? bancoVetAscend.casos
        : [];

    atualizarTexto(
        "#quantidade-casos",
        casos.length
    );

    atualizarTexto(
        "#casos-ativos",
        casos.filter(
            caso => caso.status === "Ativo"
        ).length
    );

    atualizarTexto(
        "#casos-rascunho",
        casos.filter(
            caso => caso.status === "Rascunho"
        ).length
    );

    atualizarTexto(
        "#casos-finalizados",
        casos.filter(
            caso => caso.status === "Finalizado"
        ).length
    );
}

function atualizarRodapeCasos(quantidade) {
    const textoRodape = document.querySelector(
        "#tela-casos .rodape-tabela > span"
    );

    if (!textoRodape) return;

    const total = Array.isArray(
        bancoVetAscend.casos
    )
        ? bancoVetAscend.casos.length
        : 0;

    textoRodape.textContent =
        `Mostrando ${quantidade} de ${total} casos`;
}

function obterClasseStatusCaso(status) {
    return {
        "Ativo": "badge-ativo",
        "Rascunho": "badge-rascunho",
        "Finalizado": "badge-ativo",
        "Arquivado": "badge-arquivado"
    }[status] || "";
}

/* ==========================================================
   TABELA DE PLANTÕES
========================================================== */

function renderizarTabelaPlantoes() {
    if (!corpoTabelaPlantoes) return;

    const plantoes =
        Array.isArray(
            bancoVetAscend.plantoes
        )
            ? bancoVetAscend.plantoes
            : [];

    corpoTabelaPlantoes.innerHTML = "";

    if (!plantoes.length) {
        corpoTabelaPlantoes.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="estado-vazio">
                        <div class="estado-vazio__icone">
                            🎲
                        </div>

                        <h3>
                            Nenhum plantão gerado
                        </h3>

                        <p>
                            Clique em Novo Plantão para
                            iniciar uma simulação.
                        </p>
                    </div>
                </td>
            </tr>
        `;

        atualizarResumoPlantoes();
        return;
    }

    plantoes.forEach(plantao => {
        const pacientes =
            Array.isArray(plantao.pacientes)
                ? plantao.pacientes
                : [];

        const emergencias =
            pacientes.filter(
                paciente =>
                    paciente.tipoAtendimento ===
                    "Emergência"
            ).length;

        const linha =
            document.createElement("tr");

        linha.dataset.id = plantao.id;

        linha.innerHTML = `
            <td>
                <div class="celula-principal">

                    <div class="icone-tabela">
                        🎲
                    </div>

                    <div>
                        <strong>
                            ${escaparHTML(
                                plantao.nome ||
                                "Plantão sem nome"
                            )}
                        </strong>

                        <small>
                            ${escaparHTML(
                                plantao.turno ||
                                "Turno não informado"
                            )}
                        </small>
                    </div>

                </div>
            </td>

            <td>
                ${escaparHTML(
                    formatarDataPlantao(
                        plantao.data
                    )
                )}
            </td>

            <td>
                ${escaparHTML(
                    plantao.horarioInicio ||
                    "—"
                )}
                às
                ${escaparHTML(
                    plantao.horarioFim ||
                    "—"
                )}
            </td>

            <td>
                ${pacientes.length}
            </td>

            <td>
                ${emergencias}
            </td>

            <td>
                <span class="badge ${obterClasseStatusPlantao(
                    plantao.status
                )}">
                    ${escaparHTML(
                        plantao.status ||
                        "Rascunho"
                    )}
                </span>
            </td>

            <td>
                <div class="acoes-tabela">

                    <button
                        class="botao-icone tooltip"
                        type="button"
                        data-acao-plantao="visualizar"
                        data-id="${plantao.id}"
                        title="Visualizar">
                        👁️
                    </button>

                    <button
                        class="botao-icone tooltip"
                        type="button"
                        data-acao-plantao="editar"
                        data-id="${plantao.id}"
                        title="Editar">
                        ✏️
                    </button>

                    <button
                        class="botao-icone tooltip"
                        type="button"
                        data-acao-plantao="duplicar"
                        data-id="${plantao.id}"
                        title="Duplicar">
                        📋
                    </button>

                    <button
                        class="botao-icone perigo tooltip"
                        type="button"
                        data-acao-plantao="excluir"
                        data-id="${plantao.id}"
                        title="Excluir">
                        🗑️
                    </button>

                </div>
            </td>
        `;

        corpoTabelaPlantoes.appendChild(
            linha
        );
    });

    atualizarResumoPlantoes();
}


function atualizarResumoPlantoes() {
    const plantoes =
        Array.isArray(
            bancoVetAscend.plantoes
        )
            ? bancoVetAscend.plantoes
            : [];

    atualizarTexto(
        "#quantidade-plantoes",
        plantoes.length
    );

    const plantaoAtual =
        plantoes.find(
            plantao =>
                plantao.status === "Atual"
        );

    atualizarTexto(
        "#pacientes-plantao-atual",
        plantaoAtual &&
        Array.isArray(plantaoAtual.pacientes)
            ? plantaoAtual.pacientes.length
            : 0
    );

    const emergencias =
        plantaoAtual &&
        Array.isArray(plantaoAtual.pacientes)
            ? plantaoAtual.pacientes.filter(
                paciente =>
                    paciente.tipoAtendimento ===
                    "Emergência"
            ).length
            : 0;

    atualizarTexto(
        "#emergencias-plantao",
        emergencias
    );

    atualizarTexto(
        "#plantoes-finalizados",
        plantoes.filter(
            plantao =>
                plantao.status ===
                "Finalizado"
        ).length
    );
}

function obterClasseStatusPlantao(status) {
    return {
        Atual: "badge-ativo",
        Agendado: "badge-intermediario",
        Rascunho: "badge-rascunho",
        Finalizado: "badge-ativo",
        Arquivado: "badge-arquivado"
    }[status] || "";
}


function visualizarPlantao(id) {
    const plantao =
        bancoVetAscend.plantoes.find(
            item =>
                Number(item.id) === Number(id)
        );

    if (!plantao) return;

    const pacientes =
        Array.isArray(plantao.pacientes)
            ? plantao.pacientes
            : [];

    const listaPacientes =
        pacientes.map(paciente =>
            `${paciente.horario} — ` +
            `${paciente.nomePaciente} — ` +
            `${paciente.tipoAtendimento}`
        ).join("\n");

    alert(
        `${plantao.nome}\n\n` +
        `Data: ${formatarDataPlantao(
            plantao.data
        )}\n` +
        `Turno: ${plantao.turno}\n` +
        `Horário: ${plantao.horarioInicio} às ${plantao.horarioFim}\n` +
        `Status: ${plantao.status}\n` +
        `Pacientes: ${pacientes.length}\n\n` +
        `${listaPacientes || "Nenhum paciente gerado."}`
    );
}

function preencherFormularioPlantao(plantao) {
    limparFormularioPlantao();

    idPlantaoEmEdicao = plantao.id;

    campoNomePlantao.value =
        plantao.nome || "";

    campoDataPlantao.value =
        plantao.data || "";

    campoTurnoPlantao.value =
        plantao.turno || "Manhã";

    campoHorarioInicioPlantao.value =
        plantao.horarioInicio || "08:00";

    campoHorarioFimPlantao.value =
        plantao.horarioFim || "17:00";

    campoStatusPlantao.value =
        plantao.status || "Rascunho";

    const configuracao =
        plantao.configuracao || {};

    campoQuantidadePacientesPlantao.value =
        String(
            configuracao.quantidadePacientes ||
            5
        );

    campoDificuldadePlantao.value =
        configuracao.dificuldade ||
        "Variada";

    campoFrequenciaEmergenciasPlantao.value =
        configuracao.frequenciaEmergencias ||
        "Moderada";

    campoRepeticaoCasosPlantao.value =
        configuracao.repeticaoCasos ||
        "Evitar";

    campoIntervaloAtendimentosPlantao.value =
        String(
            configuracao.intervaloAtendimentos ||
            60
        );

    campoModoGeracaoPlantao.value =
        configuracao.modoGeracao ||
        "Automatico";

    const idsSelecionados =
        Array.isArray(
            configuracao.casosSelecionados
        )
            ? configuracao.casosSelecionados
            : [];

    document
        .querySelectorAll(
            'input[name="caso-plantao"]'
        )
        .forEach(campo => {
            campo.checked =
                idsSelecionados.includes(
                    Number(campo.value)
                );
        });

    previaPacientesPlantao =
        Array.isArray(plantao.pacientes)
            ? JSON.parse(
                JSON.stringify(
                    plantao.pacientes
                )
            )
            : [];

    atualizarResumoSelecaoPlantao();
    renderizarPreviaPlantao();
}

function editarPlantao(id) {
    const plantao =
        bancoVetAscend.plantoes.find(
            item =>
                Number(item.id) === Number(id)
        );

    if (!plantao) return;

    preencherFormularioPlantao(plantao);

    tituloModalPlantao.textContent =
        "Editar Plantão";

    botaoGerarPlantao.textContent =
        "Salvar Alterações";

    modalPlantao.classList.add("ativo");

    document.body.style.overflow =
        "hidden";
}

function duplicarPlantao(id) {
    const original =
        bancoVetAscend.plantoes.find(
            item =>
                Number(item.id) === Number(id)
        );

    if (!original) return;

    const copia =
        JSON.parse(
            JSON.stringify(original)
        );

    copia.id =
        gerarProximoId(
            bancoVetAscend.plantoes
        );

    copia.nome =
        `${original.nome} (Cópia)`;

    copia.status = "Rascunho";

    copia.atualizacao =
        dataAtualFormatada();

    bancoVetAscend.plantoes.push(copia);

    salvarBanco();

    renderizarTabelaPlantoes();
    atualizarResumoPlantoes();
    atualizarDashboard();

    mostrarNotificacao(
        "O plantão foi duplicado.",
        "sucesso",
        "Plantão duplicado"
    );
}

function excluirPlantao(id) {
    const plantao =
        bancoVetAscend.plantoes.find(
            item =>
                Number(item.id) === Number(id)
        );

    if (!plantao) return;

    const confirmou = confirm(
        `Excluir o plantão "${plantao.nome}"?\n\n` +
        "Essa ação não poderá ser desfeita."
    );

    if (!confirmou) return;

    bancoVetAscend.plantoes =
        bancoVetAscend.plantoes.filter(
            item =>
                Number(item.id) !== Number(id)
        );

    salvarBanco();

    renderizarTabelaPlantoes();
    atualizarResumoPlantoes();
    atualizarDashboard();

    mostrarNotificacao(
        "O plantão foi excluído.",
        "sucesso",
        "Plantão excluído"
    );
}



corpoTabelaPlantoes?.addEventListener(
    "click",
    evento => {
        const botao = evento.target.closest(
            "button[data-acao-plantao]"
        );

        if (!botao) return;

        const id = Number(
            botao.getAttribute("data-id")
        );

        const acao = botao.getAttribute(
            "data-acao-plantao"
        );

        if (acao === "visualizar") {
            visualizarPlantao(id);
            return;
        }

        if (acao === "editar") {
            editarPlantao(id);
            return;
        }

        if (acao === "duplicar") {
            duplicarPlantao(id);
            return;
        }

        if (acao === "excluir") {
            excluirPlantao(id);
        }
    }
);



/* ==========================================================
   CARDS E DASHBOARD
========================================================== */

function atualizarResumoDoencas() {
    atualizarTexto("#quantidade-doencas", bancoVetAscend.doencas.length);
    atualizarTexto("#doencas-ativas", bancoVetAscend.doencas.filter(d => d.status === "Ativa").length);
    atualizarTexto("#doencas-rascunho", bancoVetAscend.doencas.filter(d => d.status === "Rascunho").length);
    atualizarTexto(
        "#casos-vinculados",
        bancoVetAscend.doencas.reduce((total, d) => total + (Number(d.casosVinculados) || 0), 0)
    );
}

function atualizarDashboard() {
    atualizarTexto("#total-doencas", bancoVetAscend.doencas.length);
    atualizarTexto("#total-casos", bancoVetAscend.casos.length);
    atualizarTexto("#total-exames", bancoVetAscend.exames.length);
    atualizarTexto("#total-farmacos", bancoVetAscend.farmacos.length);
    atualizarTexto("#total-conteudos", bancoVetAscend.biblioteca.length);
    atualizarTexto("#total-usuarios", bancoVetAscend.usuarios.length);
}

function atualizarModuloDoencas() {
    aplicarFiltrosDoencas();
    atualizarResumoDoencas();
    atualizarDashboard();
}

/* ==========================================================
   EVENTOS DO MODAL
========================================================== */
botaoNovoPlantao?.addEventListener(
    "click",
    abrirModalNovoPlantao
);

botaoFecharModalPlantao?.addEventListener(
    "click",
    fecharModalPlantao
);

botaoCancelarPlantao?.addEventListener(
    "click",
    fecharModalPlantao
);

botaoGerarPreviaPlantao?.addEventListener(
    "click",
    gerarPreviaPlantao
);

botaoLimparPreviaPlantao?.addEventListener(
    "click",
    limparPreviaPlantao
);

listaPreviaPacientesPlantao?.addEventListener(
    "click",
    evento => {
        const botao = evento.target;

        if (
            !botao.matches(
                "button[data-ver-paciente]"
            )
        ) {
            return;
        }

        const id =
            botao.getAttribute(
                "data-ver-paciente"
            );

        const detalhes =
            listaPreviaPacientesPlantao
                .querySelector(
                    `[data-detalhes-paciente="${id}"]`
                );

        if (!detalhes) return;

        const estaFechado =
            detalhes.hasAttribute("hidden");

        document
            .querySelectorAll(
                ".detalhes-paciente-gerado"
            )
            .forEach(bloco => {
                bloco.setAttribute(
                    "hidden",
                    ""
                );
            });

        document
            .querySelectorAll(
                ".botao-ver-detalhes-paciente"
            )
            .forEach(outroBotao => {
                outroBotao.textContent =
                    "Ver detalhes";
            });

        if (estaFechado) {
            detalhes.removeAttribute("hidden");

            botao.textContent =
                "Ocultar detalhes";
        }
    }
);

botaoSalvarRascunhoPlantao?.addEventListener(
    "click",
    salvarRascunhoPlantao
);

botaoGerarPlantao?.addEventListener(
    "click",
    gerarPlantaoFinal
);


pesquisaBasesPlantao?.addEventListener(
    "input",
    filtrarBasesDisponiveisPlantao
);

listaBasesDisponiveisPlantao?.addEventListener(
    "change",
    evento => {
        if (
            evento.target.matches(
                'input[name="base-plantao"]'
            )
        ) {
            atualizarResumoBasesPlantao();
        }
    }
);

selecionarTodasBasesPlantao?.addEventListener(
    "change",
    () => {
        document
            .querySelectorAll(
                'input[name="base-plantao"]'
            )
            .forEach(campo => {
                campo.checked =
                    selecionarTodasBasesPlantao
                        .checked;
            });

        atualizarResumoBasesPlantao();
    }
);

document
    .querySelectorAll(
        'input[name="fonte-geracao-plantao"]'
    )
    .forEach(campo => {
        campo.addEventListener(
            "change",
            () => {
                if (pesquisaBasesPlantao) {
                    pesquisaBasesPlantao.value =
                        "";
                }

                renderizarBasesDisponiveisPlantao();
                limparPreviaPlantao();
            }
        );
    });

document
    .querySelectorAll(
        'input[name="perfil-plantao"]'
    )
    .forEach(campo => {
        campo.addEventListener(
            "change",
            () => {
                renderizarBasesDisponiveisPlantao();
                limparPreviaPlantao();
            }
        );
    });

modalPlantao?.addEventListener(
    "click",
    evento => {
        if (evento.target === modalPlantao) {
            fecharModalPlantao();
        }
    }
);

botaoNovoCaso?.addEventListener(
    "click",
    abrirModalNovoCaso
);

botaoSalvarCaso?.addEventListener(
    "click",
    salvarCaso
);

botaoFecharModalCaso?.addEventListener(
    "click",
    fecharModalCaso
);

botaoCancelarCaso?.addEventListener(
    "click",
    fecharModalCaso
);

campoDoencaCaso?.addEventListener(
    "change",
    aplicarDadosDaDoencaNoCaso
);

modalCaso?.addEventListener(
    "click",
    evento => {
        if (evento.target === modalCaso) {
            fecharModalCaso();
        }
    }
);

botaoNovaDoenca?.addEventListener("click", abrirModalDoencaNova);
botaoSalvarDoenca?.addEventListener("click", salvarDoenca);
botaoFecharModal?.addEventListener("click", fecharModalDoenca);
botaoCancelarDoenca?.addEventListener("click", fecharModalDoenca);

modalDoenca?.addEventListener("click", evento => {
    if (evento.target === modalDoenca) fecharModalDoenca();
});

document.addEventListener("keydown", evento => {
    if (evento.key !== "Escape") return;

    if (modalPlantao?.classList.contains("ativo")) {
        fecharModalPlantao();
        return;
    }

    if (modalCaso?.classList.contains("ativo")) {
        fecharModalCaso();
        return;
    }

    if (modalDoenca?.classList.contains("ativo")) {
        fecharModalDoenca();
        return;
    }

    fecharMenuMobile();
});

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

function iniciarSistema() {
    abrirTela("dashboard");

    renderizarTabelaDoencas();
    renderizarTabelaCasos();
    renderizarTabelaPlantoes();

    atualizarResumoDoencas();
    atualizarResumoCasos();
    atualizarDashboard();
    atualizarResumoPlantoes();
    preencherListaDoencasCaso();

    console.log(
        "VetAscend Admin iniciado com sucesso."
    );
}

document.addEventListener("DOMContentLoaded", iniciarSistema);
