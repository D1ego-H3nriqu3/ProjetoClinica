export default function relatorioPacientes(pacientes){
    console.log("\n--------------------------------------\n")
    if(pacientes.length === 0){
        console.log("\nNão há o que relatar!")
    }else{
        let totalPacientes = pacientes.length
        let somaIdade = 0
        let maisVelho = ["", 0]
        let peloMenosAlergia = 0
        for(let i = 0; i < pacientes.length; i ++){
            somaIdade += pacientes[i].idade
            if(pacientes[i].idade > maisVelho[1]){
                maisVelho = [pacientes[i].nome, pacientes[i].idade]
            }
            if(pacientes[i].alergias.length >= 1){
                peloMenosAlergia++
            }
        }
        let media = Math.round(somaIdade / totalPacientes)
        console.log(`Total de pacientes: ${totalPacientes}
Média de idade: ${media}
Pacientes com alergia: ${peloMenosAlergia}
Paciente mais velho: ${maisVelho.join(" | ")} anos`)
    }
}