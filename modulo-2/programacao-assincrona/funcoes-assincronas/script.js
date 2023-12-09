const { getCityFromZipcode } = require('utils-playground');

// const cidade = getCityFromZipcode('60810010');
// console.log(cidade);

// getCityFromZipcode('60810010').then(cidade => {
//     console.log(cidade);

// }).catch((erro) => {
//     console.log(erro);
// });

const cidade = getCityFromZipcode('');

cidade.then(cidade => {
    console.log(cidade);
});

cidade.catch((erro) => {
    console.log(erro.message);
});

console.log(cidade);