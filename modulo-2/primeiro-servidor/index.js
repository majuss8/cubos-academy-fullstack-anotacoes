// const array = [1, 2, 4, 6, 4, 7, 1];
/*
const lodash = require('lodash'); // importar a biblioteca, arquivo..
const arrayUnico = lodash.uniq(array);
console.log(arrayUnico);
*/
/*
const { uniq } = require('lodash'); // desestruturação
const arrayUnico = uniq(array);
console.log(arrayUnico);
*/
/*
const { uniq } = require('lodash'); // desestruturação
const array = require('./array');

const arrayUnico = uniq(array);

console.log(array);
console.log(arrayUnico);
*/

/*
const array = require('./array');
console.log(array);
*/

/*
const array = require('./array');
console.log(array.arrayLetras);
console.log(array.arrayNumeros);
*/

/*
const { arrayLetras, arrayNumeros } = require('./array');
console.log(arrayLetras);
console.log(arrayNumeros);
*/

const { uniq } = require('lodash');
const { arrayLetras, arrayNumeros } = require('./array');

console.log(arrayNumeros);
console.log(arrayLetras);

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);

