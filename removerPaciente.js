import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function removerPaciente(pacientes){
    console.log("\n-------------------------------------\n")
    let cpf = (prompt("Qual o CPF do paciente que gostaria de remover? ")).trim()
    if(cpf === ""){
        console.log("Digite um cpf válido!")
        return false
    }

    const indice = pacientes.findIndex(paciente => paciente.cpf === cpf)

    if(indice === -1){
        console.log("\nNenhum paciente com este CPF foi encontrado!")
    }else{
        let resposta = (prompt("Tem certeza da remoção? (sim/nao) ")).trim().toLowerCase()
        if(resposta === "sim"){
            pacientes.splice(indice,1)
            console.log("\nRemoção realizada!")
        }else{
            console.log("\nPois bem...")
        }
    }

}