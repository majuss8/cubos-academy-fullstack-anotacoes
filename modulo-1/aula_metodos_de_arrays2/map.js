/*
const numeros = [1, 4, 5, 7, 9];

const dobro = numeros.map((numero) => {
    return numero * 2
});

console.log(numeros);
console.log(dobro);
*/

const usuarios = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 31 },
    { nome: 'Daniel', sobrenome: 'Lopes', idade: 29 },
    { nome: 'Vitor', sobrenome: 'Vidal', idade: 28 }
];

const novoArray = usuarios.map((usuario) => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
        idade: usuario.idade
    }
});

console.log(novoArray);
console.log(usuarios);