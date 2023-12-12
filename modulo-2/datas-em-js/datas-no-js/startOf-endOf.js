const { startOfHour, endOfHour } = require('date-fns'); // tambem tem vários métodos

// startOfHour(date)

const data = startOfHour(new Date(2014, 8, 2, 11, 55));

console.log(data);
/* 2014-09-02T14:00:00.000Z */

// endOfHour(date)

const data2 = endOfHour(new Date(2014, 8, 2, 11, 55));

console.log(data2);
/* 2014-09-02T14:59:59.999Z */
