const array = [0, 1, 2, 3, 4];
/*
const resultado = array.reduce((acumulador, valorAtual, index, array) => {
    return acumulador + valorAtual
});

console.log(resultado);
*/

/*
let somaTotal = array[0];
for(let i = 1; i < array.length; i++) {
    const elementoAtual = array[i];

    somaTotal += elementoAtual;
}

console.log(somaTotal);
*/

const valorReduce = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 10); // o segundo argumento do reduce pode ser o valor inicial

console.log(valorReduce);

