// spreed (espalhar) ...

const pessoa = {
    nome: 'Maria',
    idade: 18,
    cidade: 'Fortaleza',
    profissao: 'Dev'
};

const endereco = {
    rua: 'Aqui',
    numero: '30',
    bairro: 'Aculá'
};

// const objetoFundido = {
//     nome: pessoa.nome,
//     idade: pessoa.idade,
//     rua: endereco.rua
// }

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
}

console.log(objetoFundido);