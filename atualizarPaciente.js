import PromptSync from "prompt-sync";
const prompt = PromptSync()

export default function attPaciente(pacientes){
    console.log("\n-------------------------------------\n")
    let id = Number(prompt("Qual o ID do paciente que gostaria de remover? "))
    if(isNaN(id)){
        console.log("Digite um ID válido!")
        return false
    }

    const indice = pacientes.findIndex(paciente => paciente.id === id)

    if(indice === -1){
        console.log("\nNenhum paciente com este ID foi encontrado!")
    }else{
        let nNome = (prompt("Digite o novo nome: (Enter mantém) ")).trim()

        let nIdade = (prompt("Digite a nova idade: (Enter mantém) ")).trim()
        let nIdadeAtt = Number(nIdade)
        if(nIdade === ""){

        }else{ 
            if(isNaN(nIdadeAtt) || nIdadeAtt <= 0){
            console.log("Digite uma idade válida!")
            return false
        }
        }
    
    let nAlergias = []
    let resposta1 = (prompt("Gostaria de mudar as alergias? (sim/Enter) ")).trim().toLowerCase()
    if(resposta1 === "sim"){
        let resposta = ""
        do{
            let alergia = (prompt("Digite a alergia: ")).trim()
            nAlergias.push(alergia)
            resposta = (prompt("Adicionar outra alergia? (sim/Enter) "))
        }while(resposta === "sim")
    }
    pacientes[indice].nome = nNome || pacientes[indice].nome
    pacientes[indice].idade = nIdadeAtt || pacientes[indice].idade
    if(nAlergias.length === 0){
        pacientes[indice].alergias = pacientes[indice].alergias
    }else{
        pacientes[indice].alergias = nAlergias
    }
    console.log("\nPaciente atualizado!")
}
}