const express = require('express'); // para criar as rotas
const rotas = express();
const instrutores = require('./controladores/instrutores')

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor); // cadastrar um instrutor
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);

module.exports = rotas;
