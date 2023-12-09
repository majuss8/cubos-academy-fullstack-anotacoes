const { getCityFromZipcode } = require('utils-playground');

// Código Síncrono
// console.log('início');

// for (let index = 1; index < 6; index++) {
//     console.log(index);
// }

// console.log('fim');

// Código Assíncrono
console.log('início');

getCityFromZipcode('60810010').then(cidade => { // função assíncrona
    console.log(cidade);
});

console.log('fim');

const cidade = getCityFromZipcode('60810010');

console.log(cidade);

/* Promise { <pending> } */

