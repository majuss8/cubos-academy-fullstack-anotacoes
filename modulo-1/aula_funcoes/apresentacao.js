const pessoa = {
    nome: 'Maria',
    idade: 18,
    profissao: 'Dev'
}

if(pessoa.idade < 25) {
    console.log(`Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else if (pessoa.idade < 65) {
    console.log(`Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
} else {
    console.log(`Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}

const pessoa2 = {
    nome: 'Pedro',
    idade: 65,
    profissao: 'Médico'
}

if(pessoa2.idade < 25) {
    console.log(`Meu nome é ${pessoa2.nome}, sou um(a) jovem de ${pessoa2.idade} anos e sou ${pessoa2.profissao}.`);
} else if (pessoa2.idade < 65) {
    console.log(`Meu nome é ${pessoa2.nome}, sou um(a) adulto(a) de ${pessoa2.idade} anos e sou ${pessoa2.profissao}.`);
} else {
    console.log(`Meu nome é ${pessoa2.nome}, sou um(a) idoso(a) de ${pessoa2.idade} anos e sou ${pessoa2.profissao}.`);
}
const pessoa3 = {
    nome: 'Ana',
    idade: 19,
    profissao: 'Estudante'
}

if(pessoa3.idade < 25) {
    console.log(`Meu nome é ${pessoa3.nome}, sou um(a) jovem de ${pessoa3.idade} anos e sou ${pessoa3.profissao}.`);
} else if (pessoa3.idade < 65) {
    console.log(`Meu nome é ${pessoa3.nome}, sou um(a) adulto(a) de ${pessoa3.idade} anos e sou ${pessoa3.profissao}.`);
} else {
    console.log(`Meu nome é ${pessoa3.nome}, sou um(a) idoso(a) de ${pessoa3.idade} anos e sou ${pessoa3.profissao}.`);
}
