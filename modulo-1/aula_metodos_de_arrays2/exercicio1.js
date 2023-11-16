const usuarios = [
    { nome: 'Maria', idade: 18 },
    { nome: 'João', idade: 20 },
    { nome: 'Carla', idade: 24 },
    { nome: 'Joana', idade: 19 },
    { nome: 'Paulo', idade: 25 }
];

/*
const resultado = usuarios.every((usuario) => {
    return usuario.idade > 17
});

if(resultado){
    console.log('Festa liberada!');
} else {
    console.log('Possui menor de idade!');
}
*/

const ficalizacao = (lista) => {
    const resultado = lista.every((usuario) => {
        return usuario.idade > 17
    });

    if(resultado){
        console.log('Festa liberada!');
    } else {
        console.log('Possui menor de idade!');
    }
}

ficalizacao(usuarios)

