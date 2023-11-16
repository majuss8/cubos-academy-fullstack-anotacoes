function apresentar(user) {
    if(user.idade < 25){
        return console.log(`Meu nome é ${user.nome}, sou um(a) jovem de ${user.idade} anos e sou ${user.profissao}.`);

    } else if(user.idade < 65){
        return console.log(`Meu nome é ${user.nome}, sou um(a) adulto(a) de ${user.idade} anos e sou ${user.profissao}.`);
        
    } else {
        return console.log(`Meu nome é ${user.nome}, sou um(a) idoso(a) de ${user.idade} anos e sou ${user.profissao}.`);
    }
}

const pessoa1 = {
    nome: 'Maria',
    idade: 18,
    profissao: 'Dev'
}
apresentar(pessoa1);

const pessoa2 = {
    nome: 'Pedro',
    idade: 65,
    profissao: 'Médico'
}
apresentar(pessoa2);

const pessoa3 = {
    nome: 'Ana',
    idade: 19,
    profissao: 'Estudante'
}
apresentar(pessoa3);





