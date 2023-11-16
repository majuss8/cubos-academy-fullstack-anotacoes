/*
const letras = ['a', 'b', 'c'];

const resultado = letras.some((elementoAtual) => {
    return elementoAtual === 'c'
});

console.log(resultado);
*/

const nomes = ['João', 'Maria', 'José', 'Rodrigo'];
const numeros = [1, 5, 2, 7, 8]

const minhaFuncaoCallback = (nome) =>{
    return nome === 'João'
}

const resultado = nomes.some(minhaFuncaoCallback);


const resultadoNum = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado);
console.log(resultadoNum);