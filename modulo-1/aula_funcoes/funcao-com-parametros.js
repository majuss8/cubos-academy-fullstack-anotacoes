// function cumprimentar() {
//     const nome = "Maria"
//     console.log(`Olá ${nome}`);
// }

function cumprimentar(nome, idade) {
    console.log(`Olá ${nome}, fiquei sabendo que você tem ${idade} anos`);
    console.log(nome);
}
//console.log(nome);// essa variavel so existe dentro do escopo da função

const pessoa = 'Maria'
cumprimentar(pessoa, 18);

cumprimentar('José', 30);