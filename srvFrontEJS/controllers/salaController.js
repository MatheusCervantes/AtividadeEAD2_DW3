exports.home = (req, res) => {
    res.render('index', { title: 'Manutenção de Salas de Aula - EJS' });
};

exports.manutSalaDeAula = (req, res) => {
    const salas = [
        { id: 1, descricao: 'Sala 101', localizacao: 'Primeiro andar', capacidade: 30, removido: false },
        { id: 2, descricao: 'Sala 102', localizacao: 'Primeiro andar', capacidade: 25, removido: false },
        { id: 3, descricao: 'Sala 103', localizacao: 'Segundo andar', capacidade: 40, removido: false },
        { id: 4, descricao: 'Sala 104', localizacao: 'Segundo andar', capacidade: 35, removido: false },
        { id: 5, descricao: 'Sala 201', localizacao: 'Terceiro andar', capacidade: 50, removido: false },
        { id: 6, descricao: 'Sala 202', localizacao: 'Terceiro andar', capacidade: 45, removido: false },
        { id: 7, descricao: 'Laboratório de Informática', localizacao: 'Primeiro andar', capacidade: 25, removido: false },
        { id: 8, descricao: 'Auditório', localizacao: 'Térreo', capacidade: 100, removido: false }
    ];
    res.render('manutSalaDeAula', { salas });
};
