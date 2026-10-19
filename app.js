import PromptSync from "prompt-sync";
const prompt = PromptSync()
import pacientes from "./pacientes.js";

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

        break
        case "2":

        break
        case "3":

        break
        case "4":

        break
        case "5":

        break
        case "0":
            indice = false
            console.log("\n...Saindo do sistema...\n")
        break
        default:
            console.log("\nEscolha uma opção correspondente!")
    }
} while (indice === true);