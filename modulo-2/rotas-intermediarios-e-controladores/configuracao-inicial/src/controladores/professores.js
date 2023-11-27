const professores = require('../banco-de-dados'); // (..) -> volta uma pasta

const filtrarProfessores = (req, res) =>{
    // console.log(req.query); parâmetros de consulta
    // query = consulta
    const { stack } = req.query
    let resultado = professores;

    console.log('Cheguei no controlador de listagem do professor');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }

    res.send(resultado)
};

const encontrarProfessor = (req, res) =>{ // parâmetros de rota
    console.log('rota para encontrar um professor');
    const professoreEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id) // vai armazenar o professor do id informado na propriedade params
    });

    res.send(professoreEncontrado)
};

module.exports = {
    filtrarProfessores,
    encontrarProfessor
}