const pessoa = {
    nome: "Maria",
    altura: 1.62,
    peso: 65
};

pessoa.nome = "Júlia" // pessoa["nome"] = "Júlia"
pessoa["altura"] = 1.80
pessoa["peso"] = 70

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}Kg`);

