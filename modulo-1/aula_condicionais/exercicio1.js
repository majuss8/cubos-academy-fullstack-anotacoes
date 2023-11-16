let valorProduto = 1000;
let numParcelas = 3;

if (numParcelas === 1){
    let valorComDesconto = valorProduto - (valorProduto * 0.1)
    console.log(`Você deve pagar R$${valorComDesconto.toFixed(2)} reais, pois à vista tem 10% de desconto!`);
}else{
    let valorParcela = (valorProduto / numParcelas).toFixed(2)
    console.log(`Você deve pagar ${numParcelas} parcelas de R$${valorParcela} reais!`);
}
