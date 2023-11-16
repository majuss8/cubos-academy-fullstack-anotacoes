const pessoa = {
    nome: "Maria Júlia",
    idade: 18,
    altura: 1.62,
    temCNH: false,
    apelidos: ["Maju", "Juju", "Ju"]
}

let possuiCNH = pessoa.temCNH ? "possui" : "não possui";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${possuiCNH} CNH e tem os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}