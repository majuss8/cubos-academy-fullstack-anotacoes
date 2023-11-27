const express = require('express');
const { listagemGeralDeCarros, encontrarCarro } = require('./controladores/carros')

const app = express();

app.get('/carros', listagemGeralDeCarros)

app.get('/carros/:id', encontrarCarro)

app.listen(3000);