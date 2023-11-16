const imprimirMaju = () => {
    console.log('Maria Júlia');
}

setTimeout(imprimirMaju, 5000)
// referencia da funcao, tempo para executar em milisegundos

setTimeout(() => {
    console.log('Cubos Academy');
}, 2000)

setTimeout(function(){
    console.log('Guido');
}, 3000)