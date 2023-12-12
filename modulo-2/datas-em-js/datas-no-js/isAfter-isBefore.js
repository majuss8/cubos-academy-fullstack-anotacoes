const { isAfter, isBefore } = require('date-fns');

// isAfter(date, dateToCompare) / is after = é depois?

const data = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));

console.log(data);
/* true */

// isBefore(date, dateToCompare) / is before = é antes?

const data2 = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));

console.log(data2);
/* false */