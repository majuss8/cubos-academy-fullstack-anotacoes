const { isSameDay } = require('date-fns'); // is same = é o mesmo? Tem vários assim como o set

// isSameDay(dateLeft, dateRight)

const data = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0));

console.log(data);
/* true */