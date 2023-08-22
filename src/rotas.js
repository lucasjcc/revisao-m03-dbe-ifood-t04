const express = require('express')
const { listarGastos, listarGasto } = require('./controladores/gastos')

const rotas = express()

rotas.get('/usuarios/:id/gastos', listarGastos)
rotas.get('/usuarios/:idPessoa/gastos/:idGasto', listarGasto)

module.exports = rotas