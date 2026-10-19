import PromptSync from "prompt-sync"
const prompt = PromptSync()

function coletaInformacoes(pacientes){
    console.log("\n-------------------------------------------------\n")
    let cpf = (prompt("Digite o CPF do paciente: ")).trim()
    if(cpf === ""){
        console.log("Digite um CPF válido!")
        return coletaInformacoes(pacientes)
    }else{
        for(let i = 0; i < pacientes.length; i++){
            if(pacientes[i].cpf === cpf){
                console.log("Esse CPF já está cadastrado!")
                return coletaInformacoes(pacientes)
            }
        }
    }

    let nome = (prompt("Digite o nome do paciente: ")).trim()
    if(nome === ""){
        console.log("Digite um nome válido!")
        return coletaInformacoes(pacientes)
    }

    let idade = Number(prompt("Digite a idade do paciente: "))
    if(isNaN(idade) || idade <= 0){
        console.log("Digite uma idade válida!")
        return coletaInformacoes(pacientes)
    }

    let alergias = []
    let resposta1 = (prompt("O paciente tem alguma alergia? (sim/Enter) ")).trim().toLowerCase()
    if(resposta1 === "sim"){
        let resposta = ""
        do{
            let alergia = (prompt("Digite a alergia: ")).trim()
            if(alergia === ""){
                console.log("Digite uma alergia válida!")
                return coletaInformacoes(pacientes)
            }else{
                alergias.push(alergia)
            }
            resposta = (prompt("Adicionar outra alergia? (sim/Enter) "))
        }while(resposta === "sim")
    }
    return {
    cpf: cpf,
    nome: nome,
    idade: idade,
    alergias: alergias
    }
}

function addPaciente(pacientes, nPaciente){
    if(pacientes.length > 0){
        let uElemento = pacientes.length - 1
        nPaciente.id = pacientes[uElemento].id + 1
    }else{
        nPaciente.id = 1
    }

    if(pacientes.push(nPaciente)){
        console.log("\nPaciente cadastrado com sucesso!")
    }else{
        console.log("Houve um erro no cadastro do paciente")
    }
}

export default {coletaInformacoes, addPaciente}