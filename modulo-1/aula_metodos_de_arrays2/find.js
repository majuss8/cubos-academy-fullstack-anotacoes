/*
const numeros = [1, 2, 4, 6, 3, 9, 11];

const resultado = numeros.find((numero) => {
    return numero > 4
});

console.log(resultado);
*/

const usuarios = [
    { nome: 'Maria', idade: 18 },
    { nome: 'João', idade: 20 },
    { nome: 'Carla', idade: 24 },
    { nome: 'Joana', idade: 19 },
    { nome: 'Paulo', idade: 25 }
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'João'
});

console.log(resultado);

