const { set } = require('date-fns');

// set(date, values)

// seta as propriedades para alteração. Tambem tem set específicos como o difference

const data = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 });

console.log(data);
/* 2015-10-20T02:00:00.000Z */

const data2 = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 });

console.log(data2);
/* 2014-09-01T15:23:45.000Z */