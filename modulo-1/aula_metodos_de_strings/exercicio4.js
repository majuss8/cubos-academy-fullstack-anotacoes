// transforme "maria júlia soares siqueira melo"
// em: Maria Júlia Soares Siqueira melo

const nome = "maria júlia soares siqueira melo";
const arrayDeNomes = nome.split(" ");

let nomeFormatado = "";
for(let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    //nomeFormatado += `${primeiraLetra.toUpperCase()}${restanteDoNome} `
    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + ' '

}
console.log(nomeFormatado);
console.log(nomeFormatado.trim());