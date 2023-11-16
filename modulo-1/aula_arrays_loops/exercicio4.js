const palavra = 'Madagascar';

let quantidadeDeA = []

for (let letra of palavra) {
    if (letra === 'a'){
        quantidadeDeA.push(letra)
    }
}

console.log(quantidadeDeA.length);


let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++
        // quantidade = quantidade + 1
    }
}

console.log(quantidade);
