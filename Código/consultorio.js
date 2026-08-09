// ==========================================================
// CONSULTÓRIO 
// ==========================================================

criarBarraSuperior ();

criarBarraNavegacao ("consultorio");


// ===================
// FLUXO CLÍNICO
// ===================

let pacienteSelecionado = null;

let conteudoConsultorio;

function iniciarConsultorio(){

    conteudoConsultorio=
    document.querySelector(".conteudo-consultorio");


    if (pacienteSelecionado===null){
        
        mostrarTelaEscolherPaciente();
    }
}

function mostrarTelaEscolherPaciente(){

    conteudoConsultorio.innerHTML= 
    criarPainelAcao(
        "Iniciar atendimento", "Escolha um paciente para iniciar o atendimento",
        "Escolher paciente", "botao-escolher-paciente"
    );

    const botaoEscolherPaciente=
    document.getElementById("botao-escolher-paciente");

    botaoEscolherPaciente.addEventListener("click", abrirEscolhaPaciente);

}

iniciarConsultorio();

function abrirEscolhaPaciente (){

    mostrarListaPacientes();

}

function mostrarListaPacientes (){

    conteudoConsultorio.innerHTML=`

    <section class="lista-pacientes">

        <h2> Pacientes do dia</h2>
        
    </section>
    `; 
}