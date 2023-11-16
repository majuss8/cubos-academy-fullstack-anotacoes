// verificar se a pessoa é maior de idade

function verificarIdade(idade) {
    if(idade >= 18) {
        return true // return para a execução
        console.log('essa linha não vai ser executada');
    } else {
        return false
    }
}

const valorRetornadoDaFunc = verificarIdade(20)
console.log(valorRetornadoDaFunc);