const { add } = require('date-fns');

// add(date, duration)

const hoje = new Date();

console.log(hoje);
/* 2023-12-12T00:05:40.639Z */

console.log(add(hoje, {
    seconds: 2
}));
/* 2023-12-12T00:07:24.236Z */
console.log(add(hoje, {
    seconds: 2,
    days: 1
}));
/* 2023-12-13T00:08:07.541Z */
console.log(add(hoje, {
    seconds: 2,
    days: 1,
    years: 10
}));
/* 2033-12-13T00:08:37.466Z */

console.log(hoje);
/* 2023-12-12T00:05:40.639Z */ // não muda a original
