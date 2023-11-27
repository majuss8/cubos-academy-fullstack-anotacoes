const express = require('express');
const { filtrarProfessores, encontrarProfessor} = require('./controladores/professores');

const app = express();

const primeiroIntermediario = (req, res, next) => { 
    console.log('passei no primeiro intermediário');
    next();
};

const segundoIntermediario = (req, res, next) => { 
    console.log('passei no segundo intermediário');
    next();
}

const intermediarioDaRota = (req, res, next) => { 
    console.log('passei no intermediário da rota');
    next();
}

// app.use(primeiroIntermediario); //intermediário independente
// app.use(segundoIntermediario); 

// localhost:3000/professores
app.get('/professores', segundoIntermediario, intermediarioDaRota, filtrarProfessores); // intermediário em rota

// localhost:3000/professores/1
app.get('/professores/:id', encontrarProfessor); 

app.listen(3000);

