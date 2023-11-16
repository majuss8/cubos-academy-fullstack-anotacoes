const opcoes = ['Eu', 'você', 'ele', 'nós'];
const corte = opcoes.slice(1, 3); // índice 1 = 'você', índice 3 = 'nós'
// o índice 3 (segundo argumento / final do corte) não será incluso na nova array
console.log(corte);
