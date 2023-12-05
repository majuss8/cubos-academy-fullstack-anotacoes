let { aulas, identificadorAula, instrutores } = require('../banco-de-dados');

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    if (!titulo) {
        return res.status(400).json({mensagem: 'O título é obrigatório!'});
    }

    if (!descricao) {
        return res.status(400).json({mensagem: 'A descrição é obrigatória!'});
    }
    
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe!' });
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    };

    aulas.push(aula);

    return res.status(201).json(aula);
};

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
};

const obterAula = (req, res) => {
    const { id } =  req.params;
    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: 'Aula não encontrada!' });
    }

    return res.status(200).json(aula);
};

const listarAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe!' });
    }

    const aulasInstrutor = aulas.filter((aula) => {
        return aula.instrutor_id === Number(idInstrutor);
    });

    return res.status(200).json(aulasInstrutor)
};

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    listarAulasInstrutor
};