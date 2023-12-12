const hoje = new Date();

// console.log(hoje.getMonth());
/* 11 */ // mês
// console.log(hoje.getDay());
/* 1 */ // dia da semana ( 0 = domingo )
// console.log(hoje.getFullYear());
/* 2023 */ // ano

hoje.setDate(4); // seta o dia
console.log(hoje);
/* 2023-12-04T23:00:34.541Z */

hoje.setDate(hoje.getDate() - 30);
console.log(hoje);
/* 2023-11-04T23:16:35.598Z */

