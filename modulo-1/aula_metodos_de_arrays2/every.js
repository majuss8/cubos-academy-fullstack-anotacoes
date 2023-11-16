/*
const numeros = [0, 1, 2, 3, 4]

numeros.every((elementoAtual) => {
    return elementoAtual < 5
});
*/

const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== 'banana'
});

console.log(resultado);