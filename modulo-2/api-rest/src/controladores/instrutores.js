const { instrutores } = require('../banco-de-dados');
let { identificadorInstrutor } = require('../banco-de-dados'); // vai ser incrementado

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores); // recebe e manda em json, comunicação entre cliente e servidor
};

const obterInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!' })
    }

    return res.status(200).json(instrutor)
};

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatório!'});
    }

    if (!email) {
        return res.status(400).json({mensagem: 'O email é obrigatório!'});
    }
    
    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true // dinâmico
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatório!'});
    }
    if (!email) {
        return res.status(400).json({mensagem: 'O email é obrigatório!'});
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!' })
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
};

const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!' })
    }

    instrutor.status = status;

    return res.status(204).send();
};

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor
};
