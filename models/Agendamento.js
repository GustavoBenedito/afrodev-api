const conexao = require('../infra/conexao');
const moment = require('moment');

class Agendamento{
    
    inserir(agendamento, resp){
        const sql = "insert into agendamentos set ?";

    const data_servico = moment(agendamento.data_servico).format("YYYY-MM-DD");
    const data_agendamento = moment().format("YYYY-MM-DD");
    const agendamentoComData = {
      ...agendamento,
      data_agendamento,
      data_servico,
    };

    const isValid = moment(agendamento.data_servico).isSameOrAfter(
      agendamento.data_agendamento
    );

    const nameIsValid = agendamento.nome_cliente.length >= 3;

    const validacoes = [
      {
        name: "data_servico",
        valid: isValid,
        mensage: "Data do Agendamento deve ser igual ou superior a atual",
      },

      {
        name: "nome_cliente",
        valid: nameIsValid,
        mensage: "O nome do cliente deve ter pelo menos 3 caracteres",
      },
    ];

    const errors = validacoes.filter((campo) => !campo.valid);

    if (errors.length > 0) {
      return resp.status(400).json(errors);
    }

    con.query(sql, agendamentoComData, (error, results) => {
      if(error) {
        resp.status(401).json(error)
      }
       resp.status(201).json({ ...agendamentoComData, id: results.insertId });
    });
    } 
}

module.exports = new Agendamento();