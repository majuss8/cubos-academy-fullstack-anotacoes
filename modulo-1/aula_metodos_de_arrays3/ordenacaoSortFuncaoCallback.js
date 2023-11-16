const numeros = [1, 30, 4, 6, 80, 34, 100, 256, 256];

// Ordenação crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1
    } 
    if (primeiroElemento > segundoElemento) {
        return 1
    }
    return 0
});

console.log(numeros);

// Ordenação decrescente
numeros.sort((a, b) => {
    if(a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
    return 0
});

console.log(numeros);