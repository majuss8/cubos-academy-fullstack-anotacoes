// Declare uma variável que armazena um objeto contendo dados de uma pessoa:
// nome, idade, profissão e altura.
// Faça uma função que tem um parâmetro e não retorna valores. 
// Essa função deve imprimir na tela a apresentação de uma pessoa, 
// seguindo o modelo abaixo:
// "Olá! Meu nome é João, sou um jovem de 12 anos, tenho 1.4m de altura e sou estudante"

const pessoaObj = {
    nome: 'Júlia',
    idade: 18,
    profissao: 'Dev',
    altura: 1.62
}

function apresentação(pessoa) { // o parametro não precisa ser igual a variavel chamada
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
}

apresentação(pessoaObj)

