const express = require('express')
const { listarGastos, listarGasto } = require('./controladores/gastos')
const { atualizarUsuario, cadastrarUsuario } = require('./controladores/usuarios')

const rotas = express()

rotas.post('/usuarios', cadastrarUsuario)
rotas.get('/usuarios/:id/gastos', listarGastos)
rotas.get('/usuarios/:idPessoa/gastos/:idGasto', listarGasto)

rotas.put('/usuarios/:id', atualizarUsuario)

module.exports = rotas