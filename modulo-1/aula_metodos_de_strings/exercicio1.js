// Em alguns outros países é comum que se utilize . ao invés de vírgula para separação das casas decimais.
// Faça um programa que altere uma string desse formato para o formato que estamos acostumados no Brasil, com vírgula.
// Por exemplo, o número 97.50 deve ser transformado para 97,50.

const numero = "97.50";

let alteracao = numero.replace(".", ",");

console.log(alteracao);


