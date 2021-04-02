const conexao = require('../infra/conexao');
const moment = require('moment');

class Agendamento{
    
    inserir(agendamento){
        const sql = 'INSERT INTO agendamentos SET ? ';

        const data_servico = moment(agendamento.data_servico).format('YYYY-MM-DD');
        const data_agendamento = moment().format('YYYY-MM-DD');
        const agendamentoComData = {...agendamento, data_agendamento, data_servico};

        const isDataValida = moment(agendamento.data_servico).isSameOrAfter(agendamento.data_agendamento);
        const isNomeClienteValido = agendamento.nome_cliente.lenght >= 3;

        const validacoes = [
            {
                nome: "data_servico",
                valido: isDataValida,
                mensagem: "Data do Agendamento deve ser igual ou superior a atual"
            },
            {
                nome: "nome_cliente",
                valido: isNomeClienteValido,
                mensagem: "O nome do cliente deve ter pelo menos 3 caracteres"
            }
        ]
        conexao.query(sql, agendamentoComData, (error,results)=>{
            if(error){
                throw error
            }
            console.log(results)
        });
    } 
}

module.exports = new Agendamento