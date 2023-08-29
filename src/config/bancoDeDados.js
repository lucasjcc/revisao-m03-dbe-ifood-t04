const { userBd, hostBd, databaseBd, passwordBd, portBd } = require('../../dadosSensiveis')
const { Pool } = require('pg')
 
const conexaoBanco = new Pool({
  user: userBd,
  host: hostBd,
  database: databaseBd,
  password: passwordBd,
  port: portBd
})

module.exports = conexaoBanco