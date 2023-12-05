const express = require('express'); // para criar as rotas
const rotas = express();
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor); 
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAula);
rotas.get('/aulas', aulas.listarAulas);
rotas.get('/aulas/:id', aulas.obterAula);
rotas.get('/instrutores/:idInstrutor/aulas', aulas.listarAulasInstrutor);

module.exports = rotas;
