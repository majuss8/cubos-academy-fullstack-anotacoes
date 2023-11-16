let valorProduto = 1000;
let numParcelas = 0;

if (numParcelas === 1) {
    let valorComDesconto = (valorProduto - (valorProduto * 0.1)).toFixed(2)
    console.log(`Você deve pagar R$${valorComDesconto}, pois à vista tem 10% de desconto!`);
} else if (numParcelas >= 2 && numParcelas <= 6) {
    let valorParcela = (valorProduto / numParcelas).toFixed(2)
    console.log(`Você deve pagar ${numParcelas} parcelas de R$${valorParcela}!`);
} else if (numParcelas >= 7 && numParcelas <= 12) {
    let montante =( valorProduto * (1 + 0.01)**numParcelas).toFixed(2)
    let montanteParcela = (montante / numParcelas).toFixed(2)
    console.log(`Você deve pagar ${numParcelas} parcelas de R$${montanteParcela}, totalizando R$${montante} com juros!`);
} else {
    console.log("Só aceitamos parcelar em até 12x.");
}