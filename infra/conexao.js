const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: 'admin',
    database: 'agenda'
})

module.exports = conexao