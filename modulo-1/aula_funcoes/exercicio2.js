// Faça uma função que tem um parâmetro chamado idade e que determina
//  a faixa etária de uma pessoa a partir dessa idade.
// 21 anos ou menos -> jovem
// 22 a 65 anos -> adulto(a)
// 66 ou mais anos -> idoso(a)
// Sua função deverá retornar um string que informa se a pessoa é
//  jovem, adulto(a) ou idoso(a)

function faixaEtaria(idade) {
    if(idade < 22) {
        return console.log('jovem')
    } else if(idade < 66) {
        return console.log('adulto(a)')
    } else {
        return console.log('idoso(a)')
    }
}

faixaEtaria(18);

function faixaEtaria(idade) {
    if(idade < 22) {
        return 'jovem'
    } else if(idade < 66) {
        return 'adulto(a)'
    } else {
        return 'idoso(a)'
    }
}

console.log(faixaEtaria(18));