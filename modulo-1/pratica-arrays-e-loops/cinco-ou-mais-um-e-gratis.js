const precos = [100, 500, 100, 200, 50, 50];

let soma = 0;
let menor = precos[0];
for (let itemAtual of precos) {
    // calculando a soma total
    soma += itemAtual;
    // se o item atual for menor que o menor ate agora
    if (itemAtual < menor) {
        // o item atual é o novo menor
        menor = itemAtual;
    }
}

if(precos.length >= 5) {
    console.log(soma - menor);
}else{
    console.log(soma);
}