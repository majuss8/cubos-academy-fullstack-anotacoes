// Em alguns outros países é comum que se utilize vírgula ao invés de ponto para separação das casas de milhar.
// Faça um programa que altere uma string desse formato para o formato que estamos acostumados no Brasil, com ponto.
// Por exemplo, o número 1,350,000 deve ser transformado para 1.350.000.

function replaceAll (original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText)
    }
    return original;
}

let numero = "1,350,000";
console.log(replaceAll(numero, ",", "."));