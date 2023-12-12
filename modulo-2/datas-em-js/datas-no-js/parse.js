const { parse } = require('date-fns');

// parse(dateString, formatString, referenceDate, [options])

const hoje = parse("11/12/2023", "dd/MM/yyyy", new Date());
console.log(hoje);
/* 2023-12-11T03:00:00.000Z */