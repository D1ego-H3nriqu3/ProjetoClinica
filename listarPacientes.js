export default function listarPacientes(pacientes){
    console.log("\n-----------------------\n")
    if(pacientes.length === 0){
        console.log("Não há nenhum paciente para mostrar")
    }else{
        pacientes.forEach(paciente => {
            console.log(`ID - ${paciente.id}
Nome - ${paciente.nome} (${paciente.idade} anos)
CPF - ${paciente.cpf}`)
            if(paciente.alergias.length === 0){
                console.log(`Alergias - Nenhuma\n`)
            }else{
                console.log(`Alergias - ${paciente.alergias}\n`)
            }
        })
    }
}