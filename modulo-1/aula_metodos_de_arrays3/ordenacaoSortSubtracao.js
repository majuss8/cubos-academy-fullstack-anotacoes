const numeros = [1, 30, 4, 6, 80, 34, 100, 256, 256];

// Ordenação crescente
numeros.sort((a, b) => {
    return a - b
});

console.log(numeros);

// Ordenação decrescente
numeros.sort((a, b) => {
    return b - a
});

console.log(numeros);