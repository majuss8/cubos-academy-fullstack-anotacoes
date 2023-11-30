const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json()); // só aceita receber as informações em formato json

app.use(rotas); // intermediário

app.listen(3000);
