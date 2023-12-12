// const ontem = new Date('2023-12-10T22:43:19.980Z');
// const ontem2 = new Date('2023-12-10T22:43:19.980Z');

// console.log(ontem === ontem2);
/* false */ // as datas ocupam lugares diferentes na memória

// const ontem = new Date('2023-12-10T22:43:19.980Z');
// const ontem2 = ontem

// console.log(ontem === ontem2);
/* true */ // ontem guarda o endereço de ontem2

// const ontem = new Date('2023-12-10T22:43:19.980Z');
// const ontem2 = new Date('2023-12-10T22:43:19.980Z');

// console.log(+ontem === +ontem2);
/* true */ // use o timestamp pois transforma em número ( quanto tempo se passou desde o ano novo de 1970 em Greenwich )

const ontem = new Date('2023-12-10T22:43:19.980Z');
const ontem2 = new Date('2023-12-11T22:43:19.980Z');

console.log(+ontem < +ontem2);
/* true */

// compara-se os timestamps