const { differenceInMilliseconds } = require('date-fns');

// differenceInMilliseconds(dateLeft, dateRight)

const data = differenceInMilliseconds( // diferença em milissegundos. Tem para tudo!
    new Date(2014, 6, 2, 12, 30, 21, 700),
    new Date(2014, 6, 2, 12, 30, 20, 600)
);

console.log(data);
/* 1100 */