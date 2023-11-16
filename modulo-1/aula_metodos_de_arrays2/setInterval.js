/*
setInterval(() => {
    console.log('Hello World');
}, 1000)
*/

/*
const imprimir = () => {
    console.log('Hello World');
    clearInterval(interval)
}

const interval = setInterval(imprimir, 3000)
*/

let numero = 10;
const contador = setInterval(function(){
    console.log(numero);
    numero--
    if (numero === 0) {
        console.log('BOOOMM!!');
        clearInterval(contador)
    }
}, 1000)