const express =  require('express');

const app = express();

app.get('/home', (req, res) => { // (requisicao, resposta)
    res.send('Olá, esse é o meu primeiro servidor com express!');
});
// http://localhost:3000/home

app.get('/', (req, res) => { // (requisicao, resposta)
    res.send('Essa é minha rota principal');
});
// http://localhost:3000

app.get('/array', (req, res) => { // (requisicao, resposta)
    const array = [1, 2, 3, 4, 5];
    res.send(array);
});
// http://localhost:3000/array

app.listen(3000); //porta





