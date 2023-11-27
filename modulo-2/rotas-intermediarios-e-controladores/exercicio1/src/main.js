const express = require('express');
const { listagemGeralDeCarros, encontrarCarro } = require('./controladores/carros')
const { validarSenha } = require('./intermediarios')

const app = express();

app.use(validarSenha)

app.get('/carros', listagemGeralDeCarros)

app.get('/carros/:id', encontrarCarro)

app.listen(3000);

