// function determinarFaixaEtaria(idade) {
    // if(idade < 22) {
    //     return 'jovem'
    // } else if(idade < 66) {
    //     return 'adulto(a)'
    // } else {
    //     return 'idoso(a)'
    // }
// }

// function apresentar(user) {
//     const faixaEtaria = determinarFaixaEtaria(user.idade);
//     console.log(`Olá! Meu nome é ${user.nome}, sou um(a) ${faixaEtaria} de ${user.idade} anos, tenho ${user.altura}m de altura e sou ${user.profissao}`)
// }

const pessoa1 = {
    nome: 'Maria',
    idade: 18,
    altura: 1.62,
    profissao: 'Dev',
    determinarFaixaEtaria: function () {
        if(this.idade < 22) {
            return 'jovem'
        } else if(this.idade < 66) {
            return 'adulto(a)'
        } else {
            return 'idoso(a)'
        }
    },
    apresentar: function () { //método, uma função dentro do objeto
        const faixaEtaria = this.determinarFaixaEtaria(this.idade); // this -> deste objeto, idade deste objeto

        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos,
        tenho ${this.altura}m de altura e sou ${this.profissao}`)
    }
}

pessoa1.apresentar() // apresentar é um método do objeto pessoa1
console.log(pessoa1.determinarFaixaEtaria());

console.log();  // log é um método do objeto console


// apresentar(pessoa1);

// const pessoa2 = {
//     nome: 'Pedro',
//     idade: 65,
//     altura: 1.75,
//     profissao: 'Médico'
// }
// apresentar(pessoa2);

// const pessoa3 = {
//     nome: 'Ana',
//     idade: 29,
//     altura: 1.80,
//     profissao: 'Advogada'
// }
// apresentar(pessoa3);