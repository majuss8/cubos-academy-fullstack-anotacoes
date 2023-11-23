const express = require('express');
const app = express();

const professores = [
    { id: 1, nome: 'Guido', stack: 'Backend' },
    { id: 2, nome: 'Dani', stack: 'Frontend' },
    { id: 3, nome: 'Diego', stack: 'Frontend' },
    { id: 4, nome: 'Vidal', stack: 'Backend' }
];

// localhost:3000/professores
app.get('/professores', (req, res) =>{
    console.log(req.query);  // parâmetros de consulta
    // quey = consulta
    res.send(professores)
});

// localhost:3000/professores/1
app.get('/professores/:id', (req, res) =>{ // parâmetros de rota
    const professoreEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id) // vai armazenar o professor do id informado na propriedade params
    });

    res.send(professoreEncontrado)
}); // essa rota precisa da primeira

app.listen(3000);