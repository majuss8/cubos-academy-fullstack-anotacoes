// Função tradicional

console.log(soma(5, 3)); // na declaração tradicional, a chamada pode ocorrer antes da função
// function soma(x, y) {
//     //código
//     const resultado = x + y;
//     return resultado;
// }
console.log(soma(5, 3));

// Função Seta

console.log(soma(5, 3)); // já na declaração com arrow-function, a chamada antes dela não funciona devido ao hoisting (içamento)
// const soma = (x, y) => {
//     //código
//     const resultado = x + y;
//     return resultado;
// }
console.log(soma(5, 3));
