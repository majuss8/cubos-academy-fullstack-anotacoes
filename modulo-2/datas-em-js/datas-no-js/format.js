// const datefns = require('date-fns');

const { format } = require('date-fns');

// console.log(format);
/* [Function: format] */

// format(date, format, [options])

const date = new Date();

console.log(format(date, "dd-MMM-yyyy"));
/* 11-Dec-2023 */
console.log(format(date, "dd/MMM/yyyy"));
/* 11/Dec/2023 */
console.log(format(date, "dd de MMM de yyyy"));
/* 11 112 Dec 112 2023 */ // !! errado
console.log(format(date, "dd 'de' MMM 'de' yyyy"));
/* 11 de Dec de 2023 */
