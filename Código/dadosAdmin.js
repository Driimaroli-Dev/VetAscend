// ======================================================
// BANCO DE DADOS LOCAL - VETASCEND
// ======================================================

const bancoVetAscend = {
    doencas: [],
    casos: [],
    exames: [],
    protocolos: [],
    plantoes: [],
    farmacos: [],
    biblioteca: [],
    flashcards: [],
    questoes: [],
    referencias: [],
    usuarios: []
};

const doencasIniciais = [
    {
        id: 1,
        nome: "Piometra",
        nomeCientifico: "",
        categoria: "Infecciosa",
        resumo: "Infecção uterina potencialmente grave.",
        etiologia: "",
        especies: ["Canina", "Felina"],
        sistema: "Reprodutivo",
        sinaisClinicos: [],
        examesRecomendados: [],
        tratamento: "",
        prognostico: "",
        referencias: [],
        imagens: [],
        dificuldade: "Intermediária",
        casosVinculados: 2,
        status: "Ativa",
        atualizacao: "Hoje"
    },
    {
        id: 2,
        nome: "Cinomose",
        nomeCientifico: "Canine morbillivirus",
        categoria: "Infecciosa",
        resumo: "Doença viral multissistêmica e altamente contagiosa.",
        etiologia: "",
        especies: ["Canina"],
        sistema: "Multissistêmico",
        sinaisClinicos: [],
        examesRecomendados: [],
        tratamento: "",
        prognostico: "",
        referencias: [],
        imagens: [],
        dificuldade: "Difícil",
        casosVinculados: 4,
        status: "Ativa",
        atualizacao: "Ontem"
    },
    {
        id: 3,
        nome: "Dermatite Atópica",
        nomeCientifico: "",
        categoria: "Inflamatória",
        resumo: "Doença inflamatória e alérgica da pele.",
        etiologia: "",
        especies: ["Canina"],
        sistema: "Tegumentar",
        sinaisClinicos: [],
        examesRecomendados: [],
        tratamento: "",
        prognostico: "",
        referencias: [],
        imagens: [],
        dificuldade: "Fácil",
        casosVinculados: 1,
        status: "Rascunho",
        atualizacao: "15/07"
    }
];

function normalizarDoenca(doenca) {
    return {
        id: Number(doenca.id) || Date.now(),
        nome: doenca.nome || "",
        nomeCientifico: doenca.nomeCientifico || "",
        categoria: doenca.categoria || "",
        resumo: doenca.resumo || "",
        etiologia: doenca.etiologia || "",
        especies: Array.isArray(doenca.especies) ? doenca.especies : [],
        sistema: doenca.sistema || "",
        sinaisClinicos: Array.isArray(doenca.sinaisClinicos) ? doenca.sinaisClinicos : [],
        examesRecomendados: Array.isArray(doenca.examesRecomendados) ? doenca.examesRecomendados : [],
        tratamento: doenca.tratamento || "",
        prognostico: doenca.prognostico || "",
        referencias: Array.isArray(doenca.referencias) ? doenca.referencias : [],
        imagens: Array.isArray(doenca.imagens) ? doenca.imagens : [],
        dificuldade: doenca.dificuldade || "Fácil",
        casosVinculados: Number(doenca.casosVinculados) || 0,
        status: doenca.status || "Rascunho",
        atualizacao: doenca.atualizacao || "—"
    };
}

function salvarBanco() {
    localStorage.setItem("vetascend_admin", JSON.stringify(bancoVetAscend));
}

function carregarBanco() {
    const dadosSalvos = localStorage.getItem("vetascend_admin");

    if (dadosSalvos) {
        try {
            const bancoSalvo = JSON.parse(dadosSalvos);
            Object.assign(bancoVetAscend, bancoSalvo);
        } catch (erro) {
            console.error("Erro ao carregar o banco:", erro);
        }
    }

    if (!Array.isArray(bancoVetAscend.doencas) || bancoVetAscend.doencas.length === 0) {
        bancoVetAscend.doencas = doencasIniciais.map(normalizarDoenca);
    } else {
        bancoVetAscend.doencas = bancoVetAscend.doencas.map(normalizarDoenca);
    }

    salvarBanco();
}

carregarBanco();
