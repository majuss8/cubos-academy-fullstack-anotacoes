const ultimosDigitos = '2789'
const numCartao = ultimosDigitos.padStart(19, '**** ')
console.log(numCartao);

const final = ultimosDigitos.padEnd(19, ' ****');
console.log(final);