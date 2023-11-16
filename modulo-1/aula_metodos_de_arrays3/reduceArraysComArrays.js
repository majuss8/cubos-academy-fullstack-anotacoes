const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayReduzido = array.reduce((acumulador, elementoAtual, indice, array) => {
    return [...acumulador, ...elementoAtual]
}, []); // o acumulador inicialemnte será um array vazia

console.log(arrayReduzido);

//  A sintaxe de propagação (...) permite que um iterável,
//  como um array ou string, seja expandido em locais
//  onde são esperados zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array).
//  Em um objeto literal, a sintaxe de propagação enumera as propriedades de um objeto e adiciona os pares chave-valor
//  ao objeto que está sendo criado.

