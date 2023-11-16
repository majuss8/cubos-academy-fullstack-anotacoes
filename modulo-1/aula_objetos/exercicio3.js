const produtosConsumidos = [
    {
        nome: 'café expresso',
        precoUnit: 700,
        quantidade: 2
    },
    {
        nome: 'água',
        precoUnit: 300,
        quantidade: 1
    },
    {
        nome: 'croissant de queijo',
        precoUnit: 800,
        quantidade: 2
    }
]

const cartaoConsumo = {
    nomeCliente: 'Maria',
    idade: 18,
    produtosConsumidos
}

// Nome do cliente:
console.log(cartaoConsumo.nomeCliente);

// Idade do cliente:
console.log(cartaoConsumo.idade);

// Modificação da idade
cartaoConsumo.idade = 20;

// Nova idade do cliente:
console.log(cartaoConsumo.idade);

// Primeiro produto consumido:
console.log(cartaoConsumo.produtosConsumidos[0].nome);

// Preço do último produto:
console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);