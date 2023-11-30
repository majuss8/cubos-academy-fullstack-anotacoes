const express = require('express'); // para criar as rotas
const rotas = express();

rotas.get('/', (req, res) => {
    res.send('tudo OK')
});

module.exports = rotas;