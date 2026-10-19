import PromptSync from "prompt-sync";
const prompt = PromptSync()
import pacientes from "./pacientes.js";
import adicionarPaciente from "./adicionarPaciente.js";
import listarPacientes from "./listarPacientes.js";
import removerPaciente from "./removerPaciente.js";
import attPaciente from "./atualizarPaciente.js";
import relatorioPacientes from "./relatorioPacientes.js";

let indice = true

do {
    console.log(`\n===== CLÍNICA LIONSMED =====\n
1 - Cadastrar paciente
2 - Listar pacientes
3 - Atualizar paciente
4 - Remover paciente
5 - Relatório
0 - Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case "1":
        let nPaciente = adicionarPaciente.coletaInformacoes(pacientes)
        adicionarPaciente.addPaciente(pacientes, nPaciente)
        break
        case "2":
        listarPacientes(pacientes)
        break
        case "3":
        attPaciente(pacientes)
        break
        case "4":
        removerPaciente(pacientes)
        break
        case "5":
        relatorioPacientes(pacientes)
        break
        case "0":
            indice = false
            console.log("\n...Saindo do sistema...\n")
        break
        default:
            console.log("\nEscolha uma opção correspondente!")
    }
} while (indice === true);