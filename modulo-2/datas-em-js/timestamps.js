const finalCopa = new Date(2002, 5, 30, 8);

console.log(+finalCopa);
/* 1025434800000 */ // quantos milessegundos passaram desde o ano novo de 1970 em Greenwich ate o final da copa de 2002

const finalCopaMaisUmaHora = +finalCopa + 1000*60*60 // (1 seg) * 60 (minutos) * 60 (hora) - milessegundos em 1 hora

console.log(finalCopaMaisUmaHora);
/* 1025438400000 */

const finalCopaMaisUmaHoraDate = new Date (finalCopaMaisUmaHora);

console.log(finalCopaMaisUmaHoraDate);
/* 2002-06-30T12:00:00.000Z */