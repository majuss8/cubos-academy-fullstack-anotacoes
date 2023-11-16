// const arquivos = ['.png', '.svg', '.jpg', '.jpeg', '.bat'];

// function antivirus (listaDeAquivos) {
//     const resultado = listaDeAquivos.some((arquivo) => {
//         return arquivo === '.bat'
//     });

//     if(resultado){
//         console.log('Vírus detectado!');
//     } else {
//         console.log('Nenhum vírus detectado');
//     }
// }

// antivirus(arquivos)


const arquivos = [
    'text.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe',
    'instalador.bat'
];

const antivirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtencao = arquivo.indexOf('.bat');

        return existeExtencao !== -1;
    });

    resultado ? console.log('Vírus detectado!') : console.log('Nenhum vírus detectado')
}

antivirus(arquivos)
