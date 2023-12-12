const { addBusinessDays, format } = require('date-fns');

// addBusinessDays(date, amount)
// adiciona 10 dias úteis

const data = addBusinessDays(new Date(2014, 8, 1), 10);

console.log(format(data, "dd 'de' MMM 'de' yyyy"));
/* 15 de Sep de 2014 */

