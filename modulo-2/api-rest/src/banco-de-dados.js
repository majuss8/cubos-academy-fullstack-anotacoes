const bancoDeDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Maju',
            email: 'mjuliamary0@gmail.com',
            status: true
        },
        {
            id: 2,
            nome: 'Guido',
            email: 'guidogmail.com',
            status: true
        }        
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
};

module.exports = bancoDeDados