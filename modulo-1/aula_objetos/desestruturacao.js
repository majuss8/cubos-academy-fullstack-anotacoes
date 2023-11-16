const pessoa = {
    nome: 'Maria',
    idade: 18,
    cidade: 'Fortaleza',
    profissao: 'Dev'
}

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa;

console.log(nome, idade);
console.log(outros);