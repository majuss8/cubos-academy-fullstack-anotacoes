// const numeros = [1, 2, 3, 6, 7, 8, 11, 34];

// const resultado = numeros.filter((numero) => {
//     return numero > 2
// });

// console.log(resultado);

// const numeros = [1, 4, 4, 5, 3, 1, 8];

// const resultado = numeros.filter((numero) => {
//     return numero === 4
// });

// console.log(resultado); // novo array
// console.log(numeros); // não modifica a original

const nomes = ['joao', 'maria', 'joao', 'jose'];

const resultadoNomes = nomes.filter((nome) => {
    return nome === 'joao'
});

console.log(resultadoNomes);