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

let totalAPagar = 0
for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.quantidade
    
}
const totalFormatado = (totalAPagar/100).toFixed(2);
console.log(`Sr(a) ${cartaoConsumo.nomeCliente}, sua conta deu R$${totalFormatado}`);
