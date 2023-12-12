const finalCopa = new Date(2002, 5, 30, 8);

const inicioTimestamp = +finalCopa;

const primeiroGolTimestamp = inicioTimestamp + (45+15+22) * 60 * 1000; 

const primeiroGolDate = new Date(primeiroGolTimestamp);

console.log(primeiroGolDate);
/* 2002-06-30T12:22:00.000Z */

console.log(new Date(+finalCopa + (45+15+38) * 60 * 1000)); // (minutos) * 60 (segundos) * 1000 (milessegundos)
/* 2002-06-30T12:38:00.000Z */