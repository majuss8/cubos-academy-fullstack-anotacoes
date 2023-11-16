// Ordenação padrão

const array = [0, 5, 3, 2, 7, 45, 32];

array.sort() // usa a tabela unicode para ordenar
console.log(array);

// Ordenação com função callback

array.sort((a, b) => {
    return a - b
});

console.log(array);