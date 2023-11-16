function filtrar80 (dados) {
    let qtd = dados.length;
    let dezPorcento = Math.round(0.1 * qtd)
    let noventaPorcento = Math.round(0.9 * qtd)
    let filtro80 = dados.slice(dezPorcento, noventaPorcento);
    return filtro80
}

const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,89,69,57,33,24,11,5,3,1,0,0];

console.log(filtrar80(dados));
