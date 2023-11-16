const pessoas = ['João', 'ana', 'carlos', 'Beatriz'];

pessoas.sort();
console.log(pessoas);

// Ordenação crescente
pessoas.sort((primeiro, segundo) => {
    return primeiro.localeCompare(segundo)
});

console.log(pessoas);

// Ordenação decrescente
pessoas.sort((primeiro, segundo) => {
    return segundo.localeCompare(primeiro)
});

console.log(pessoas);

