const Agendamento = require('../models/Agendamento');

module.export = app => {
    app.get('/agendamentos', (req,resp) => {
        resp.send('servidor OK');
    });
    app.post('/agendamentos',(req, resp) => {
        const agendamento = req.body;
        Agendamento.inserir(agendamento,resp);

    });
};