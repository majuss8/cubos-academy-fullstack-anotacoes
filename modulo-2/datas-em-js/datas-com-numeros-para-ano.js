// const date = Date();
// console.log(date);
/* Mon Dec 11 2023 17:58:30 GMT-0300 (Horário Padrão de Brasília) */

const date = new Date(2020, 0, 1, 12, 30, 45, 916); // os meses começam a ser contados do zero, então 1 é fevereiro.
// os parâmetros são apenas números
console.log(date);
/* 2020-02-01T03:00:00.000Z */ // se não informar o dia ele coloca o primeiro, os dias começam do 1.

/* 2020-01-01T15:30:45.916Z */ // em utc são 3 horas a mais
// ano mês dia hora minuto segundo milessegundo